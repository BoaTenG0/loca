import Loading from '@/components/templates/loading'
import { Suspense } from 'react'
import Crops from '../../_widget/_;pages/crops/crops'

const Page = () => {
  return (
    <div className="w-full h-full">
      <Suspense fallback={<Loading />}>
        <Crops />
      </Suspense>
    </div>
  )
}
export default Page
