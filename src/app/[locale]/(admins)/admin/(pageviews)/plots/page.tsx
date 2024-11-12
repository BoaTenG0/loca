import Plots from '../../_widget/_;pages/plots/plots'

import Loading from '@/components/templates/loading'
import { Suspense } from 'react'

const Page = () => {
  return (
    <div className="w-full h-full">
      <Suspense fallback={<Loading />}>
        <Plots />
      </Suspense>
    </div>
  )
}
export default Page
