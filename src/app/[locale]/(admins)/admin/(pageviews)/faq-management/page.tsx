import React, { Suspense } from 'react'
import FrequentlyAskedQuestions from '../../_widget/_;pages/help-support/faq'
import Loading from '@/components/templates/loading'

const Page = () => {
  return (
    <div className="w-full h-full">
      <Suspense fallback={<Loading />}>
        <FrequentlyAskedQuestions />
      </Suspense>
    </div>
  )
}

export default Page
