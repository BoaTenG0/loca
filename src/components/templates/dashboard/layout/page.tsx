'use client'

import React, { useState, useEffect } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import locagri from '@/assets/images/locagri.png'
import { Layout, Menu, Button, Input, Avatar, Dropdown, MenuProps, ConfigProvider } from 'antd'
import {
  BookOutlined,
  SearchOutlined,
  UserOutlined,
  SettingOutlined,
  LogoutOutlined,
  HomeOutlined,
  MessageOutlined,
} from '@ant-design/icons'
import DropdownNotification from '@/components/templates/dashboard/header/drop-down-notification'
import { Wallet2 } from 'iconsax-react'
import { TbChartPpf } from 'react-icons/tb'
import { BiSupport } from 'react-icons/bi'
import { PiUserSwitchThin } from 'react-icons/pi'
import { MdTv } from 'react-icons/md'
import { FaRegFileArchive } from 'react-icons/fa'
import { GoDotFill, GoPackage } from 'react-icons/go'
import { TbUsers } from 'react-icons/tb'
const { Header, Sider, Content } = Layout

export default function LayoutAdmin({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const router = useRouter()
  const locale = useLocale() // Get the current locale

  const handleMenuClick = (path: string) => {
    router.push(path)
  }

  const items: MenuProps['items'] = [
    {
      key: 'overview',
      icon: <HomeOutlined />,
      label: <span>Overview</span>,
      onClick: () => handleMenuClick('overview'),
    },
    {
      key: 'grp',
      label: 'MAIN',
      type: 'group',
      children: [
        {
          key: 'users',
          icon: <TbUsers size={20} />,
          label: 'Users',
          children: [
            {
              key: 'farmers',
              label: 'Farmers',
              icon: <GoDotFill size={20} />,
              onClick: () => handleMenuClick(`/${locale}/admin/farmers`),
            },
            {
              key: 'suppliers',
              label: 'Agricultural service providers',
              icon: <GoDotFill size={20} />,
              onClick: () => handleMenuClick(`/${locale}/admin/agricultural-service-providers`),
            },
          ],
        },
        {
          key: 'plots',
          icon: <BookOutlined size={20} />,
          label: 'Plots',
          onClick: () => handleMenuClick(`/${locale}/admin/plots`),
        },
        {
          key: 'finance',
          icon: <Wallet2 size={20} />,
          label: 'Finance',
          children: [
            {
              key: 'payments',
              label: 'Payments',
              icon: <GoDotFill size={20} />,

              onClick: () => handleMenuClick('/finance/payments'),
            },
            {
              key: 'transactions',
              label: 'Transactions',
              icon: <GoDotFill size={20} />,

              onClick: () => handleMenuClick('/finance/transactions'),
            },
          ],
        },
        {
          key: 'inputs',
          icon: <GoPackage size={20} />,
          label: 'Agricultural Inputs',
          onClick: () => handleMenuClick(`/${locale}/admin/agricultural-inputs`),
        },
        {
          key: 'services',
          icon: <FaRegFileArchive size={20} />,
          label: 'Service Request',
          onClick: () => handleMenuClick(`/${locale}/admin/service-request`),
        },
        {
          key: 'training-supervision',
          icon: <MdTv size={20} />,
          label: 'Training/Supervision',
          onClick: () => handleMenuClick('/training-supervision'),
        },
      ],
    },
    {
      key: 'grp1',
      label: 'OTHER',
      type: 'group',
      children: [
        {
          key: 'roles',
          icon: <PiUserSwitchThin size={20} />,
          label: 'Roles/permissions',
          onClick: () => handleMenuClick('/en/admin/roles-permission'),
        },
        {
          key: 'reports',
          icon: <TbChartPpf size={20} />,
          label: 'Reports',
          onClick: () => handleMenuClick('/reports'),
        },
        {
          key: 'help-assistance',
          icon: <BiSupport size={20} />,
          label: 'Help & Assistance',
          onClick: () => handleMenuClick('/help-assistance'),
        },
      ],
    },
  ]

  const accountItems = [
    {
      key: '1',
      label: 'Profile',
      icon: <UserOutlined />,
      // onClick: () => router.push('/profile')
    },
    {
      key: '2',
      label: 'Settings',
      icon: <SettingOutlined />,
      // onClick: () => router.push('/settings')
    },
    {
      key: '3',
      label: 'Logout',
      icon: <LogoutOutlined />,
      // onClick: () => router.push('/settings')
    },
  ]

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => {
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  const toggleCollapsed = () => {
    setCollapsed(!collapsed)
  }

  return (
    <Layout className="h-screen">
      <Sider
        width={isMobile ? 0 : 280}
        trigger={null}
        collapsible
        collapsed={collapsed}
        breakpoint="lg"
        collapsedWidth={isMobile ? 10 : 80}
        onBreakpoint={(broken) => {
          setCollapsed(broken)
        }}
        className="bg-white overflow-auto h-screen fixed w-60 left-0 top-0 bottom-0 z-20 no-scrollbar"
      >
        <div className="py-2 " style={{ height: '15px', margin: '10px', background: 'rgba(255, 255, 255, 0.3)' }}>
          <Image src={locagri} alt="logo" width={140} height={100} />
        </div>
        <div className="mt-5">
          <ConfigProvider
            theme={{
              components: {
                Menu: {
                  subMenuItemBg: 'white',
                  itemSelectedBg: '#199675',
                  itemHoverBg: '#129075',
                  itemBg: 'white',
                  itemActiveBg: '#199675',
                  itemSelectedColor: '#57F287',
                  itemHoverColor: 'white',
                  itemColor: '#63686E',
                  itemMarginBlock: 1,
                },
              },
            }}
          >
            <Menu
              theme="light"
              className="border-none mt-20"
              mode="inline"
              defaultSelectedKeys={['overview']}
              defaultOpenKeys={['overview']}
              items={items}
              style={{ flexGrow: 1 }}
            />
          </ConfigProvider>
        </div>
        {/* <div className="flex justify-center items-center">
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={toggleCollapsed}
            className="text-black rounded-full  bg-green-700  "
            style={{
              fontSize: '16px',
              border: 'none',
              height: 48,
            }}
          />
        </div> */}
      </Sider>
      <Layout
        style={{
          // marginLeft: collapsed ? 0 : (isMobile ? 0 : 200),
          marginLeft: collapsed ? 0 : isMobile ? 0 : 200,
          transition: 'all 0.2s',
          height: '100vh',
          paddingTop: 0,
        }}
      >
        <Header
          style={{
            padding: '10px',
            height: 80,
            background: '#fff',
            display: '',
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'fixed',
            left: collapsed ? (isMobile ? 10 : 80) : 220, // This adjustment removes the gap
            top: 0,
            zIndex: 1,
            width: `calc(100% - ${collapsed ? (isMobile ? '10px' : '80px') : '200px'})`,
          }}
        >
          <div className="flex justify-between items-center w-full">
            <Input
              placeholder="Search..."
              prefix={<SearchOutlined />}
              className="w-3/5 ml-16 h-10 max-w-[800px] bg-doveGray/10 rounded-3xl"
            />

            <div className="flex text-doveGray/60 justify-center items-center space-x-8 mr-20">
              <div className="flex items-center justify-center pt-1 space-x-4 mr-10">
                <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-gray-2 text-dark-5">
                  <MessageOutlined className="text-2xl" />
                </div>
                {/* <div className="relative"> */}
                {/* <div className="absolute top-3 -right-1 h-2 w-2 bg-red-500 rounded-full"></div> */}
                {/* <BellOutlined className="text-2xl" /> */}
                {/* </div> */}
                <DropdownNotification />
              </div>
              {/* {locale} */}
              <Dropdown className="" menu={{ items: accountItems }} placement="bottomRight">
                <Avatar className="bg-green-500 cursor-pointer " icon={<UserOutlined />} />
              </Dropdown>
            </div>
          </div>
        </Header>
        <Content className="w-full mt-24 ">
          <div className="p-4 px-24 text-center h-full">{children}</div>
        </Content>
      </Layout>
    </Layout>
  )
}
