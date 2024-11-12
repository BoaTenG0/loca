// export { auth as middleware } from "../auth"

import createMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing'
import { NextRequest, NextResponse } from 'next/server'
// import { getToken } from 'next-auth/jwt'
import { auth } from '../auth'

// const publicPages = ['/','/e', '/en/forgot-password', '/fr', '/fr/forgot-password']

// export default createMiddleware(routing);
const intlMiddleware = createMiddleware(routing)

const authMiddleware = auth(async (req) => {
  // //   const { nextUrl } = req
  // //   //   // const isPublicRoute = publicPages.includes(nextUrl.pathname)

  // //   //   // const token = await getToken({
  // //   //   //   req: req,
  // //   //   //   secret: process.env.AUTH_SECRET,
  // //   //   // })

  const intlResponse = intlMiddleware(req)
  const acceptLanguage = req.headers.get('accept-language')
  const browserLocale = acceptLanguage ? acceptLanguage.split(',')[0].split('-')[0] : ''

  if (intlResponse) {
    const localeHeader = intlResponse.headers.get('x-middleware-request-x-next-intl-locale')

    //     // If the locale from next-intl is different from the browser's locale, replace the locale in the URL
    if (localeHeader && browserLocale !== localeHeader && routing.locales.includes(browserLocale as 'en' | 'fr')) {
      const newPathname = req.nextUrl.pathname.replace(new RegExp(`^/${localeHeader}`), `/${browserLocale}`)
      req.nextUrl.pathname = newPathname

      return NextResponse.redirect(req.nextUrl)
    }

    //     // if (!token?.accessToken) {
    //     //   if (!publicPages.includes(nextUrl.pathname)) {
    //     //     return NextResponse.redirect(new URL(`/${browserLocale}`, req.url))
    //     //   }
    //     // }
    return intlResponse
  }

  return intlMiddleware(req)
})

export default function middleware(req: NextRequest) {
  //   const publicPathnameRegex = RegExp(
  //     `^(/(<span class="math-inline">\{locales\.join\("\|"\)\}\)\)?\(</span>{publicPages
  //       .flatMap((p) => (p === "/" ? ["", "/"] : p))
  //       .join("|")})/?$,
  //     'i'`
  //   )

  //   const isPublicPage = publicPathnameRegex.test(req.nextUrl.pathname)

  //   if (isPublicPage) {
  //     return intlMiddleware(req)
  //   }

  // return (authMiddleware as any)(req)
  return (authMiddleware as (req: NextRequest) => NextResponse | Promise<NextResponse>)(req)
}

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(fr|en)/:path*'],
}
