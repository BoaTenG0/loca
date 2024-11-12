import React from 'react'
import { Dropdown, Menu } from 'antd'
import { MoreOutlined } from '@ant-design/icons'
import { IconType } from 'react-icons'

interface DropMenuItem {
  key: string
  label: string
  icon: IconType
  onClick: () => void
  className?: string // Optional for additional styling
}

interface DropMenuProps {
  items: DropMenuItem[]
}

const DropMenu: React.FC<DropMenuProps> = ({ items }) => {
  return (
    <Dropdown
      overlay={
        <Menu>
          {items.map((item) => (
            <Menu.Item key={item.key} onClick={item.onClick} className={item.className || ''}>
              <item.icon className="text-xl mr-2" />
              {item.label}
            </Menu.Item>
          ))}
        </Menu>
      }
      trigger={['click']}
    >
      <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
        <MoreOutlined />
      </a>
    </Dropdown>
  )
}

export default DropMenu
