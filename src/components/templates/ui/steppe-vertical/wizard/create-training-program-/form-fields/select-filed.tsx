import React from 'react'
import PropTypes from 'prop-types'
import { at } from 'lodash'
import { useField } from 'formik'
import { InputLabel, FormControl, Select, MenuItem, FormHelperText, FormControlProps } from '@material-ui/core'

interface SelectFieldProps extends FormControlProps {
  label: string
  data: { value: string | number | undefined; label: string }[] // Include `null` in the type
  name: string // 'name' is required for Formik's useField hook
}

function SelectField(props: SelectFieldProps) {
  const { label, data, ...rest } = props
  //   const [field, meta] = useField(props);
  const [field, meta] = useField({ name: props.name })
  const { value: selectedValue } = field
  const [touched, error] = at(meta, 'touched', 'error')
  const isError = touched && error && true
  function _renderHelperText() {
    if (isError) {
      return <FormHelperText>{error}</FormHelperText>
    }
  }

  return (
    <FormControl {...rest} error={isError}>
      <InputLabel>{label}</InputLabel>
      <Select {...field} value={selectedValue ? selectedValue : ''}>
        {data.map((item, index) => (
          <MenuItem key={index} value={item.value ?? ''}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
      {_renderHelperText()}
    </FormControl>
  )
}

SelectField.defaultProps = {
  data: [],
}

SelectField.propTypes = {
  data: PropTypes.array.isRequired,
}

export default SelectField
