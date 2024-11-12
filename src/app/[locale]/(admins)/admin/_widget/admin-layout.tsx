import LayoutAdmin from '@/components/templates/dashboard/layout/page'
import Loader from '@/components/templates/loader'
// import Loading from '@/components/templates/loading'
import { Suspense } from 'react'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-full">
      <Suspense fallback={<Loader />}>
        <LayoutAdmin children={children} />{' '}
      </Suspense>
    </div>
  )
}
