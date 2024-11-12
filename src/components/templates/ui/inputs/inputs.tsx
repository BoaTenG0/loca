import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons'
import { ConfigProvider, Form, Input, InputNumber } from 'antd'
import { Rule } from 'antd/es/form'
import React from 'react'

interface props<T = any> {
  labelCol?: T
  wrapperCol?: T
  label?: string
  parentClassname?: string
  style?: T
  isRequired?: boolean
  extraWidget?: T
  inputStyle?: React.CSSProperties
  readOnly?: boolean
  inputName?: string
  inputType?: 'text' | 'password' | 'number' | 'email'
  placeholder?: string
  handleChange?: (e: T) => void
  handleBlur?: (e: T) => void
  beforeIcon?: T
  afterIcon?: T
  boxNumber?: number
  isPassword?: boolean
  isOTP?: boolean
  isTextarea?: boolean
  isNumber?: boolean
  classname?: string
  rowsHeight?: number
  name?: string
  rules?: T
  currentValue?: number | string | undefined
  labelclassname?: string
  initialValue?: number | string | undefined
  restrictNonNumeric?: T
}

const InputsTemplate = ({
  labelclassname,
  currentValue,
  rules,
  isNumber,
  isRequired = true,
  rowsHeight,
  isPassword,
  isTextarea,
  classname,
  isOTP,
  label,
  labelCol,
  parentClassname,
  style,
  wrapperCol,
  extraWidget,
  handleChange,
  inputName,
  inputStyle,
  inputType = 'text',
  placeholder,
  readOnly = false,
  beforeIcon,
  afterIcon,
  boxNumber,
  name,
  handleBlur,
  initialValue,
  restrictNonNumeric,
}: props) => {
  const { TextArea } = Input

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (restrictNonNumeric && !/\d/.test(event.key)) {
      event.preventDefault()
    }
  }

  return (
    <>
      <Form.Item
        labelCol={{ span: labelCol }}
        wrapperCol={{ span: wrapperCol }}
        label={label && <p className={`${labelclassname} text-base  `}>{label}</p>}
        className={parentClassname}
        name={name}
        style={style}
        rules={rules ? rules.map((rule: Rule) => ({ ...rule, required: isRequired })) : [{ required: isRequired }]}
        // hasFeedback
        initialValue={initialValue}
      >
        {isPassword ? (
          <ConfigProvider
            theme={{
              components: {
                Input: {
                  hoverBorderColor: '#199675',
                  activeBorderColor: '#199675',
                  activeShadow: '#199675',
                },
              },
            }}
          >
            <Input.Password
              name={inputName}
              // id={id}
              readOnly={readOnly}
              type={inputType}
              prefix={beforeIcon}
              style={{ ...inputStyle }}
              placeholder={placeholder}
              className={classname}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                const inputValue: string | number = e.target.value
                // setData(inputValue);
                handleChange && handleChange(inputValue)
              }}
              onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
                handleBlur && handleBlur(e)
              }}
              // value={data}
              disabled={readOnly}
              iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            />
          </ConfigProvider>
        ) : isTextarea ? (
          <ConfigProvider
            theme={{
              components: {
                Input: {
                  hoverBorderColor: '#199675',
                  activeBorderColor: '#199675',
                  activeShadow: '#199675',
                },
              },
            }}
          >
            <TextArea
              name={inputName}
              // id={id}
              readOnly={readOnly}
              rows={rowsHeight}
              prefix={beforeIcon}
              style={{ ...inputStyle }}
              className={classname}
              placeholder={placeholder}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                const inputValue: string | number = e.target.value
                // setData(inputValue);
                handleChange && handleChange(inputValue)
              }}
              onBlur={(e: React.FocusEvent<HTMLTextAreaElement>) => {
                handleBlur && handleBlur(e)
              }}
              // value={data}
              disabled={readOnly}
            />
          </ConfigProvider>
        ) : isOTP ? (
          <ConfigProvider
            theme={{
              components: {
                Input: {
                  hoverBorderColor: '#199675',
                  activeBorderColor: '#199675',
                  activeShadow: '#199675',
                },
              },
            }}
          >
            <Input.OTP
              length={boxNumber}
              disabled={readOnly}
              formatter={(str) => str.toUpperCase()}
              className={classname}
              style={{ ...inputStyle }}
              onChange={(value: number | string | null) => {
                const inputValue = value ?? 0 // Provide a default value if value is null
                // setData(inputValue);
                handleChange && handleChange(inputValue)
              }}
              onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
                handleBlur && handleBlur(e)
              }}
            />
          </ConfigProvider>
        ) : isNumber ? (
          <ConfigProvider
            theme={{
              components: {
                Input: {
                  hoverBorderColor: '#199675',
                  activeBorderColor: '#199675',
                  activeShadow: '#199675',
                },
              },
            }}
          >
            <InputNumber
              name={inputName}
              // id={id}
              type={'number'}
              readOnly={readOnly}
              prefix={beforeIcon}
              suffix={afterIcon}
              style={{ ...inputStyle }}
              className={classname}
              placeholder={placeholder}
              onChange={(e: number | string | null) => {
                const inputValue = e ?? 0
                // setData(inputValue);
                handleChange && handleChange(inputValue)
              }}
              onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
                handleBlur && handleBlur(e)
              }}
              // value={data}
              disabled={readOnly}
            />
          </ConfigProvider>
        ) : (
          <ConfigProvider
            theme={{
              components: {
                Input: {
                  hoverBorderColor: '#199675',
                  activeBorderColor: '#199675',
                  activeShadow: '#199675',
                },
              },
            }}
          >
            <Input
              name={inputName}
              // id={id}
              readOnly={readOnly}
              type={inputType}
              prefix={beforeIcon}
              suffix={afterIcon}
              style={{ ...inputStyle }}
              className={classname}
              placeholder={placeholder}
              onKeyPress={handleKeyPress}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                const inputValue: string | number = e.target.value
                // setData(inputValue);
                handleChange && handleChange(inputValue)
              }}
              onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
                handleBlur && handleBlur(e)
              }}
              value={currentValue}
              disabled={readOnly}
            />
          </ConfigProvider>
        )}

        {extraWidget && <div>{extraWidget}</div>}
      </Form.Item>
    </>
  )
}

export default InputsTemplate
