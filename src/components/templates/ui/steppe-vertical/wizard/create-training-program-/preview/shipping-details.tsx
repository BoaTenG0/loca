import React, { useEffect, useState } from 'react'
// import { Typography, Grid } from '@mui/material'
import {useStyles} from './styles'
import DrawerTemplateNew from '@/components/templates/ui/dialogs/drawer-new'
import { UpdateStates } from '@/lib/functions/update-states'
import DrawerOpen from './drawer.open'
import { useFormikContext } from 'formik'
import { Grid } from '@mui/material'

export type MyStates<T = any> = {
  modalOpen: boolean
  modalTitle: string
}
const closeDetailsModal = (setMyStates: React.Dispatch<React.SetStateAction<MyStates>>) => {
  UpdateStates(setMyStates, undefined, undefined, { modalOpen: false, modalTitle: '' })
}
function PaymentDetails(props: { currentStep: number }) {
  const { values: formValues } = useFormikContext()

  const { currentStep } = props
  const [myStates, setMyStates] = useState<MyStates>({
    modalOpen: false,
    modalTitle: '',
  })

  useEffect(() => {
    if (currentStep === 4) {
      setMyStates((prevState) => ({ ...prevState, modalOpen: true, modalTitle: 'Payment Details' }))
    }
  }, [currentStep])

  return (
    <Grid item xs={12} sm={6}>
      {/* {cover && cover.length > 0 && (
        <div>
          {cover.map(
            (
              file: File,
              index: number 
            ) => (
              <img
                key={index}
                src={URL.createObjectURL(file)}
                alt={`Uploaded Cover ${index + 1}`} 
                style={{ width: '50px', height: '50px', borderRadius: '50%', marginRight: '5px' }} 
              />
            )
          )}
        </div>
      )} */}

      <DrawerTemplateNew
        open={myStates.modalOpen}
        title={myStates.modalTitle}
        onClose={() => closeDetailsModal(setMyStates)}
        customComponent={<DrawerOpen formValues={formValues} />}
        size={520}
      />
    </Grid>
  )
}

export default PaymentDetails
