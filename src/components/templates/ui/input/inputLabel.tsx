import { InputLabel } from '@mui/material'

interface InputLabelTemplateProps {
  htmlFor?: string
  label: string
  className?: string
  id?: string
  color?: string
  required?: boolean
  disabled?: boolean
  shrink?: boolean
  variant?: 'standard' | 'filled' | 'outlined'
  sxOverrides?: object
}

const InputLabelTemplate = ({
  htmlFor,
  label,
  className,
  id,
  required,
  disabled,
  shrink,
  variant,
  color = '#0E5340',
  sxOverrides,
}: InputLabelTemplateProps) => {
  return (
    <InputLabel
      htmlFor={htmlFor}
      className={className}
      id={id}
      required={required}
      disabled={disabled}
      shrink={shrink}
      variant={variant}
      sx={{
        ...sxOverrides,
        color: color,
        fontWeight: 'bold',
        fontFamily: 'Poppins',
      }}
    >
      {label}
    </InputLabel>
  )
}

export default InputLabelTemplate
