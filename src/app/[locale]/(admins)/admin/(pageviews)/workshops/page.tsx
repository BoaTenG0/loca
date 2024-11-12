import Loading from '@/components/templates/loading'
import { Suspense } from 'react'
import Workshop from '../../_widget/_;pages/workshops/workshop'

const Page = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Workshop />
    </Suspense>
  )
}
export default Page
