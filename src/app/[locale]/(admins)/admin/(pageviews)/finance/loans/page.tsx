import Loading from '@/components/templates/loading'
import { Suspense } from 'react'
import Loans from '../../../_widget/_;pages/finance/loans-application/loans'

const Page = () => {
  return (
    <div className="w-full h-full">
      <Suspense fallback={<Loading />}>
        <Loans />
      </Suspense>
    </div>
  )
}
export default Page
