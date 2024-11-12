'use client'

import { ConfigProvider, Form, Select } from 'antd'
import React, { CSSProperties, useEffect, useState } from 'react'

interface Props<T = any> {
  style?: T
  label?: T
  idexpr?: string
  dataexp?: string
  dataExprArray?: string[]
  defaultValue?: T
  wrapperCol?: T
  labelCol?: T
  handleChange?: (e: T) => void
  placeholder?: string
  selectStyle?: T
  isDisabled?: boolean
  isRequired?: boolean
  options?: T
  extraWidget?: T
  name?: T
  mode?: 'tags' | 'multiple'
  dropdownStyle?: CSSProperties
  optionRender?: (option: T) => JSX.Element
  labelClassname?: string
  leadingIcon?: React.ReactNode
  rules?: T
}
// const capitalize = (text: string) => {
//   return text?.charAt(0).toUpperCase() ?? "" + text.slice(1);
// };

const SelectsTemplate = ({
  name,
  mode,
  idexpr,
  dataexp,
  dataExprArray,
  selectStyle,
  labelClassname,
  handleChange,
  isDisabled,
  label,
  // labelCol,
  placeholder,
  style,
  wrapperCol,
  options,
  extraWidget,
  defaultValue,
  dropdownStyle,
  isRequired,
  optionRender,
  leadingIcon,
}: Props) => {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(undefined)
  const displayExpr = dataExprArray || [dataexp]

  useEffect(() => {
    if (defaultValue && defaultValue !== 'undefined') {
      setSelectedValue(defaultValue)
    } else {
      setSelectedValue(undefined)
    }
  }, [defaultValue])

  const handleSelectChange = (value: string) => {
    const parsedValue = mode ? value : JSON.parse(value)
    setSelectedValue(parsedValue[dataexp!])
    handleChange && handleChange(parsedValue)
  }
  // const handleSelectChange = (value: any) => {
  //   const parsedValue = mode ? value : JSON.parse(value);
  //   const displayValue = displayExpr
  //     .map((expr: any) => parsedValue[expr])
  //     .join(" ");
  //   setSelectedValue(displayValue);
  //   handleChange && handleChange(parsedValue);
  // };

  return (
    <Form.Item
      style={style}
      className=""
      label={label && <p className={`${labelClassname} text-base`}>{label}</p>}
      wrapperCol={{ span: wrapperCol && wrapperCol }}
      rules={[{ required: isRequired }]}
      name={name}
    >
      <div className="flex h-full items-center">
        {leadingIcon && <span className="absolute pl-2">{leadingIcon}</span>}
        <ConfigProvider
          theme={{
            components: {
              Select: {
                hoverBorderColor: '#199675',
                optionActiveBg: '#199675',
                activeBorderColor: '#199675',
              },
            },
          }}
        >
          <Select
            mode={mode}
            onChange={handleSelectChange}
            value={selectedValue}
            key={selectedValue}
            className="mb-0"
            allowClear={false}
            disabled={isDisabled}
            style={{
              ...selectStyle,
            }}
            optionRender={optionRender}
            placeholder={placeholder}
            dropdownStyle={dropdownStyle}
          >
            {options?.map((option: any) => (
              <Select.Option className="capitalize" key={option[idexpr!]} value={JSON.stringify(option)}>
                {/* {displayExpr
                .map((expr: any) => option[expr] || "")
                .join(" ")}{" "} */}
                {displayExpr
                  .map((expr: any) => (option[expr] || '').charAt(0).toUpperCase() + (option[expr] || '').slice(1).toLowerCase())
                  .join(' ')}
              </Select.Option>
            ))}
          </Select>
        </ConfigProvider>
        {extraWidget && <div>{extraWidget}</div>}
      </div>
    </Form.Item>
  )
}

export default SelectsTemplate
