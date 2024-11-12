import Loading from '@/components/templates/loading'
import { Suspense } from 'react'
import BankApprovals from '../../../_widget/_;pages/finance/bank-approvals/bank'

const Page = () => {
  return (
    <div className="w-full h-full">
      <Suspense fallback={<Loading />}>
        <BankApprovals />
      </Suspense>
    </div>
  )
}
export default Page
