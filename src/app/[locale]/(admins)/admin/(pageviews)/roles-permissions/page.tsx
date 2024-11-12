import Loading from '@/components/templates/loading'
import { Suspense } from 'react'
import RolesPermission from '../../_widget/_;pages/roles-permissions/roles'

const Page = () => {
  return (
    <div className="w-full h-full">
      <Suspense fallback={<Loading />}>
        <RolesPermission />
      </Suspense>
    </div>
  )
}
export default Page
