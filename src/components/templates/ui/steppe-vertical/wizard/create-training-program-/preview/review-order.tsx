import React from 'react'
import { useFormikContext } from 'formik'
import { Grid } from '@mui/material'
import ProductDetails from './product-details'
import ShippingDetails from './shipping-details'

interface ReviewOrderProps {
  currentStep: number
}

export default function ReviewOrder({ currentStep }: ReviewOrderProps) {
  const { values: formValues } = useFormikContext()
  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <ShippingDetails currentStep={currentStep} />
      </Grid>
    </React.Fragment>
  )
}
