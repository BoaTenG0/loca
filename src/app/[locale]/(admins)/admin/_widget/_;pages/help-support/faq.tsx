'use client'
import React, { useState } from 'react'
import { FaqDrawer, View1, View2 } from './comp/faq-components'
import { UpdateStates } from '@/lib/functions/update-states'
import DrawerTemplateNew from '@/components/templates/ui/dialogs/drawer-new'

const FrequentlyAskedQuestions = () => {
  const [viewState, setView] = useState({
    view: 1,
    type: '',
    title: '',
    modalOpen: false,
  })
  const { view, modalOpen, type, title } = viewState
  return (
    <div>
      {view === 1 ? (
        <View1 setMyView={() => UpdateStates(setView, 'view', 2)} />
      ) : (
        <View2
          modalOpen={(newView) => {
            console.log('newView', newView)
            UpdateStates(setView, 'modalOpen', newView)
          }}
          modalType={(newType) => UpdateStates(setView, 'type', newType)}
          modalTitle={(newTitle) => UpdateStates(setView, 'title', newTitle)}
        />
      )}

      <DrawerTemplateNew
        onClose={() => UpdateStates(setView, 'modalOpen', false)}
        title={title}
        open={modalOpen}
        customComponent={<FaqDrawer />}
        size={400}
      />
    </div>
  )
}

export default FrequentlyAskedQuestions
