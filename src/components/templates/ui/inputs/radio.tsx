import { Form, Radio } from 'antd'
import React, { Fragment } from 'react'

interface Props<T = any> {
  isGroup?: boolean
  options: T
  name?: string
  defaultValue?: string | number
  labelCol?: T
  wrapperCol?: T
  label?: string
  parentClassname?: string
  radioStyle?: T
  isRequired?: boolean
  handleChange?: (value?: T) => void
  classname?: T
  layout?: T
  value?: string | number
}

const RadioTemplate: React.FC<Props> = ({
  isGroup,
  options,
  value,
  name,
  defaultValue,
  labelCol,
  wrapperCol,
  label,
  parentClassname,
  radioStyle,
  isRequired = false,
  handleChange,
  classname,
  layout,
}) => {
  return (
    <Form.Item
      labelCol={{ span: labelCol }}
      layout={layout}
      wrapperCol={{ span: wrapperCol }}
      label={label && <p className="text-base p-0">{label}</p>}
      className={parentClassname}
      style={radioStyle}
      rules={[
        {
          required: isRequired,
        },
      ]}
      name={name}
    >
      <Radio.Group name={name} onChange={handleChange} value={value} defaultValue={1}>
        {options?.map((item: any, index: number) => {
          return (
            <Fragment key={index}>
              <Radio value={item.value}>{item.label}</Radio>
            </Fragment>
          )
        })}
      </Radio.Group>
    </Form.Item>
  )
}

export default RadioTemplate
