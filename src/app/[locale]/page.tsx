// import { useTranslations } from 'next-intl'
// import { Link } from '@/i18n/routing'

// export default function HomePage() {
//   const t = useTranslations('HomePage')
//   return (
//     <div className="grid grid-cols-3 text-red-700">
//       <h1>{t('userName')}</h1>
//       <Link href="/about">{t('about')}</Link>
//       <div className="flex flex-row">
//         <div className="">1mnjmnb</div>
//         <div className="">1</div>
//       </div>
//     </div>
//   )
// }

// import { useTranslations } from 'next-intl'
// import { Link } from '@/i18n/routing'
import Loading from '@/components/templates/loading'
import LoginScreen from '@/components/generals/authentication/_widgets/login'
import { Suspense } from 'react'

export default function HomePage() {
  // const t = useTranslations('HomePage')
  return (
    <div className="w-full h-full">
      <Suspense fallback={<Loading />}>
        <LoginScreen />
      </Suspense>
    </div>
  )
}
