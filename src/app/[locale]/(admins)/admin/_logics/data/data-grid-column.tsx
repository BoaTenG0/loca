// 'use client'

// import React from 'react'
// import { MyStates, RowData } from '../interface'
// import { openDetailsModal, openEditDetailsModal } from '../functions'
// import { CloseCircle, Edit, Eye, Trash } from 'iconsax-react'
// import IconMenuTemplate from '@/components/templates/ui/icon-button/icon-menu-button'
// import IconButtonGroup from '@/components/templates/ui/icon-button/icon-button'

// const buttonConfigs = (row: RowData, setMyStates: React.Dispatch<React.SetStateAction<MyStates>>) => [
//   {
//     icon: <Edit size={18} />,
//     tooltip: 'Edit',
//     color: 'primary' as const,
//     onClick: () => openEditDetailsModal( setMyStates, 'Edit Details', 'edit', row,),
//   },
//   {
//     icon: <Edit size={18} />,
//     tooltip: 'Edit',
//     color: 'primary' as const,
//     onClick: () => openEditDetailsModal( setMyStates, 'Edit Details', 'edit', row,),
//   },
//   {
//     icon: <Eye size={18} />,
//     tooltip: 'View',
//     color: 'secondary' as const,
//     onClick: () => openDetailsModal( setMyStates, 'View Details', 'details', row,),
//   },
//   {
//     icon: <Eye size={18} />,
//     tooltip: 'View',
//     color: 'secondary' as const,
//     onClick: () => openDetailsModal(setMyStates, 'View Details', 'details', row,),
//   },
// ]

// export const dataColumns = (setMyStates: React.Dispatch<React.SetStateAction<MyStates>>, myStates: MyStates) => {
//   return [
//     {
//       id: 0,
//       key: '',
//       dataIndex: 'name',
//       title: 'FARMER NAME',
//       // width: 150,
//     },
//     {
//       id: 1,
//       key: '',
//       dataIndex: 'plotName',
//       title: 'PLOT NAME',
//       // width: 150,
//     },
//     {
//       id: 2,
//       key: '',
//       dataIndex: 'cropType',
//       title: 'CROP TYPE',
//       // width: 150,
//     },
//     {
//       id: 3,
//       key: '',
//       dataIndex: 'location',
//       title: 'LOCATION',
//       // width: 150,
//     },
//     {
//       id: 4,
//       key: '',
//       dataIndex: 'status',
//       title: 'STATUS',
//       // width: 120,
//     },
//     {
//       id: 5,
//       key: '',
//       dataIndex: '',
//       title: 'ACTION',
//       render: (_: any, row: RowData) => (
//         <IconButtonGroup contents={buttonConfigs(row, setMyStates)} tooltipBgColorDark="#f5f5f5" tooltipBgColorLight="#333" />
// <PlotUsersActionMenu />
//         //   row={row}
//         //   onViewDetails={() => openDetailsModal(row, setMyStates)}
//         //   onEditDetails={() => openEditDetailsModal(row, setMyStates)}
//         //   onSuspendUser={() => {}}
//         //   onDeleteUser={() => {}}
//         //   viewVerified={myStates.value === 0}
//         //   viewPending={myStates.value === 1}
//         //   viewInactive={myStates.value === 2}
//         // />
//       ),
//       // fixed: "left",
//       width: 120,
//     },
//   ]
// }

'use client'

import React from 'react'
import { AdminUserStates, BeneficiaryStates, FarmersStates, ManualLaborUserStates, MyStates, RowData, TicketListStates } from '../interface'
import {
  openAlertModal,
  openBeneficiaryModal,
  openBneficiaryDetailsModal,
  openDetailsModal,
  openEditDetailsModal,
  openFarmerDetailsModal,
  openInputSupplierDetailsModal,
  openManualLaborDetailsModal,
  openticketsDetailsModal,
} from '../functionsX'
import { AddCircle, CloseCircle, Edit, Eye, Trash } from 'iconsax-react'
import IconButtonGroup from '@/components/templates/ui/icon-button/icon-button'
import IconMenuTemplate from '@/components/templates/ui/icon-button/icon-menu-button'
import { GoDotFill } from 'react-icons/go'
import { FaRegCircleCheck } from 'react-icons/fa6'
import { UpdateStates } from '@/lib/functions/update-states'
import { TbZoomCancel } from 'react-icons/tb'
import { FaCheckCircle } from 'react-icons/fa'
import { GrCheckmark, GrView } from 'react-icons/gr'
// import { handleAction } from '../../_widget/_;pages/admin-user/comp'

//Landing/Index page columns
export const landingPageColumns = (setMyStates: React.Dispatch<React.SetStateAction<AdminUserStates>>, myStates: AdminUserStates) => [
  { id: 'serviceRequested', label: 'Service Requested' },
  { id: 'totalRequest', label: 'Total Requests' },
  { id: 'completed', label: 'Completed' },
  { id: 'pending', label: 'Pending' },
]
export const loansColumns = (setMyStates: React.Dispatch<React.SetStateAction<MyStates>>, myStates: MyStates) => [
  { id: 'name', label: 'Beneficiary Name' },
  { id: 'phoneNumber', label: 'Phone Number' },
  { id: 'bank', label: 'Bank Name' },
  { id: 'date', label: 'Date Of Application' },
  { id: 'amount', label: 'Requested Amount Range' },
  { id: 'status', label: 'Status' },
  {
    id: 'actions',
    label: 'Actions',
    render: (row: RowData) => (
      <IconButtonGroup contents={loanButtonConfigs(row, setMyStates, myStates)} tooltipBgColorDark="#f5f5f5" tooltipBgColorLight="#333" />
    ),
  },
]
export const bankColumns = (setMyStates: React.Dispatch<React.SetStateAction<MyStates>>, myStates: MyStates) => [
  { id: 'name', label: 'Beneficiary Name' },
  { id: 'phoneNumber', label: 'Phone Number' },
  { id: 'bank', label: 'Bank Name' },
  { id: 'date', label: 'Date Of Application' },
  { id: 'amount', label: 'Requested Amount Range' },
  { id: 'status', label: 'Status' },
  {
    id: 'actions',
    label: 'Actions',
    render: (row: RowData) => (
      <IconButtonGroup contents={bankButtonConfigs(row, setMyStates, myStates)} tooltipBgColorDark="#f5f5f5" tooltipBgColorLight="#333" />
    ),
  },
]
export const disbursementColumns = (setMyStates: React.Dispatch<React.SetStateAction<MyStates>>, myStates: MyStates) => [
  { id: 'name', label: 'Beneficiary Name' },
  { id: 'bank', label: 'Bank Name' },
  { id: 'date', label: 'Date Of Application' },
  { id: 'disbursementDate', label: 'Disbursement Date' },
  { id: 'amount', label: 'Amount Disbursed' },
  { id: 'status', label: 'Status' },
]

export const columns = (setMyStates: React.Dispatch<React.SetStateAction<MyStates>>, myStates: MyStates) => [
  { id: 'name', label: 'Beneficiary Name' },
  { id: 'plotName', label: 'Plot Name' },
  { id: 'cropType', label: 'Crop Type' },
  { id: 'location', label: 'Location' },
  { id: 'status', label: 'Status' },
  {
    id: 'actions',
    label: 'Actions',
    render: (row: RowData) => (
      <IconButtonGroup contents={buttonConfigs(row, setMyStates, myStates)} tooltipBgColorDark="#f5f5f5" tooltipBgColorLight="#333" />
    ),
  },
]
export const cropsColumns = (setMyStates: React.Dispatch<React.SetStateAction<MyStates>>, myStates: MyStates) => [
  { id: 'cropType', label: 'Crop Type' },
  { id: 'stages', label: 'Number of Stages' },
  {
    id: 'actions',
    label: 'Actions',
    render: (row: RowData) => (
      <IconButtonGroup contents={cropsButtonConfigs(row, setMyStates, myStates)} tooltipBgColorDark="#f5f5f5" tooltipBgColorLight="#333" />
    ),
  },
]
const cropsButtonConfigs = (row: RowData, setMyStates: React.Dispatch<React.SetStateAction<MyStates>>, myStates: MyStates) => {
  return [
    {
      icon: <Eye size={18} />,
      tooltip: 'View Details',
      color: 'secondary' as const,
      onClick: () => openDetailsModal(setMyStates, 'View Details', 'details', row),
    },
    {
      icon: <Edit size={18} />,
      tooltip: 'Edit Details',
      color: 'primary' as const,
      onClick: () => openEditDetailsModal(setMyStates, 'Edit Details', 'edit', row),
    },
    {
      icon: <Trash color="#FB7C74" size={18} />,
      tooltip: 'Delete Plot',
      color: 'primary' as const,
      onClick: () =>
        UpdateStates(setMyStates, undefined, undefined, {
          value: myStates.value,
          modalView: '',
          modalOpen: false,
          modalTitle: '',
          selectedRow: null,
          snackbarOpen: false,
          snackbarMessage: 'Delete Successful',
          modalState: 'delete',
          modalMessage: 'Are you sure you want to delete this plot?',
        }),
    },
  ]
}

export const RolesColumns = (setMyStates: React.Dispatch<React.SetStateAction<MyStates>>, myStates: MyStates) => [
  { id: 'role', label: 'Role' },
  { id: 'description', label: 'Description' },
  { id: 'usersAssigned', label: 'User Assigned' },
  {
    id: 'actions',
    label: 'Actions',
    render: (row: RowData) => (
      <IconButtonGroup contents={RoleButtonConfigs(row, setMyStates, myStates)} tooltipBgColorDark="#f5f5f5" tooltipBgColorLight="#333" />
    ),
  },
]
export const UserListColumns = (setMyStates: React.Dispatch<React.SetStateAction<MyStates>>, myStates: MyStates) => [
  { id: 'user', label: 'User' },
  { id: 'phoneNumber', label: 'Phone Number' },
  { id: 'currentRole', label: 'Current Role' },
  {
    id: 'actions',
    label: 'Actions',
    render: (row: RowData) => (
      <IconButtonGroup contents={RoleButtonConfigs(row, setMyStates, myStates)} tooltipBgColorDark="#f5f5f5" tooltipBgColorLight="#333" />
    ),
  },
]

const buttonConfigs = (row: RowData, setMyStates: React.Dispatch<React.SetStateAction<MyStates>>, myStates: MyStates) => {
  switch (myStates.value) {
    case 0:
      return [
        {
          icon: <Eye size={18} />,
          tooltip: 'View Details',
          color: 'secondary' as const,
          onClick: () => openDetailsModal(setMyStates, 'View Details', 'details', row),
        },
        {
          icon: <Edit size={18} />,
          tooltip: 'Edit Details',
          color: 'primary' as const,
          onClick: () => openEditDetailsModal(setMyStates, 'Edit Details', 'edit', row),
        },
        {
          icon: <TbZoomCancel color="#FB7C74" size={18} />,
          tooltip: 'Deactivate Plot',
          color: 'primary' as const,
          onClick: () =>
            UpdateStates(setMyStates, undefined, undefined, {
              value: myStates.value,
              modalView: '',
              modalOpen: false,
              modalTitle: '',
              selectedRow: null,
              snackbarOpen: false,
              snackbarMessage: 'Deactivation Successful',
              modalState: 'deactivate',
              modalMessage: 'Are you sure you want to deactivate this plot?',
            }),
        },
      ]
    case 1:
      return [
        {
          icon: <Eye size={18} />,
          tooltip: 'View Details',
          color: 'secondary' as const,
          onClick: () => openDetailsModal(setMyStates, 'View Details', 'details', row),
        },
        {
          icon: <FaCheckCircle color="#5EEA91" size={15} />,
          tooltip: 'Approve Plot',
          color: 'primary' as const,
          onClick: () =>
            UpdateStates(setMyStates, undefined, undefined, {
              value: myStates.value,
              modalView: '',
              modalOpen: false,
              modalTitle: '',
              selectedRow: null,
              snackbarOpen: false,
              snackbarMessage: 'Approval Successful',
              modalState: 'approve',
              modalMessage: 'Are you sure you want to approve this plot?',
            }),
        },
        {
          icon: <TbZoomCancel color="#FB7C74" size={18} />,
          tooltip: 'Reject Plot',
          color: 'primary' as const,
          onClick: () =>
            UpdateStates(setMyStates, undefined, undefined, {
              value: myStates.value,
              modalView: '',
              modalOpen: false,
              modalTitle: '',
              selectedRow: null,
              snackbarOpen: false,
              snackbarMessage: 'Reject Successful',
              modalState: 'reject',
              modalMessage: 'Are you sure you want to reject this plot?',
            }),
        },
      ]
    default:
      return [
        {
          icon: <Eye size={18} />,
          tooltip: 'View Details',
          color: 'secondary' as const,
          onClick: () => openDetailsModal(setMyStates, 'View Details', 'details', row),
        },
        {
          icon: <FaCheckCircle color="#5EEA91" size={18} />,
          tooltip: 'Activate Plot',
          color: 'primary' as const,
          onClick: () =>
            UpdateStates(setMyStates, undefined, undefined, {
              value: myStates.value,
              modalView: '',
              modalOpen: false,
              modalTitle: '',
              selectedRow: null,
              snackbarOpen: false,
              snackbarMessage: 'Activate Successful',
              modalState: 'activate',
              modalMessage: 'Are you sure you want to activate this plot?',
            }),
        },
      ]
  }
}

export const farmerDataColumns = (setFarmerStates: React.Dispatch<React.SetStateAction<FarmersStates>>, farmerStates: FarmersStates) => [
  { id: 'farmer_name', label: 'Beneficiary' },
  { id: 'country', label: 'Country' },
  { id: 'phone', label: 'Phone number' },
  { id: 'plots', label: 'Plots' },
  {
    id: 'status',
    label: 'Status',
    render: (row: RowData) => {
      return (
        <div className="flex items-center gap-1">
          <div
            className={`px-3 py-1 rounded-full ${row.status === 'Active' ? 'bg-locaGreenLight text-logaTextGreen' : row.status === 'Pending' ? 'bg-blue-500/30 text-blue-700' : 'bg-red-500/30 text-red-700'}`}
          >
            {row.status}
          </div>
        </div>
      )
    },
  },
  {
    id: 'actions',
    label: 'ACTIONS',
    render: (row: RowData) => (
      <IconButtonGroup
        contents={farmerActionButtons(row, setFarmerStates, farmerStates)}
        tooltipBgColorDark="#f5f5f5"
        tooltipBgColorLight="#333"
      />
    ),
  },
]

const farmerActionButtons = (
  row: RowData,
  setFarmersStates: React.Dispatch<React.SetStateAction<FarmersStates>>,
  farmersStates: FarmersStates
) => {
  // switch (myStates.value) {
  //   case 0:
  return [
    {
      icon: <Edit size={18} />,
      tooltip: 'Edit',
      color: 'primary' as const,
      onClick: () => openFarmerDetailsModal(setFarmersStates, 'Edit Details', 'edit', row),
    },
    {
      icon: <Eye size={18} />,
      tooltip: 'View',
      color: 'secondary' as const,
      onClick: () => openFarmerDetailsModal(setFarmersStates, 'View Details', 'details', row),
    },
    {
      icon: <CloseCircle size={18} />,
      tooltip: 'Approval',
      color: 'error' as const,
      onClick: () => openFarmerDetailsModal(setFarmersStates, 'Approval', 'approval', row),
    },
    {
      icon: <Trash size={18} />,
      tooltip: 'Delete',
      color: 'error' as const,
      onClick: () => openAlertModal(setFarmersStates, 'Do you want to delete this record?'),
    },
  ]
  // case 1:
  //   return [
  //     {
  //       icon: <Trash size={18} />,
  //       tooltip: 'Delete',
  //       color: 'error' as const,
  //       onClick: () => console.log('Delete action clicked', row),
  //     },
  //     {
  //       icon: <Eye size={18} />,
  //       tooltip: 'View',
  //       color: 'secondary' as const,
  //       onClick: () => openDetailsModal(setMyStates, 'View Details', 'details', row),
  //     },
  //   ]
  // default:
  //   return [
  //     {
  //       icon: <CloseCircle size={18} />,
  //       tooltip: 'Close',
  //       color: 'secondary' as const,
  //       onClick: () => console.log('Close action clicked', row),
  //     },
  //   ]
  // }
}
//========== beneficiary data columns =========
export const beneficiaryDataColumns = (
  setBeneficiaryStates: React.Dispatch<React.SetStateAction<BeneficiaryStates>>,
  beneficiaryStates: BeneficiaryStates
) => [
  { id: 'farmer_name', label: 'Beneficiary' },
  { id: 'country', label: 'Country' },
  { id: 'phone', label: 'Phone number' },
  { id: 'plots', label: 'Plots' },
  {
    id: 'status',
    label: 'Status',
    render: (row: RowData) => {
      return (
        <div className="flex items-center gap-1">
          <div
            className={`px-3 py-1 rounded-full ${row.status === 'Active' ? 'bg-locaGreenLight text-logaTextGreen' : row.status === 'Pending' ? 'bg-blue-500/30 text-blue-700' : 'bg-red-500/30 text-red-700'}`}
          >
            {row.status}
          </div>
        </div>
      )
    },
  },
  {
    id: 'actions',
    label: 'ACTIONS',
    render: (row: RowData) => (
      <IconButtonGroup
        contents={beneficiaryActionButtons(row, setBeneficiaryStates, beneficiaryStates)}
        tooltipBgColorDark="#f5f5f5"
        tooltipBgColorLight="#333"
      />
    ),
  },
]

const beneficiaryActionButtons = (
  row: RowData,
  setBeneficiaryStates: React.Dispatch<React.SetStateAction<BeneficiaryStates>>,
  beneficiaryStates: BeneficiaryStates
) => {
  // switch (myStates.value) {
  //   case 0:
  return [
    {
      icon: <Edit size={18} />,
      tooltip: 'Edit',
      color: 'primary' as const,
      onClick: () => openBneficiaryDetailsModal(setBeneficiaryStates, 'Edit Details', 'edit', row),
    },
    {
      icon: <Eye size={18} />,
      tooltip: 'View',
      color: 'secondary' as const,
      onClick: () => openBneficiaryDetailsModal(setBeneficiaryStates, 'View Details', 'details', row),
    },
    {
      icon: <CloseCircle size={18} />,
      tooltip: 'Approval',
      color: 'error' as const,
      onClick: () => openBneficiaryDetailsModal(setBeneficiaryStates, 'Approval', 'approval', row),
    },
    {
      icon: <Trash size={18} />,
      tooltip: 'Delete',
      color: 'error' as const,
      onClick: () => openBeneficiaryModal(setBeneficiaryStates, 'Do you want to delete this record?'),
    },
  ]
  // case 1:
  //   return [
  //     {
  //       icon: <Trash size={18} />,
  //       tooltip: 'Delete',
  //       color: 'error' as const,
  //       onClick: () => console.log('Delete action clicked', row),
  //     },
  //     {
  //       icon: <Eye size={18} />,
  //       tooltip: 'View',
  //       color: 'secondary' as const,
  //       onClick: () => openDetailsModal(setMyStates, 'View Details', 'details', row),
  //     },
  //   ]
  // default:
  //   return [
  //     {
  //       icon: <CloseCircle size={18} />,
  //       tooltip: 'Close',
  //       color: 'secondary' as const,
  //       onClick: () => console.log('Close action clicked', row),
  //     },
  //   ]
  // }
}
// ==========Input Supplier Data Columns==========
export const inputSupplierDataColumns = (
  setFarmerStates: React.Dispatch<React.SetStateAction<FarmersStates>>,
  farmerStates: FarmersStates
) => [
  { id: 'name', label: 'FULL NAME' },
  { id: 'email', label: 'EMAIL' },
  { id: 'phone', label: 'PHONE ' },
  { id: 'products', label: 'PRODUCTS' },
  {
    id: 'status',
    label: 'Status',
    render: (row: RowData) => {
      return (
        <div className="flex items-center gap-1">
          <div
            className={`px-3 py-1 rounded-full ${row.status === 'Active' ? 'bg-locaGreenLight text-logaTextGreen' : row.status === 'Pending' ? 'bg-blue-500/30 text-blue-700' : 'bg-red-500/30 text-red-700'}`}
          >
            {row.status}
          </div>
        </div>
      )
    },
  },
  {
    id: 'actions',
    label: 'Actions',
    render: (row: RowData) => (
      <IconButtonGroup
        contents={inputSupplierActionButtons(row, setFarmerStates, farmerStates)}
        tooltipBgColorDark="#f5f5f5"
        tooltipBgColorLight="#333"
      />
    ),
  },
]

const inputSupplierActionButtons = (
  row: RowData,
  setFarmersStates: React.Dispatch<React.SetStateAction<FarmersStates>>,
  farmersStates: FarmersStates
) => {
  // switch (myStates.value) {
  //   case 0:
  return [
    {
      icon: <Edit size={18} />,
      tooltip: 'Edit',
      color: 'primary' as const,
      onClick: () => openInputSupplierDetailsModal(setFarmersStates, 'Edit Details', 'edit', row),
    },
    {
      icon: <Eye size={18} />,
      tooltip: 'View',
      color: 'secondary' as const,
      onClick: () => openFarmerDetailsModal(setFarmersStates, 'View Details', 'details', row),
    },
    {
      icon: <CloseCircle size={18} />,
      tooltip: 'Approval',
      color: 'error' as const,
      onClick: () => openFarmerDetailsModal(setFarmersStates, 'Approval', 'approval', row),
    },
    {
      icon: <Trash size={18} />,
      tooltip: 'Delete',
      color: 'error' as const,
      onClick: () => openAlertModal(setFarmersStates, 'Do you want to delete this record?'),
    },
  ]
}
const loanButtonConfigs = (row: RowData, setMyStates: React.Dispatch<React.SetStateAction<MyStates>>, myStates: MyStates) => {
  switch (myStates.value) {
    case 0:
      return [
        {
          icon: <Eye size={18} color="#999999" />,
          tooltip: 'View Details',
          color: 'secondary' as const,
          onClick: () => openDetailsModal(setMyStates, 'View Details', 'details', row),
        },
        {
          icon: <FaRegCircleCheck size={15} color="#5EEA91" />,
          tooltip: 'Approve Loan',
          color: 'primary' as const,
          onClick: () =>
            UpdateStates(setMyStates, undefined, undefined, {
              value: myStates.value,
              modalView: '',
              modalOpen: false,
              modalTitle: '',
              selectedRow: null,
              snackbarOpen: true,
              snackbarMessage: 'Approval successful!',
            }),
        },
        {
          icon: <CloseCircle size={18} color="#FB7C74" />,
          tooltip: 'Reject Loan',
          color: 'primary' as const,
          onClick: () =>
            UpdateStates(setMyStates, undefined, undefined, {
              value: myStates.value,
              modalView: '',
              modalOpen: false,
              modalTitle: '',
              selectedRow: null,
              snackbarOpen: true,
              snackbarMessage: 'Loan rejected successfully!',
            }),
        },
      ]
    case 1:
      return [
        {
          icon: <Eye size={18} color="#999999" />,
          tooltip: 'View Details',
          color: 'secondary' as const,
          onClick: () => openDetailsModal(setMyStates, 'View Details', 'approvedDetails', row),
        },
      ]
    default:
      return [
        {
          icon: <Eye size={18} color="#999999" />,
          tooltip: 'View Details',
          color: 'secondary' as const,
          onClick: () => openDetailsModal(setMyStates, 'View Details', 'rejectedDetails', row),
        },
      ]
  }
}
const bankButtonConfigs = (row: RowData, setMyStates: React.Dispatch<React.SetStateAction<MyStates>>, myStates: MyStates) => {
  switch (myStates.value) {
    case 0:
      return [
        {
          icon: <Eye size={18} color="#999999" />,
          tooltip: 'View Details',
          color: 'secondary' as const,
          onClick: () => openDetailsModal(setMyStates, 'View Details', 'details', row),
        },
      ]
    case 1:
      return [
        {
          icon: <Eye size={18} color="#999999" />,
          tooltip: 'View Details',
          color: 'secondary' as const,
          onClick: () => openDetailsModal(setMyStates, 'View Details', 'approvedDetails', row),
        },
      ]
    default:
      return [
        {
          icon: <Eye size={18} color="#999999" />,
          tooltip: 'View Details',
          color: 'secondary' as const,
          onClick: () => openDetailsModal(setMyStates, 'View Details', 'rejectedDetails', row),
        },
      ]
  }
}

// ===========Finance users Data Columns==========
export const financialUsersDataColumns = (
  setFarmerStates: React.Dispatch<React.SetStateAction<FarmersStates>>,
  farmerStates: FarmersStates
) => [
  { id: 'firstName', label: 'FIRST NAME' },
  { id: 'lastName', label: 'LAST NAME' },
  { id: 'email', label: 'EMAIL' },
  { id: 'phone', label: 'PHONE ' },
  {
    id: 'status',
    label: 'Status',
    render: (row: RowData) => {
      return (
        <div className="flex items-center gap-1">
          <div
            className={`px-3 py-1 rounded-full ${row.status === 'Active' ? 'bg-locaGreenLight text-logaTextGreen' : row.status === 'Pending' ? 'bg-blue-500/30 text-blue-700' : 'bg-red-500/30 text-red-700'}`}
          >
            {row.status}
          </div>
        </div>
      )
    },
  },
  {
    id: 'actions',
    label: 'Actions',
    render: (row: RowData) => (
      <IconButtonGroup
        contents={financialUsersActionButtons(row, setFarmerStates, farmerStates)}
        tooltipBgColorDark="#f5f5f5"
        tooltipBgColorLight="#333"
      />
    ),
  },
]

const financialUsersActionButtons = (
  row: RowData,
  setFarmersStates: React.Dispatch<React.SetStateAction<FarmersStates>>,
  farmersStates: FarmersStates
) => {
  // switch (myStates.value) {
  //   case 0:
  return [
    {
      icon: <Edit size={18} />,
      tooltip: 'Edit',
      color: 'primary' as const,
      onClick: () => openInputSupplierDetailsModal(setFarmersStates, 'Edit Details', 'edit', row),
    },
    {
      icon: <Trash size={18} />,
      tooltip: 'Suspend',
      color: 'error' as const,
      onClick: () => openAlertModal(setFarmersStates, 'Do you want to delete this record?'),
    },
  ]
}

// ============= Manual Labor Data Users Columns =============
export const manualLaborUsersDataColumns = (
  setManualLaborStates: React.Dispatch<React.SetStateAction<ManualLaborUserStates>>,
  manualLaborStates: ManualLaborUserStates
) => [
  { id: 'name', label: 'FULL NAME' },
  { id: 'email', label: 'EMAIL' },
  { id: 'phone', label: 'PHONE ' },
  { id: 'products', label: 'PRODUCTS' },
  {
    id: 'status',
    label: 'Status',
    render: (row: RowData) => {
      return (
        <div className="flex items-center gap-1">
          <div
            className={`px-3 py-1 rounded-full ${row.status === 'Active' ? 'bg-locaGreenLight text-logaTextGreen' : row.status === 'Pending' ? 'bg-blue-500/30 text-blue-700' : 'bg-red-500/30 text-red-700'}`}
          >
            {row.status}
          </div>
        </div>
      )
    },
  },
  {
    id: 'actions',
    label: 'Actions',
    render: (row: RowData) => (
      <IconButtonGroup
        contents={manalLaborUsersActionButtons(row, setManualLaborStates, manualLaborStates)}
        tooltipBgColorDark="#f5f5f5"
        tooltipBgColorLight="#333"
      />
    ),
  },
]

const manalLaborUsersActionButtons = (
  row: RowData,
  setFarmersStates: React.Dispatch<React.SetStateAction<ManualLaborUserStates>>,
  farmersStates: ManualLaborUserStates
) => {
  // switch (myStates.value) {
  //   case 0:
  return [
    {
      icon: <Edit size={18} />,
      tooltip: 'Edit',
      color: 'primary' as const,
      onClick: () => openManualLaborDetailsModal(setFarmersStates, 'Edit Details', 'edit', row),
    },
    {
      icon: <Eye size={18} />,
      tooltip: 'View',
      color: 'secondary' as const,
      onClick: () => openManualLaborDetailsModal(setFarmersStates, 'View Details', 'details', row),
    },
    {
      icon: <CloseCircle size={18} />,
      tooltip: 'Approval',
      color: 'error' as const,
      onClick: () => openFarmerDetailsModal(setFarmersStates, 'Approval', 'approval', row),
    },
    {
      icon: <Trash size={18} />,
      tooltip: 'Delete',
      color: 'error' as const,
      onClick: () => openAlertModal(setFarmersStates, 'Do you want to delete this record?'),
    },
  ]
}

// =============== Admin users Data Columns ===============
export const adminUsersDataColumns = (
  setFarmerStates: React.Dispatch<React.SetStateAction<FarmersStates>>,
  farmerStates: FarmersStates
) => [
  { id: 'firstName', label: 'FIRST NAME' },
  { id: 'lastName', label: 'LAST NAME' },
  { id: 'email', label: 'EMAIL' },
  { id: 'phone', label: 'PHONE ' },
  {
    id: 'status',
    label: 'Status',
    render: (row: RowData) => {
      return (
        <div className="flex items-center gap-1">
          <div
            className={`px-3 py-1 rounded-full ${row.status === 'Active' ? 'bg-locaGreenLight text-logaTextGreen' : row.status === 'Pending' ? 'bg-blue-500/30 text-blue-700' : 'bg-red-500/30 text-red-700'}`}
          >
            {row.status}
          </div>
        </div>
      )
    },
  },
  {
    id: 'actions',
    label: 'Actions',
    render: (row: RowData) => (
      <IconButtonGroup
        contents={AdminUsersActionButtons(row, setFarmerStates, farmerStates)}
        tooltipBgColorDark="#f5f5f5"
        tooltipBgColorLight="#333"
      />
    ),
  },
]

const AdminUsersActionButtons = (
  row: RowData,
  setFarmersStates: React.Dispatch<React.SetStateAction<FarmersStates>>,
  farmersStates: FarmersStates
) => {
  // switch (myStates.value) {
  //   case 0:
  return [
    {
      icon: <Edit size={18} />,
      tooltip: 'Edit',
      color: 'primary' as const,
      onClick: () => openInputSupplierDetailsModal(setFarmersStates, 'Edit Details', 'edit', row),
    },
    {
      icon: <Trash size={18} />,
      tooltip: 'Suspend',
      color: 'error' as const,
      onClick: () => openAlertModal(setFarmersStates, 'Do you want to delete this record?'),
    },
  ]
}

//============ Input Inventory Data Columns ===============
export const inputInventoryDataColumns = (
  setFarmerStates: React.Dispatch<React.SetStateAction<FarmersStates>>,
  farmerStates: FarmersStates
) => [
  { id: 'name', label: 'INPUT NAME' },
  { id: 'category', label: ' CATEGORY' },
  { id: 'supplier', label: ' SUPPLIER ' },
  { id: 'price', label: 'PRICE' },
  { id: 'stock', label: 'STOCK' },
  {
    id: 'status',
    label: 'Status',
    render: (row: RowData) => {
      return (
        <div className="flex items-center gap-1">
          <div
            className={`px-3 py-1 rounded-full ${row.status === 'Active' ? 'bg-locaGreenLight text-logaTextGreen' : row.status === 'Pending' ? 'bg-blue-500/30 text-blue-700' : 'bg-red-500/30 text-red-700'}`}
          >
            {row.status}
          </div>
        </div>
      )
    },
  },
  {
    id: 'actions',
    label: 'Actions',
    render: (row: RowData) => (
      <IconButtonGroup
        contents={InputInventoyActionButtons(row, setFarmerStates, farmerStates)}
        tooltipBgColorDark="#f5f5f5"
        tooltipBgColorLight="#333"
      />
    ),
  },
]

const InputInventoyActionButtons = (
  row: RowData,
  setFarmersStates: React.Dispatch<React.SetStateAction<FarmersStates>>,
  farmersStates: FarmersStates
) => {
  // switch (myStates.value) {
  //   case 0:
  return [
    {
      icon: <Edit size={18} />,
      tooltip: 'Edit',
      color: 'primary' as const,
      onClick: () => openInputSupplierDetailsModal(setFarmersStates, 'Edit Details', 'edit', row),
    },
    {
      icon: <Trash size={18} />,
      tooltip: 'Delete',
      color: 'error' as const,
      onClick: () => openAlertModal(setFarmersStates, 'Do you want to delete this record?'),
    },
  ]
}

// ============ Category list data columns ===============
export const categoryListDataColumns = (
  setFarmerStates: React.Dispatch<React.SetStateAction<FarmersStates>>,
  farmerStates: FarmersStates
) => [
  { id: 'categoryName', label: 'Category Name' },
  {
    id: 'actions',
    label: 'Actions',
    render: (row: RowData) => (
      <IconButtonGroup
        contents={CategoryListActionButtons(row, setFarmerStates, farmerStates)}
        tooltipBgColorDark="#f5f5f5"
        tooltipBgColorLight="#333"
      />
    ),
  },
]

const CategoryListActionButtons = (
  row: RowData,
  setFarmersStates: React.Dispatch<React.SetStateAction<FarmersStates>>,
  farmersStates: FarmersStates
) => {
  // switch (myStates.value) {
  //   case 0:
  return [
    {
      icon: <Edit size={18} />,
      tooltip: 'Edit',
      color: 'primary' as const,
      onClick: () => openInputSupplierDetailsModal(setFarmersStates, 'Edit Details', 'edit', row),
    },
    {
      icon: <Trash size={18} />,
      tooltip: 'Delete',
      color: 'error' as const,
      onClick: () => openAlertModal(setFarmersStates, 'Do you want to delete this record?'),
    },
  ]
}

//========== Service Request data columns ===========
export const serviceRequestDataColumns = (
  setFarmerStates: React.Dispatch<React.SetStateAction<FarmersStates>>,
  farmerStates: FarmersStates
) => [
  { id: 'requestId', label: 'REQUEST ID' },
  { id: 'farmerName', label: 'FARMER NAME' },
  { id: 'serviceRequested', label: 'SERVICE REQUESTED ' },
  { id: 'serviceProvider', label: 'SERVICE PROVIDER' },
  { id: 'dateOfRequest', label: 'DATE OF REQUEST' },
  {
    id: 'status',
    label: 'Status',
    render: (row: RowData) => {
      return (
        <div className="flex items-center gap-1">
          <div
            className={`px-3 py-1 rounded-full ${row.status === 'Active' ? 'bg-locaGreenLight text-logaTextGreen' : row.status === 'Pending' ? 'bg-blue-500/30 text-blue-700' : 'bg-red-500/30 text-red-700'}`}
          >
            {row.status}
          </div>
        </div>
      )
    },
  },
  {
    id: 'actions',
    label: 'Actions',
    render: (row: RowData) => (
      <IconButtonGroup
        contents={ServiceRequestActionButtons(row, setFarmerStates, farmerStates)}
        tooltipBgColorDark="#f5f5f5"
        tooltipBgColorLight="#333"
      />
    ),
  },
]

const ServiceRequestActionButtons = (
  row: RowData,
  setFarmersStates: React.Dispatch<React.SetStateAction<FarmersStates>>,
  farmersStates: FarmersStates
) => {
  // switch (myStates.value) {
  //   case 0:
  return [
    {
      icon: <Eye size={18} />,
      tooltip: 'View details',
      color: 'secondary' as const,
      onClick: () => openFarmerDetailsModal(setFarmersStates, 'View Details', 'details', row),
    },
    {
      icon: <GrCheckmark size={18} />,
      tooltip: 'Mark as completed',
      color: 'primary' as const,
      onClick: () => openInputSupplierDetailsModal(setFarmersStates, 'Edit Details', 'edit', row),
    },

    {
      icon: <Trash size={18} />,
      tooltip: 'Cancel request',
      color: 'error' as const,
      onClick: () => openAlertModal(setFarmersStates, 'Do you want to delete this record?'),
    },
  ]
}
//========== service type list data columns ==========
export const serviceTypeListDataColumns = (
  setFarmerStates: React.Dispatch<React.SetStateAction<FarmersStates>>,
  farmerStates: FarmersStates
) => [
  { id: 'serviceName', label: 'SERVICE  NAME' },
  {
    id: 'actions',
    label: 'Actions',
    render: (row: RowData) => (
      <IconButtonGroup
        contents={ServiceTypeListActionButtons(row, setFarmerStates, farmerStates)}
        tooltipBgColorDark="#f5f5f5"
        tooltipBgColorLight="#333"
      />
    ),
  },
]

const ServiceTypeListActionButtons = (
  row: RowData,
  setFarmersStates: React.Dispatch<React.SetStateAction<FarmersStates>>,
  farmersStates: FarmersStates
) => {
  // switch (myStates.value) {
  //   case 0:
  return [
    {
      icon: <Edit size={18} />,
      tooltip: 'Edit',
      color: 'primary' as const,
      onClick: () => openInputSupplierDetailsModal(setFarmersStates, 'Edit Details', 'edit', row),
    },
    {
      icon: <Trash size={18} />,
      tooltip: 'Delete',
      color: 'error' as const,
      onClick: () => openAlertModal(setFarmersStates, 'Do you want to delete this record?'),
    },
  ]
}

//============ Ticket list data column =========
export const ticketListDataColumns = (
  setTicketStates: React.Dispatch<React.SetStateAction<TicketListStates>>,
  ticketListStates: TicketListStates
) => [
  { id: 'ticketId', label: 'TICKET ID' },
  { id: 'username', label: 'USERNAME' },
  { id: 'datrSubmitted', label: 'DATE SUBMITTED ' },
  { id: 'issueType', label: 'ISSUE TYPE' },
  {
    id: 'priority',
    label: 'PRIORITY',
    render: (row: RowData) => {
      return (
        <div className="flex items-center gap-1">
          <div
          // className={`px-3 py-1 rounded-full ${row.priority === 'High' ? ' text-red-500' : row.priority === 'Low' ? ' text-green-500 ' : 'text-yellow-600'}`}
          >
            {row.status}
          </div>
        </div>
      )
    },
  },
  {
    id: 'assignedAgent',
    label: 'ASSIGNED AGENT',
  },
  {
    id: 'status',
    label: 'Status',
    render: (row: RowData) => {
      return (
        <div className="flex items-center gap-1">
          <div
            className={`px-3 py-1 rounded-full ${row.status === 'Active' ? 'bg-locaGreenLight text-logaTextGreen' : row.status === 'Pending' ? 'bg-blue-500/30 text-blue-700' : 'bg-red-500/30 text-red-700'}`}
          >
            {row.status}
          </div>
        </div>
      )
    },
  },
  {
    id: 'actions',
    label: 'Actions',
    render: (row: RowData) => (
      <IconButtonGroup
        contents={TicketListActionButtons(row, setTicketStates, ticketListStates)}
        tooltipBgColorDark="#f5f5f5"
        tooltipBgColorLight="#333"
      />
    ),
  },
]

const TicketListActionButtons = (
  row: RowData,
  setTicketListStates: React.Dispatch<React.SetStateAction<TicketListStates>>,
  ticketListStates: TicketListStates
) => {
  // switch (myStates.value) {
  //   case 0:
  return [
    {
      icon: <Eye size={18} />,
      tooltip: 'Details',
      color: 'secondary' as const,
      onClick: () => openticketsDetailsModal(setTicketListStates, 'displ', 'details', row),
    },
  ]
}

const RoleButtonConfigs = (row: RowData, setMyStates: React.Dispatch<React.SetStateAction<MyStates>>, myStates: MyStates) => {
  switch (myStates.value) {
    case 0:
      return [
        {
          icon: <Edit size={18} />,
          tooltip: 'Edit',
          color: 'primary' as const,
          onClick: () => UpdateStates(setMyStates, undefined, undefined, { addRole: true, viewMessage: 'Edit Permissions' }),
        },
        {
          icon: <Eye size={18} />,
          tooltip: 'View Permission',
          color: 'secondary' as const,
          onClick: () => UpdateStates(setMyStates, undefined, undefined, { addRole: true, viewMessage: 'View Permissions' }),
        },
      ]
    case 1:
      return [
        {
          icon: (
            <IconMenuTemplate
              menuItems={[
                {
                  label: 'Admin',
                  icon: <GoDotFill size={15} color="#A2C616" />,
                  onClick: () =>
                    UpdateStates(setMyStates, undefined, undefined, {
                      value: myStates.value,
                      modalView: '',
                      modalOpen: false,
                      modalTitle: '',
                      selectedRow: null,
                      snackbarOpen: true,
                      snackbarMessage: 'New role assigned!',
                    }),
                },
                {
                  label: 'Farmer',
                  icon: <GoDotFill size={15} color="#FF61F4" />,
                  onClick: () =>
                    UpdateStates(setMyStates, undefined, undefined, {
                      value: myStates.value,
                      modalView: '',
                      modalOpen: false,
                      modalTitle: '',
                      selectedRow: null,
                      snackbarOpen: true,
                      snackbarMessage: 'New role assigned!',
                    }),
                },
                {
                  label: 'Provider',
                  icon: <GoDotFill size={15} color="#4499FA" />,
                  onClick: () =>
                    UpdateStates(setMyStates, undefined, undefined, {
                      value: myStates.value,
                      modalView: '',
                      modalOpen: false,
                      modalTitle: '',
                      selectedRow: null,
                      snackbarOpen: true,
                      snackbarMessage: 'New role assigned!',
                    }),
                },
              ]}
              icon={<AddCircle size={18} />}
              iconColor="green"
              boxPadding={0}
              boxBottom={0}
              // buttonColor="default"
            />
          ),
          tooltip: 'Assign New Role',
          color: 'success' as const,
          onClick: () => {},
        },
        {
          icon: <Trash size={18} />,
          tooltip: 'Remove',
          color: 'error' as const,
          onClick: () =>
            UpdateStates(setMyStates, undefined, undefined, {
              value: myStates.value,
              modalView: '',
              modalOpen: false,
              modalTitle: '',
              selectedRow: null,
              snackbarOpen: true,
              snackbarMessage: 'User removed successfully!',
            }),
        },
      ]
    default:
      return [
        {
          icon: <CloseCircle size={18} />,
          tooltip: 'Close',
          color: 'secondary' as const,
          onClick: () => console.log('Close action clicked', row),
        },
      ]
  }
}

export const tabLabels = [{ name: 'Verified Plots' }, { name: 'Pending Approval', count: 9 }, { name: 'Inactive', count: 9 }]
export const plotTabLabels = [
  { name: 'Pending', count: 9 },
  { name: 'Approved ' },
  { name: 'Rejected', count: 33, backgroundColor: '#F5E8E8', color: '#F3574D' },
]
export const RolesTabLabels = [{ name: 'Roles Overview' }, { name: 'UserList' }]
export const disbursementTabLabels = [{ name: 'Pending ', count: 9 }, { name: 'Disbursed' }]
