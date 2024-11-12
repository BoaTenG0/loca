'use client'

import React, { CSSProperties, useEffect, useState } from 'react'
import { FormControl, InputLabel, Select, MenuItem, FormHelperText, CircularProgress, SelectChangeEvent } from '@mui/material'

// interface Option {
//   [key: string]: any;
// }

interface Props<T = any> {
  width?: string | number
  name?: string
  style?: T
  label?: string
  idexpr?: string // Expression to extract ID from option
  dataexp?: string // Expression for displaying value
  dataExprArray?: string[] // Array of expressions for display
  defaultValue?: T
  isDisabled?: boolean
  isRequired?: boolean
  options?: T
  extraWidget?: React.ReactNode
  placeholder?: string
  selectStyle?: T
  handleChange?: (value: T) => void
  leadingIcon?: React.ReactNode
  loading?: boolean // Optional loading state
  labelClassname?: string // Classname for label
  dropdownStyle?: CSSProperties // Styles for dropdown
}

const SelectsTemplate = ({
  idexpr,
  name,
  dataexp,
  dataExprArray,
  selectStyle,
  labelClassname,
  handleChange,
  isDisabled,
  label,
  placeholder,
  style,
  options,
  extraWidget,
  defaultValue,
  isRequired,
  leadingIcon,
  loading,
  width,
}: Props) => {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(defaultValue)
  // const [selectedValue, setSelectedValue] = useState<string | undefined>(undefined)
  const displayExpr = dataExprArray || [dataexp]

  useEffect(() => {
    if (defaultValue) {
      setSelectedValue(defaultValue)
    } else {
      setSelectedValue(undefined)
    }
  }, [defaultValue])

  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    const value = event.target.value as string
    setSelectedValue(value)
    handleChange && handleChange(value)
  }

  return (
    <FormControl variant="outlined" style={style} required={isRequired} disabled={isDisabled}>
      {label && <InputLabel className={labelClassname}>{label}</InputLabel>}
      <div className="flex items-center">
        {leadingIcon && <span className="absolute pl-2">{leadingIcon}</span>}
        <Select
          sx={{
            width: width || 400,
            height: '30px',
            // '& .MuiOutlinedInput-notchedOutline': { border: 'none' }
          }}
          value={selectedValue}
          name={name}
          onChange={handleSelectChange}
          style={{ ...selectStyle }}
          placeholder={placeholder}
          displayEmpty
        >
          {loading ? (
            <MenuItem disabled>
              <CircularProgress size={24} />
            </MenuItem>
          ) : (
            options?.map((option: any) => (
              <MenuItem key={option[idexpr!]} value={JSON.stringify(option)}>
                {displayExpr
                  .map((expr: any) => (option[expr] || '').charAt(0).toUpperCase() + (option[expr] || '').slice(1).toLowerCase())
                  .join(' ')}
              </MenuItem>
            ))
          )}
        </Select>
        {extraWidget && <div>{extraWidget}</div>}
      </div>
      {isRequired && <FormHelperText>This field is required.</FormHelperText>}
    </FormControl>
  )
}

export default SelectsTemplate
