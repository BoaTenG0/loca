import axios from 'axios'
import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

interface User {
  id: string
  role: string
  displayName: string
  username: string
  accountType: string
}

interface Token {
  accessToken: string
  refreshToken: string
  accessTokenExpiry: number
  refreshTokenExpiry: number
  exp: number
  user: {
    accessToken: string
    refreshToken: string
    accessTokenExpiry: number
    refreshTokenExpiry: number
    user: {
      id: string
      role: string
      displayName: string
      username: string
      accountType: string
    }
  }
}

interface RefreshTokenInterface {
  accessToken: string
  refreshToken: string
  accessTokenExpiry: number
  refreshTokenExpiry: number
  user: {
    id: string
    role: string
    displayName: string
    username: string
    accountType: string
  }
}
const MyRefreshTokenHandler = async (token: RefreshTokenInterface) => {
  // try {
  //   const { data } = await axios.post(
  //     process.env.NEXT_PUBLIC_API_URL + "/auth/refresh",
  //     {
  //       refreshToken: token.refreshToken,
  //     },
  //     { headers: { "X-Tenant-Domain": token.refresh } }
  //   );
  //   if (data.data.accessToken) {
  //     session.user.accessToken = data.data.accessToken;
  //     session.user.refreshToken = data.data.refreshToken;
  //     session.user.accessTokenExpiry = data.data.accessTokenExpiry;
  //     session.user.refreshTokenExpiry = data.data.refreshTokenExpiry;
  //     session.user.user = data.data.user;
  //   }
  //   return session;
  // } catch (e: any) {
  //   console.log(e);
  //   throw new Error(e);
  // }

  try {
    const { data } = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/refresh`, undefined, {
      headers: {
        'X-Refresh-Token': token.refreshToken,
      },
    })
    return {
      ...token,
      accessToken: data.data.accessToken,
      refreshToken: data.data.refreshToken,
      accessTokenExpiry: data.data.accessTokenExpiry,
      exp: data.data.refreshTokenExpiry,
      user: data.data.user,
    }
  } catch {
    return {
      ...token,
      error: 'RefreshAccessTokenError',
    }
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        try {
          const { data } = await axios.post(
            process.env.NEXT_PUBLIC_API_URL + '/auth/login',

            {
              username: credentials?.username,
              password: credentials?.password,
            },
            { headers: { 'X-Tenant-Domain': 'school' } }
          )
          if (data.data.accessToken) {
            return data.data
          }
          return
        } catch (error: unknown) {
          if (typeof error === 'string') {
            throw new TypeError(error)
          } else if (error instanceof Error) {
            throw new TypeError(error.message)
          } else {
            throw new TypeError('An unknown error occurred')
          }
        }
      },
    }),
  ],

  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        // User is available during sign-in
        token.accessToken = user.accessToken
        token.refreshToken = user.refreshToken
        token.accessTokenExpiry = user.accessTokenExpiry
        token.exp = user.refreshTokenExpiry
        token.user = user.user
      }
      const remainingTime = (token as unknown as Token).accessTokenExpiry - 5 * 60

      const currentTimestamp = Math.floor(Date.now() / 1000)
      const shouldRefreshTime = remainingTime - currentTimestamp
      if (shouldRefreshTime > 0) {
        return token
      }
      // console.log("=======>", token);
      const newToken = await MyRefreshTokenHandler(token as unknown as RefreshTokenInterface)
      // console.log("=======> Resolved Token", newToken);
      return newToken

      // return token
    },
    session: async ({ session, token }) => {
      const user = token.user as User
      session.user.id = user.id
      session.user.role = user.role
      session.user.displayName = user.displayName
      // session.user.username = user.username;
      // session.user.accountType = user.accountType;
      return session
    },
  },
  pages: {
    signIn: '/dash',
    error: '/',
    signOut: '/',
  },
})
