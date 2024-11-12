import { Radio, RadioGroup, FormControlLabel } from '@mui/material'

interface Props {
  options: Array<{ label: string; value: string | number }>
  value: string | number
  name?: string
  onChange: (value: string | number) => void
}

const RadioTemplate: React.FC<Props> = ({ options, value, name, onChange }) => {
  return (
    <RadioGroup name={name} value={value} onChange={(e) => onChange(e.target.value)}>
      <div className="flex">
        {options.map((option) => (
          <FormControlLabel key={option.value} value={option.value} label={option.label} control={<Radio />} />
        ))}
      </div>
    </RadioGroup>
  )
}

export default RadioTemplate
