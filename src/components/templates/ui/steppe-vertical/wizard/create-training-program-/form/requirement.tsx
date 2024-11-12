import React from 'react'
import { useFormikContext, FieldArray } from 'formik'
import { Button, Grid, Typography } from '@material-ui/core'
import { InputField } from '../form-fields'
import { Stack } from '@mui/material'
import checkoutFormModel from '../form-model/preview-form-model'
import ButtonTemplate from '@/components/templates/ui/button/button'
import { AddCircle } from 'iconsax-react'

// Define the FormValues type
export interface FormValues {
  title: string
  description: string
  requirement: string[]
  lessonModuleOne: string
  lessonModuleTwo: string
  learn: string[]
  cover: File[]
  uploadOne: File[]
  uploadTwo: File[]
}

export default function RequirementForm(props: { formField: { requirement: { name: keyof FormValues; label: string } } }) {
  const { values, setFieldValue } = useFormikContext<FormValues>()
  const {
    formField: { requirement },
  } = props

  return (
    <Stack alignItems="flex-start" sx={{ p: 5 }}>
      <Typography gutterBottom style={{ fontFamily: 'Poppins' }}>
        Requirement
      </Typography>
      <FieldArray name={requirement.name}>
        {({ push }) => (
          <>
            <Grid container spacing={3}>
              {(values[requirement.name] as string[]).map((_, index) => (
                <Grid item xs={12} key={index}>
                  <InputField name={`${requirement.name}[${index}]`} label={`Module ${index + 1}`} fullWidth />
                </Grid>
              ))}
            </Grid>
            {/* <Button
              styles={{ color: '#000', marginTop: 20, padding: 0, backgroundColor: "transparent" }}
              onClick={() => push('')}
            >
              Add new module
            </Button> */}
            <ButtonTemplate
              btnType="text"
              label={'Add new module'}
              prefixIcon={<AddCircle />}
              handleClick={() => push('')}
              styles={{ color: '#000', marginTop: 20, padding: 0, backgroundColor: 'transparent' }}
            />
          </>
        )}
      </FieldArray>
    </Stack>
  )
}
