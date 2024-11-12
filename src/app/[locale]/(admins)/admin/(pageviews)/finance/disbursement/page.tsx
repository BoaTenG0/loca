import Loading from '@/components/templates/loading'
import { Suspense } from 'react'
import Disbursement from '../../../_widget/_;pages/finance/disbursement/disbursement'

const Page = () => {
  return (
    <div className="w-full h-full">
      <Suspense fallback={<Loading />}>
        <Disbursement />
      </Suspense>
    </div>
  )
}
export default Page
