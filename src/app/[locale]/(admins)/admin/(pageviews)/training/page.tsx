import Loading from '@/components/templates/loading'
import { Suspense } from 'react'
import Training from '../../_widget/_;pages/training/train'

const Page = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Training />
    </Suspense>
  )
}
export default Page
