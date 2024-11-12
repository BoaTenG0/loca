// types/next-auth.d.ts
import { DefaultSession } from 'next-auth'
// import { DefaultJWT } from "@auth/core/jwt";

declare module 'next-auth' {
  interface AdapterUser {
    id: string
    role: string
    displayName: string
    username: string
    accountType: string
  }

  interface User extends AdapterUser {
    accessToken: string
    refreshToken: string
    accessTokenExpiry: number
    refreshTokenExpiry: number
    user: AdapterUser
  }

  interface Session {
    user: AdapterUser & DefaultSession['user']
  }

  interface JWT {
    accessToken: string
    refreshToken: string
    accessTokenExpiry: number
    refreshTokenExpiry: number
    user: AdapterUser
  }
}
