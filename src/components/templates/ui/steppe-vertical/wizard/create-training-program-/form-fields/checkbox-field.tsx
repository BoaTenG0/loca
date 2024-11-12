import React from 'react'
import { at } from 'lodash'
import { FieldHookConfig, useField } from 'formik'
import { Checkbox, FormControl, FormControlLabel, FormControlProps, FormHelperText } from '@mui/material'

interface CheckboxFieldProps extends FormControlProps {
  label: string
  name: string
}

export default function CheckboxField({ label, name, ...rest }: CheckboxFieldProps) {
  //   const { label, ...rest } = props
  //   const [field, meta, helper] = useField(props)
  const [field, meta, helper] = useField({ name } as FieldHookConfig<any>)
  const { setValue } = helper

  function _renderHelperText() {
    const [touched, error] = at(meta, 'touched', 'error')
    if (touched && error) {
      return <FormHelperText>{error}</FormHelperText>
    }
  }

  function _onChange(e: { target: { checked: any } }) {
    setValue(e.target.checked)
  }

  return (
    <FormControl {...rest}>
      <FormControlLabel
        value={field.checked}
        checked={field.checked}
        control={<Checkbox {...field} onChange={_onChange} />}
        label={label}
      />
      {_renderHelperText()}
    </FormControl>
  )
}
