import React, { Suspense } from 'react'
import AdminLayout from './_widget/admin-layout'
import DefaultLayout from '@/hooks/dummy-data/dam'
import Loading from '@/components/templates/loading'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-full">
      <Suspense fallback={<Loading />}></Suspense>
      <DefaultLayout>{children}</DefaultLayout>
    </div>
  )
}

export default Layout
