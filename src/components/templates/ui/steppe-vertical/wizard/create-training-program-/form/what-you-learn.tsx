import React from 'react'
import { useFormikContext, FieldArray } from 'formik'
import { Button, Grid, Typography } from '@mui/material'
import { InputField } from '../form-fields'
import { Stack } from '@mui/material'
import checkoutFormModel from '../form-model/preview-form-model'
import ButtonTemplate from '@/components/templates/ui/button/button'
import { AddCircle } from 'iconsax-react'

// Define the FormValues type
export interface FormValues {
  title: string
  description: string
  requirement: string
  lessonModuleOne: string
  lessonModuleTwo: string
  learn: string[] // Array of strings for modules
  cover: File[]
  uploadOne: File[]
  uploadTwo: File[]
}

export default function LearnForm(props: { formField: { learn: { name: keyof FormValues; label: string } } }) {
  const { values, setFieldValue } = useFormikContext<FormValues>()
  const {
    formField: { learn },
  } = props

  return (
    <Stack alignItems="flex-start" sx={{ p: 5 }}>
      <Typography gutterBottom style={{ fontFamily: 'Poppins' }}>
        What you will learn
      </Typography>
      <FieldArray name={learn.name}>
        {({ push }) => (
          <>
            <Grid container spacing={3}>
              {(values[learn.name] as string[]).map((_, index) => (
                <Grid item xs={12} key={index}>
                  <InputField name={`${learn.name}[${index}]`} label={`Module ${index + 1}`} fullWidth />
                </Grid>
              ))}
            </Grid>
            {/* <Button
              style={{ backgroundColor: '#199675', textTransform: 'none', color: '#fff', borderRadius: '20px', marginTop: 20 }}
              onClick={() => push('')}
              type='text'
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
