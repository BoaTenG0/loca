import { DownOutlined } from '@ant-design/icons'
import { Dropdown, Form, Space } from 'antd'
import React from 'react'
import { ThemedText } from './compTemp'

interface DropdownProps {
  style?: any
  label?: any

  defaultValue?: string
  wrapperCol?: any
  handleClick?: (e: any) => void
  options: { key: string; label: string | React.ReactNode }[]
  extraWidget?: any
  trigger?: 'click' | 'contextMenu' | 'hover'
  extraWidgetprefix?: any
  bg?: any
}

const DropdownTemplate: React.FC<DropdownProps> = ({
  bg,
  handleClick,
  label,
  style,
  wrapperCol,
  options = [],
  extraWidget,
  defaultValue,
  trigger = 'hover',
  extraWidgetprefix,
}) => {
  return (
    <>
      <Form.Item
        style={style}
        className=""
        label={label && <p className=" text-base">{label}</p>}
        wrapperCol={{ span: wrapperCol && wrapperCol }}
      >
        <div className="w-full flex h-full  flex-row items-center">
          <Dropdown menu={{ items: options, onClick: handleClick, selectable: false }} trigger={[trigger]} arrow={true}>
            <a onClick={(e) => e.preventDefault()}>
              <div
                className={`w-full px-2  py-1 border-2 rounded-md shadow-md text-lg flex justify-between  items-center space-x-2 ${bg ?? 'bg-[#013D84] text-white'} `}
              >
                <aside className="w-[95%] flex justify-start space-x-1 items-center">
                  {extraWidgetprefix && extraWidgetprefix}
                  <ThemedText type="text" classname={'w-full text-ellipsis'} text={defaultValue ?? ' Modules'} />
                </aside>
                <aside className="w-w-[5%] flex justify-end ">
                  <DownOutlined className="w-4 " />
                </aside>
              </div>
            </a>
          </Dropdown>

          {extraWidget && <div>{extraWidget}</div>}
        </div>
      </Form.Item>
    </>
  )
}

export default DropdownTemplate
