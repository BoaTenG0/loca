'use client'

import React from 'react'
import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import ClickOutside from '../../click-out-side'
import SidebarItem from './sidebar-item'
import useLocalStorage from './use-location-storage'
import locagri from '@/assets/images/locagri.png'
import { FaRegFileArchive } from 'react-icons/fa'
import { TbChartPpf } from 'react-icons/tb'
import { PiUserSwitchThin } from 'react-icons/pi'
import { useLocale } from 'next-intl'

interface SidebarProps {
  sidebarOpen: boolean
  setSidebarOpen: (arg: boolean) => void
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const pathname = usePathname()
  const locale = useLocale()
  const myRoute = useRouter()

  const menuGroups = [
    {
      // key: 'overview',
      name: '',
      menuItems: [
        {
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#808080">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                {' '}
                <path
                  d="M2 12.2039C2 9.91549 2 8.77128 2.5192 7.82274C3.0384 6.87421 3.98695 6.28551 5.88403 5.10813L7.88403 3.86687C9.88939 2.62229 10.8921 2 12 2C13.1079 2 14.1106 2.62229 16.116 3.86687L18.116 5.10812C20.0131 6.28551 20.9616 6.87421 21.4808 7.82274C22 8.77128 22 9.91549 22 12.2039V13.725C22 17.6258 22 19.5763 20.8284 20.7881C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.7881C2 19.5763 2 17.6258 2 13.725V12.2039Z"
                  stroke="#808080"
                  strokeWidth="1.5"
                ></path>{' '}
                <path d="M15 18H9" stroke="#808080" strokeWidth="1.5" stroke-linecap="round"></path>{' '}
              </g>
            </svg>
          ),
          label: 'Overview',
          route: `/${locale}/admin`,
        },
      ],
      // name: (
      //   <div
      //   onClick={() => {
      //     myRoute.push(`/${locale}/admin`)
      //   }}
      //   className="flex space-x-2 items-center p-2 rounded-lg cursor-pointer">
      //     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#808080">
      //       <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      //       <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
      //       <g id="SVGRepo_iconCarrier">
      //         {' '}
      //         <path
      //           d="M2 12.2039C2 9.91549 2 8.77128 2.5192 7.82274C3.0384 6.87421 3.98695 6.28551 5.88403 5.10813L7.88403 3.86687C9.88939 2.62229 10.8921 2 12 2C13.1079 2 14.1106 2.62229 16.116 3.86687L18.116 5.10812C20.0131 6.28551 20.9616 6.87421 21.4808 7.82274C22 8.77128 22 9.91549 22 12.2039V13.725C22 17.6258 22 19.5763 20.8284 20.7881C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.7881C2 19.5763 2 17.6258 2 13.725V12.2039Z"
      //           stroke="#808080"
      //           strokeWidth="1.5"
      //         ></path>{' '}
      //         <path d="M15 18H9" stroke="#808080" strokeWidth="1.5" stroke-linecap="round"></path>{' '}
      //       </g>
      //     </svg>
      //     <span>Overview</span>
      //   </div>
      // ),
      // icon: <HomeOutlined />,
      // label: <spaOverview</span>
      // onClick: () => handleMenuClick('overview'),
    },
    {
      name: 'MAIN MENU',
      menuItems: [
        {
          icon: (
            <svg className="" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                {' '}
                <path
                  d="M10.1992 12C12.9606 12 15.1992 9.76142 15.1992 7C15.1992 4.23858 12.9606 2 10.1992 2C7.43779 2 5.19922 4.23858 5.19922 7C5.19922 9.76142 7.43779 12 10.1992 12Z"
                  stroke="#808080"
                  strokeWidth="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{' '}
                <path
                  d="M1 22C1.57038 20.0332 2.74795 18.2971 4.36438 17.0399C5.98081 15.7827 7.95335 15.0687 10 15C14.12 15 17.63 17.91 19 22"
                  stroke="#808080"
                  strokeWidth="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{' '}
                <path
                  d="M17.8205 4.44006C18.5822 4.83059 19.1986 5.45518 19.579 6.22205C19.9594 6.98891 20.0838 7.85753 19.9338 8.70032C19.7838 9.5431 19.3674 10.3155 18.7458 10.9041C18.1243 11.4926 17.3302 11.8662 16.4805 11.97"
                  stroke="#808080"
                  strokeWidth="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{' '}
                <path
                  d="M17.3203 14.5701C18.6543 14.91 19.8779 15.5883 20.8729 16.5396C21.868 17.4908 22.6007 18.6827 23.0003 20"
                  stroke="#808080"
                  strokeWidth="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{' '}
              </g>
            </svg>
          ),
          label: 'Users',
          route: '#',
          children: [
            {
              label: 'Beneficiary/producer',
              route: `/${locale}/admin/beneficiaries`,
            },
            {
              label: 'Input suppliers',
              route: `/${locale}/admin/input-suppliers`,
            },
            {
              label: 'Manual labor',
              route: `/${locale}/admin/manual-labor`,
            },
            {
              label: 'Financial Users',
              route: `/${locale}/admin/financial-users`,
            },
            {
              label: 'Admins ',
              route: `/${locale}/admin/admins`,
            },
          ],
        },
        {
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#808080">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  clip-rule="evenodd"
                  d="m7.8 2.25h-.0321-.00002c-.81283-.00001-1.46844-.00001-1.99935.04336-.54663.04467-1.02678.13903-1.47099.36537-.70561.35952-1.27929.9332-1.63881 1.63881-.22634.44421-.3207.92436-.36537 1.47099-.04337.53091-.04337 1.18652-.04336 1.99935v.00002.0321 2.2c0 .4142.33579.75.75.75s.75-.3358.75-.75v-2.2c0-.85245.00058-1.44669.03838-1.90932.03709-.45387.10622-.71464.20686-.91216.21571-.42336.55992-.76757.98328-.98328.19752-.10064.45829-.16977.91216-.20686.46263-.0378 1.05687-.03838 1.90932-.03838h2.2c.4142 0 .75-.33579.75-.75s-.3358-.75-.75-.75zm-4.8 11c.41421 0 .75.3358.75.75v2.2c0 .8525.00058 1.4467.03838 1.9093.03709.4539.10622.7147.20686.9122.21571.4233.55992.7675.98328.9833.19752.1006.45829.1697.91216.2068.46263.0378 1.05687.0384 1.90932.0384h2.2c.4142 0 .75.3358.75.75s-.3358.75-.75.75h-2.2-.0321c-.81284 0-1.46846 0-1.99937-.0434-.54663-.0446-1.02678-.139-1.47099-.3653-.70561-.3596-1.27929-.9332-1.63881-1.6388-.22634-.4443-.3207-.9244-.36537-1.471-.04337-.5309-.04337-1.1866-.04336-1.9994v-.0321-2.2c0-.4142.33579-.75.75-.75zm18 0c.4142 0 .75.3358.75.75v2.2.0321c0 .8128 0 1.4685-.0434 1.9994-.0446.5466-.139 1.0267-.3653 1.471-.3596.7056-.9332 1.2792-1.6388 1.6388-.4443.2263-.9244.3207-1.471.3653-.5309.0434-1.1866.0434-1.9994.0434h-.0321-2.2c-.4142 0-.75-.3358-.75-.75s.3358-.75.75-.75h2.2c.8525 0 1.4467-.0006 1.9093-.0384.4539-.0371.7147-.1062.9122-.2068.4233-.2158.7675-.56.9833-.9833.1006-.1975.1697-.4583.2068-.9122.0378-.4626.0384-1.0568.0384-1.9093v-2.2c0-.4142.3358-.75.75-.75zm-2.8907-9.46162c-.4626-.0378-1.0568-.03838-1.9093-.03838h-2.2c-.4142 0-.75-.33579-.75-.75s.3358-.75.75-.75h2.2.0321c.8129-.00001 1.4685-.00001 1.9994.04336.5466.04467 1.0267.13903 1.471.36537.7056.35952 1.2792.9332 1.6388 1.63881.2263.44421.3207.92436.3653 1.47099.0434.53091.0434 1.18653.0434 1.99937v.0321 2.2c0 .4142-.3358.75-.75.75s-.75-.3358-.75-.75v-2.2c0-.85245-.0006-1.44669-.0384-1.90932-.0371-.45387-.1062-.71464-.2068-.91216-.2158-.42336-.56-.76757-.9833-.98328-.1975-.10064-.4583-.16977-.9122-.20686zm-6.1093 3.46162-.1158-.00002c-.818-.00027-1.3761-.00046-1.8548.1278-1.29407.34675-2.30487 1.35755-2.65162 2.65162-.12826.4787-.12807 1.0368-.1278 1.8548l.00002.1158-.00002.1158c-.00027.818-.00046 1.3761.1278 1.8548.34675 1.2941 1.35755 2.3049 2.65162 2.6516.4787.1283 1.0368.1281 1.8548.1278h.1158.1158c.818.0003 1.3761.0005 1.8548-.1278 1.2941-.3467 2.3049-1.3575 2.6516-2.6516.1283-.4787.1281-1.0368.1278-1.8548v-.1158-.1158c.0003-.818.0005-1.3761-.1278-1.8548-.3467-1.29407-1.3575-2.30487-2.6516-2.65162-.4787-.12826-1.0368-.12807-1.8548-.1278zm-1.5823 1.57667c.262-.07023.604-.07667 1.5823-.07667s1.3203.00644 1.5823.07667c.7765.20805 1.383.81453 1.591 1.59103.0703.262.0767.604.0767 1.5823s-.0064 1.3203-.0767 1.5823c-.208.7765-.8145 1.383-1.591 1.591-.262.0703-.604.0767-1.5823.0767s-1.3203-.0064-1.5823-.0767c-.7765-.208-1.38298-.8145-1.59103-1.591-.07023-.262-.07667-.604-.07667-1.5823s.00644-1.3203.07667-1.5823c.20805-.7765.81453-1.38298 1.59103-1.59103z"
                  fill="#808080"
                  fill-rule="evenodd"
                ></path>
              </g>
            </svg>
          ),
          label: 'Plots and Crops',
          route: '#',
          children: [
            {
              label: 'Plots Management',
              route: `/${locale}/admin/plots`,
            },
            {
              label: 'Crops Management',
              route: `/${locale}/admin/crops`,
            },
          ],
        },
        {
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#808080">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                {' '}
                <path d="M6 8H10" stroke="#808080" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round"></path>{' '}
                <path
                  d="M20.8333 9H18.2308C16.4465 9 15 10.3431 15 12C15 13.6569 16.4465 15 18.2308 15H20.8333C20.9167 15 20.9583 15 20.9935 14.9979C21.5328 14.965 21.9623 14.5662 21.9977 14.0654C22 14.0327 22 13.994 22 13.9167V10.0833C22 10.006 22 9.96726 21.9977 9.9346C21.9623 9.43384 21.5328 9.03496 20.9935 9.00214C20.9583 9 20.9167 9 20.8333 9Z"
                  stroke="#808080"
                  strokeWidth="1.5"
                ></path>{' '}
                <path
                  d="M20.965 9C20.8873 7.1277 20.6366 5.97975 19.8284 5.17157C18.6569 4 16.7712 4 13 4L10 4C6.22876 4 4.34315 4 3.17157 5.17157C2 6.34315 2 8.22876 2 12C2 15.7712 2 17.6569 3.17157 18.8284C4.34315 20 6.22876 20 10 20H13C16.7712 20 18.6569 20 19.8284 18.8284C20.6366 18.0203 20.8873 16.8723 20.965 15"
                  stroke="#808080"
                  strokeWidth="1.5"
                ></path>{' '}
                <path d="M17.9912 12H18.0002" stroke="#808080" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round"></path>{' '}
              </g>
            </svg>
          ),
          label: 'Finance Service',
          route: '#',
          children: [
            {
              label: 'Loans Application',
              route: `/${locale}/admin/finance/loans`,
            },
            { label: 'Bank Approvals', route: `/${locale}/admin/finance/bank-approval` },
            { label: 'Disbursement', route: `/${locale}/admin/finance/disbursement` },
          ],
        },
        {
          icon: (
            <svg width="26" height="26" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#808080">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                {' '}
                <path
                  d="M12.5 13V22M12.5 13L4.5 8M12.5 13L20.5 8M8.5 5.5L16.5 10.5M4.5 8L12.5 3L20.5 8V17L12.5 22L4.5 17V8Z"
                  stroke="#808080"
                  strokeWidth="1.2"
                ></path>{' '}
              </g>
            </svg>
          ),
          label: ' Input Inventory',
          route: '#',
          children: [
            {
              label: 'Input inventory',
              route: `/${locale}/admin/input-inventory`,
            },
            {
              label: 'Category list',
              route: `/${locale}/admin/category-list`,
            },
          ],
        },
        {
          icon: <FaRegFileArchive size={20} />,
          label: 'Service Request',
          route: '#',
          children: [
            { label: 'Service request', route: `/${locale}/admin/service-request` },
            { label: 'Request list', route: `/${locale}/admin/request-list` },
          ],
        },
        {
          icon: (
            <svg
              width="24"
              height="24"
              fill="#808080"
              viewBox="0 0 32 32"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#808080"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                {' '}
                <title>tv</title>{' '}
                <path d="M26 27.25h-20c-0.414 0-0.75 0.336-0.75 0.75s0.336 0.75 0.75 0.75v0h20c0.414 0 0.75-0.336 0.75-0.75s-0.336-0.75-0.75-0.75v0zM28 3.25h-24c-1.518 0.002-2.748 1.232-2.75 2.75v16c0.002 1.518 1.232 2.748 2.75 2.75h24c1.518-0.002 2.748-1.232 2.75-2.75v-16c-0.002-1.518-1.232-2.748-2.75-2.75h-0zM29.25 22c-0.001 0.69-0.56 1.249-1.25 1.25h-24c-0.69-0.001-1.249-0.56-1.25-1.25v-16c0.001-0.69 0.56-1.249 1.25-1.25h24c0.69 0.001 1.249 0.56 1.25 1.25v0z"></path>{' '}
              </g>
            </svg>
          ),
          label: 'Training/Supervision',
          route: '#',
          children: [
            { label: 'Training Programs', route: `/${locale}/admin/training` },
            { label: 'Workshops', route: `/${locale}/admin/workshops` },
          ],
        },
      ],
    },
    {
      name: 'OTHERS',
      menuItems: [
        {
          icon: <PiUserSwitchThin size={20} />,
          label: 'Roles/Permissions',
          route: `/${locale}/admin/roles-permissions`,
        },
        {
          icon: <TbChartPpf size={20} />,
          label: 'Reports',
          route: '#',
        },
        {
          icon: (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              aria-labelledby="supportIconTitle"
              stroke="#808080"
              strokeWidth="1"
              stroke-linecap="square"
              stroke-linejoin="miter"
              fill="none"
              color="#000000"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                {' '}
                <title id="supportIconTitle">Support</title>{' '}
                <path
                  d="M18,9 L16,9 C14.8954305,9 14,9.8954305 14,11 L14,13 C14,14.1045695 14.8954305,15 16,15 L16,15 C17.1045695,15 18,14.1045695 18,13 L18,9 C18,4.02943725 13.9705627,0 9,0 C4.02943725,0 0,4.02943725 0,9 L0,13 C1.3527075e-16,14.1045695 0.8954305,15 2,15 L2,15 C3.1045695,15 4,14.1045695 4,13 L4,11 C4,9.8954305 3.1045695,9 2,9 L0,9"
                  transform="translate(3 3)"
                ></path>{' '}
                <path d="M21,14 L21,18 C21,20 20.3333333,21 19,21 C17.6666667,21 16,21 14,21"></path>{' '}
              </g>
            </svg>
          ),
          label: 'Help & Support',
          route: '#',
          children: [
            { label: 'FAQ management', route: `/${locale}/admin/faq-management` },
            { label: 'Ticket list', route: `/${locale}/admin/ticket-list` },
          ],
        },
      ],
    },
  ]

  const [pageName, setPageName] = useLocalStorage('selectedMenu', 'dashboard')

  return (
    <ClickOutside onClick={() => setSidebarOpen(false)}>
      <aside
        className={`absolute left-0 top-0 z-50 flex h-screen w-72 flex-col overflow-y-hidden bg-white border-none  lg:static lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0 duration-300 ease-linear' : '-translate-x-full'
        }`}
      >
        {/* <!-- SIDEBAR HEADER --> */}
        <div className="flex items-center justify-between gap-2 px-6 py-3.5 lg:py-6.5 xl:py-10">
          <Link href="/">
            <Image
              width={176}
              height={100}
              src={locagri}
              alt="Logo"
              priority
              className="dark:hidden"
              // style={{ width: 'auto', height: 'auto' }}
            />
            <Image
              width={176}
              height={100}
              src={locagri}
              alt="Logo"
              priority
              className="hidden dark:block"
              style={{ width: 'auto', height: 'auto' }}
            />
          </Link>

          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="block lg:hidden">
            <svg className="fill-current" width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
                fill=""
              />
            </svg>
          </button>
        </div>
        {/* <!-- SIDEBAR HEADER --> */}

        <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
          {/* <!-- Sidebar Menu --> */}
          <nav className="mt-1 px-4 lg:px-6">
            {menuGroups.map((group, groupIndex) => (
              <div key={groupIndex}>
                <h3 className="mb-5 text-sm font-medium text-dark-4">{group.name}</h3>

                <ul className="mb-6 flex flex-col gap-2">
                  {group?.menuItems?.map((menuItem, menuIndex) => (
                    <SidebarItem key={menuIndex} item={menuItem} pageName={pageName} setPageName={setPageName} />
                  ))}
                </ul>
              </div>
            ))}
          </nav>
          {/* <!-- Sidebar Menu --> */}
        </div>
      </aside>
    </ClickOutside>
  )
}

export default Sidebar
