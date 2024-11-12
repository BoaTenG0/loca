import { TextField, FormControl, InputAdornment, IconButton } from '@mui/material'
import { FormikErrors } from 'formik'
import { Eye, EyeSlash } from 'iconsax-react'
import React, { useState } from 'react'

interface Props<T = any> {
  fullWidth?: boolean
  label?: string
  parentClassname?: string
  style?: T
  isRequired?: boolean
  extraWidget?: React.ReactNode
  inputStyle?: T
  readOnly?: boolean
  inputName?: string
  inputType?: 'text' | 'password' | 'number' | 'email' | 'date'
  placeholder?: string
  handleChange?: (e: any) => void
  handleBlur?: (e: T) => void
  beforeIcon?: React.ReactNode
  afterIcon?: React.ReactNode
  isPassword?: boolean
  isTextarea?: boolean
  isNumber?: boolean
  classname?: string
  rowsHeight?: number
  height?: number
  width?: number
  name?: string
  borderRadius?: string | number
  rules?: T
  currentValue?: T
  labelclassname?: string
  initialValue?: T
  restrictNonNumeric?: boolean
  error?: boolean
  errorMessage?: string | string[] | FormikErrors<any> | (string[] | FormikErrors<any>)[] | undefined
}

const InputsTemplateNew = ({
  labelclassname,
  currentValue,
  isNumber,
  isRequired = true,
  rowsHeight,
  isPassword,
  isTextarea,
  classname,
  label,
  parentClassname,
  style,
  extraWidget,
  handleChange,
  inputName,
  inputStyle,
  inputType = 'text',
  placeholder,
  readOnly = false,
  beforeIcon,
  afterIcon,
  name,
  borderRadius = '20.84px',
  handleBlur,
  fullWidth,
  initialValue,
  restrictNonNumeric,
  error,
  errorMessage,
  height,
  width,
}: Props) => {
  const [showPassword, setShowPassword] = useState(false)

  const handleTogglePassword = () => {
    setShowPassword(!showPassword)
  }

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (restrictNonNumeric && !/\d/.test(event.key)) {
      event.preventDefault()
    }
  }

  let errorText = ''
  if (errorMessage) {
    if (typeof errorMessage === 'string') {
      errorText = errorMessage
    } else if (typeof errorMessage === 'object') {
      errorText = Object.values(errorMessage)
        .map((value) => {
          if (Array.isArray(value)) {
            return value.join(', ')
          } else {
            return value
          }
        })
        .join(', ')
    }
  }

  return (
    <FormControl className={parentClassname} style={{ ...style, zIndex: 0 }} fullWidth={fullWidth || true}>
      {label && <p className={labelclassname}>{label}</p>}
      <TextField
        sx={{
          height: { height },
          width: { width },
          '& .MuiInputBase-root': {
            height: '100%',
            borderRadius: { borderRadius },
            zIndex: 0,
          },
        }}
        variant="outlined"
        name={inputName}
        type={isPassword ? (showPassword ? 'text' : 'password') : inputType}
        placeholder={placeholder}
        required={isRequired}
        disabled={readOnly}
        InputProps={{
          startAdornment: beforeIcon && <InputAdornment position="start">{beforeIcon}</InputAdornment>,
          endAdornment: isPassword ? (
            <InputAdornment position="end">
              <IconButton aria-label="toggle password visibility" onClick={handleTogglePassword} edge="end">
                {showPassword ? <Eye /> : <EyeSlash />}
              </IconButton>
            </InputAdornment>
          ) : (
            afterIcon && <InputAdornment position="end">{afterIcon}</InputAdornment>
          ),
        }}
        multiline={isTextarea}
        // rows={isTextarea ? rowsHeight : undefined}
        minRows={isTextarea ? rowsHeight : 1}
        maxRows={isTextarea ? rowsHeight : 1}
        inputProps={{
          onKeyPress: handleKeyPress,
          readOnly,
          style: inputStyle,
        }}
        value={currentValue}
        className={classname}
        onChange={(e) => handleChange && handleChange(e)}
        onBlur={(e) => handleBlur && handleBlur(e)}
        error={error}
        helperText={error && errorText}
        style={{ zIndex: 0 }}
      />
      {extraWidget && <div>{extraWidget}</div>}
    </FormControl>
  )
}

export default InputsTemplateNew
