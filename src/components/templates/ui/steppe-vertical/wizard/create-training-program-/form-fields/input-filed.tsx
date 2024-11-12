import React from 'react'
import { at } from 'lodash'
import { useField, FieldHookConfig } from 'formik'
import { TextField, StandardTextFieldProps, FilledTextFieldProps, OutlinedTextFieldProps } from '@mui/material'

type CustomTextFieldProps = (StandardTextFieldProps | FilledTextFieldProps | OutlinedTextFieldProps) & {
  name: string
  errorText?: string
}

export default function InputField(props: CustomTextFieldProps) {
  const { errorText, ...rest } = props
  const [field, meta] = useField(props as FieldHookConfig<string>)

  function _renderHelperText() {
    const [touched, error] = at(meta, 'touched', 'error')
    if (touched && error) {
      return error
    }
  }

  return (
    <TextField
      type="text"
      error={Boolean(meta.touched && meta.error)}
      helperText={_renderHelperText()}
      {...field}
      {...rest}
      variant="outlined"
      InputProps={{
        style: {
          borderRadius: '5px',
          borderColor: meta.touched && meta.error ? 'red' : '#808080',
        },
      }}
    />
  )
}
