import { Chip } from '@mui/material'

export const data = [
  {
    // id: 0,
    name: 'John Sam',
    plotName: 'Riverside Farm',
    cropType: 'Maize',
    location: 'Labadi Estate',
    status: (
      <Chip
        label="Active"
        sx={{ width: 90, backgroundColor: '#e4f2fd', color: '#4D95F3', fontWeight: 'bold', textTransform: 'uppercase' }}
      />
    ),
  },
  {
    // id: 1,
    name: 'Jane Doe',
    plotName: 'Sunset Valley',
    cropType: 'Wheat',
    location: 'Greenwood Village',
    status: (
      <Chip
        label="Active"
        sx={{ width: 90, backgroundColor: '#e4f2fd', color: '#4D95F3', fontWeight: 'bold', textTransform: 'uppercase' }}
      />
    ),
  },
  {
    // id: 2,
    name: 'Michael Brown',
    plotName: 'Hilltop Farms',
    cropType: 'Soybeans',
    location: 'Lakewood Park',
    status: (
      <Chip
        label="Active"
        sx={{ width: 90, backgroundColor: '#e4f2fd', color: '#4D95F3', fontWeight: 'bold', textTransform: 'uppercase' }}
      />
    ),
  },
  {
    // id: 3,
    name: 'Alice Johnson',
    plotName: 'Meadow Farms',
    cropType: 'Barley',
    location: 'Springfield',
    status: (
      <Chip
        label="Active"
        sx={{ width: 90, backgroundColor: '#e4f2fd', color: '#4D95F3', fontWeight: 'bold', textTransform: 'uppercase' }}
      />
    ),
  },
  {
    // id: 4,
    name: 'David White',
    plotName: 'Maple Ridge',
    cropType: 'Corn',
    location: 'Highland Acres',
    status: (
      <Chip
        label="Active"
        sx={{ width: 90, backgroundColor: '#e4f2fd', color: '#4D95F3', fontWeight: 'bold', textTransform: 'uppercase' }}
      />
    ),
  },
]
export const RoleData = [
  {
    // id: 0,
    role: 'Admin',
    description: 'Full access to all system features',
    usersAssigned: '2',
  },
  {
    // id: 1,
    role: 'Farmer',
    description: 'Access to input orders and training',
    usersAssigned: '32',
  },
  {
    // id: 2,
    role: 'Service Provider',
    description: 'Manages assigned service requests.',
    usersAssigned: '16',
  },
]
export const UserListData = [
  {
    // id: 0,
    user: 'John Sam',
    phoneNumber: '+233 000 000 000',
    currentRole: '2',
  },
  {
    // id: 1,
    user: 'John Sam',
    phoneNumber: '+233 000 000 000',
    currentRole: '32',
  },
  {
    // id: 2,
    user: 'John Sam',
    phoneNumber: '+233 000 000 000',
    currentRole: '16',
  },
]
export const tableData = [
  {
    id: 0,
    name: 'John Sam',
    plotName: 'Riverside Farm',
    cropType: 'Maize',
    location: 'Labadi Estate',
    status: (
      <Chip
        label="Active"
        sx={{ width: 90, backgroundColor: '#eafbf7', color: '#2eb760', fontWeight: 'bold', textTransform: 'uppercase' }}
      />
    ),
  },
  {
    id: 1,
    name: 'Jane Doe',
    plotName: 'Sunset Valley',
    cropType: 'Wheat',
    location: 'Greenwood Village',
    status: (
      <Chip
        label="Active"
        sx={{ width: 90, backgroundColor: '#eafbf7', color: '#2eb760', fontWeight: 'bold', textTransform: 'uppercase' }}
      />
    ),
  },
  {
    id: 2,
    name: 'Michael Brown',
    plotName: 'Hilltop Farms',
    cropType: 'Soybeans',
    location: 'Lakewood Park',
    status: (
      <Chip
        label="Active"
        sx={{ width: 90, backgroundColor: '#eafbf7', color: '#2eb760', fontWeight: 'bold', textTransform: 'uppercase' }}
      />
    ),
  },
  {
    id: 3,
    name: 'Alice Johnson',
    plotName: 'Meadow Farms',
    cropType: 'Barley',
    location: 'Springfield',
    status: (
      <Chip
        label="Active"
        sx={{ width: 90, backgroundColor: '#eafbf7', color: '#2eb760', fontWeight: 'bold', textTransform: 'uppercase' }}
      />
    ),
  },
  {
    id: 4,
    name: 'David White',
    plotName: 'Maple Ridge',
    cropType: 'Corn',
    location: 'Highland Acres',
    status: (
      <Chip
        label="Active"
        sx={{ width: 90, backgroundColor: '#eafbf7', color: '#2eb760', fontWeight: 'bold', textTransform: 'uppercase' }}
      />
    ),
  },
]
export const tableData1 = [
  {
    // id: 0,
    name: 'John Sam',
    plotName: 'Riverside Farm',
    cropType: 'Maize',
    location: 'Labadi Estate',
    status: (
      <Chip
        label="Pending"
        sx={{ width: 90, backgroundColor: '#e4f2fd', color: '#4D95F3', fontWeight: 'bold', textTransform: 'uppercase' }}
      />
    ),
  },
  {
    id: 1,
    name: 'Jane Doe',
    plotName: 'Sunset Valley',
    cropType: 'Wheat',
    location: 'Greenwood Village',
    status: (
      <Chip
        label="Pending"
        sx={{ width: 90, backgroundColor: '#e4f2fd', color: '#4D95F3', fontWeight: 'bold', textTransform: 'uppercase' }}
      />
    ),
  },
  {
    id: 2,
    name: 'Michael Brown',
    plotName: 'Hilltop Farms',
    cropType: 'Soybeans',
    location: 'Lakewood Park',
    status: (
      <Chip
        label="Pending"
        sx={{ width: 90, backgroundColor: '#e4f2fd', color: '#4D95F3', fontWeight: 'bold', textTransform: 'uppercase' }}
      />
    ),
  },
  {
    id: 3,
    name: 'Alice Johnson',
    plotName: 'Meadow Farms',
    cropType: 'Barley',
    location: 'Springfield',
    status: (
      <Chip
        label="Pending"
        sx={{ width: 90, backgroundColor: '#e4f2fd', color: '#4D95F3', fontWeight: 'bold', textTransform: 'uppercase' }}
      />
    ),
  },
  {
    id: 4,
    name: 'David White',
    plotName: 'Maple Ridge',
    cropType: 'Corn',
    location: 'Highland Acres',
    status: (
      <Chip
        label="Pending"
        sx={{ width: 90, backgroundColor: '#e4f2fd', color: '#4D95F3', fontWeight: 'bold', textTransform: 'uppercase' }}
      />
    ),
  },
]
export const tableData2 = [
  {
    id: 0,
    name: 'John Sam',
    plotName: 'Riverside Farm',
    cropType: 'Maize',
    location: 'Labadi Estate',
    status: (
      <Chip
        label="Inactive"
        sx={{ width: 90, backgroundColor: '#EFEFEF', color: '#5B5B5B', fontWeight: 'bold', textTransform: 'uppercase' }}
      />
    ),
  },
  {
    id: 1,
    name: 'Jane Doe',
    plotName: 'Sunset Valley',
    cropType: 'Wheat',
    location: 'Greenwood Village',
    status: (
      <Chip
        label="Inactive"
        sx={{ width: 90, backgroundColor: '#EFEFEF', color: '#5B5B5B', fontWeight: 'bold', textTransform: 'uppercase' }}
      />
    ),
  },
  {
    id: 2,
    name: 'Michael Brown',
    plotName: 'Hilltop Farms',
    cropType: 'Soybeans',
    location: 'Lakewood Park',
    status: (
      <Chip
        label="Inactive"
        sx={{ width: 90, backgroundColor: '#EFEFEF', color: '#5B5B5B', fontWeight: 'bold', textTransform: 'uppercase' }}
      />
    ),
  },
  {
    id: 3,
    name: 'Alice Johnson',
    plotName: 'Meadow Farms',
    cropType: 'Barley',
    location: 'Springfield',
    status: (
      <Chip
        label="Inactive"
        sx={{ width: 90, backgroundColor: '#EFEFEF', color: '#5B5B5B', fontWeight: 'bold', textTransform: 'uppercase' }}
      />
    ),
  },
  {
    id: 4,
    name: 'David White',
    plotName: 'Maple Ridge',
    cropType: 'Corn',
    location: 'Highland Acres',
    status: (
      <Chip
        label="Inactive"
        sx={{ width: 90, backgroundColor: '#EFEFEF', color: '#5B5B5B', fontWeight: 'bold', textTransform: 'uppercase' }}
      />
    ),
  },
]
export const cropTableData = [
  {
    id: 0,
    cropType: 'Maize',
    stages: '6',
  },
  {
    id: 1,
    cropType: 'Maize',
    stages: '5',
  },
  {
    id: 2,
    cropType: 'Maize',
    stages: '1',
  },
  {
    id: 3,
    cropType: 'Rice',
    stages: '2',
  },
  {
    id: 4,
    cropType: 'Fertilizers',
    stages: '6',
  },
]

export const pendingLoansData = [
  {
    // id: 0,
    name: 'John Sam',
    phoneNumber: '+233 000 000 000',
    bank: 'GCB Bank',
    date: 'April 27, 2024',
    amount: '₵50.00 - ₵300.00',
    status: (
      <Chip
        label="Pending"
        sx={{ width: 90, backgroundColor: '#e4f2fd', color: '#4D95F3', fontWeight: 'bold', textTransform: 'uppercase', fontSize: 10 }}
      />
    ),
  },
  {
    // id: 0,
    name: 'John Sam',
    phoneNumber: '+233 000 000 000',
    bank: 'GCB Bank',
    date: 'April 27, 2024',
    amount: '₵50.00 - ₵300.00',
    status: (
      <Chip
        label="Pending"
        sx={{ width: 90, backgroundColor: '#e4f2fd', color: '#4D95F3', fontWeight: 'bold', textTransform: 'uppercase', fontSize: 10 }}
      />
    ),
  },
  {
    // id: 0,
    name: 'John Sam',
    phoneNumber: '+233 000 000 000',
    bank: 'GCB Bank',
    date: 'April 27, 2024',
    amount: '₵50.00 - ₵300.00',
    status: (
      <Chip
        label="Pending"
        sx={{ width: 90, backgroundColor: '#e4f2fd', color: '#4D95F3', fontWeight: 'bold', textTransform: 'uppercase', fontSize: 10 }}
      />
    ),
  },
]
export const pendingDisbursementData = [
  {
    // id: 0,
    name: 'John Sam',
    bank: 'GCB Bank',
    date: 'April 27, 2024',
    disbursementDate: '-',
    amount: '-',
    status: (
      <Chip
        label="Pending"
        sx={{ width: 90, backgroundColor: '#e4f2fd', color: '#4D95F3', fontWeight: 'bold', textTransform: 'uppercase', fontSize: 10 }}
      />
    ),
  },
  {
    // id: 0,
    name: 'John Sam',
    bank: 'GCB Bank',
    date: 'April 27, 2024',
    disbursementDate: '-',
    amount: '-',
    status: (
      <Chip
        label="Pending"
        sx={{ width: 90, backgroundColor: '#e4f2fd', color: '#4D95F3', fontWeight: 'bold', textTransform: 'uppercase', fontSize: 10 }}
      />
    ),
  },
  {
    // id: 0,
    name: 'John Sam',
    bank: 'GCB Bank',
    date: 'April 27, 2024',
    disbursementDate: '-',
    amount: '-',
    status: (
      <Chip
        label="Pending"
        sx={{ width: 90, backgroundColor: '#e4f2fd', color: '#4D95F3', fontWeight: 'bold', textTransform: 'uppercase', fontSize: 10 }}
      />
    ),
  },
]
export const disbursementData = [
  {
    // id: 0,
    name: 'John Sam',
    bank: 'GCB Bank',
    date: 'April 27, 2024',
    disbursementDate: 'April 27, 2024',
    amount: ' ₵300.00',
    status: (
      <Chip
        label="Disbursed"
        sx={{ width: 90, backgroundColor: '#96EBD533', color: '#2EB760', fontWeight: 'bold', textTransform: 'uppercase', fontSize: 10 }}
      />
    ),
  },
  {
    // id: 0,
    name: 'John Sam',
    bank: 'GCB Bank',
    date: 'April 27, 2024',
    disbursementDate: 'April 27, 2024',
    amount: ' ₵300.00',
    status: (
      <Chip
        label="Disbursed"
        sx={{ width: 90, backgroundColor: '#96EBD533', color: '#2EB760', fontWeight: 'bold', textTransform: 'uppercase', fontSize: 10 }}
      />
    ),
  },
  {
    // id: 0,
    name: 'John Sam',
    bank: 'GCB Bank',
    date: 'April 27, 2024',
    disbursementDate: 'April 27, 2024',
    amount: ' ₵300.00',
    status: (
      <Chip
        label="Disbursed"
        sx={{ width: 90, backgroundColor: '#96EBD533', color: '#2EB760', fontWeight: 'bold', textTransform: 'uppercase', fontSize: 10 }}
      />
    ),
  },
]
export const approvedLoansData = [
  {
    // id: 0,
    name: 'John Sam',
    phoneNumber: '+233 000 000 000',
    bank: 'GCB Bank',
    date: 'April 27, 2024',
    amount: '₵50.00 - ₵300.00',
    status: (
      <Chip
        label="Approved"
        sx={{ width: 90, backgroundColor: '#96EBD533', color: '#2EB760', fontWeight: 'bold', textTransform: 'uppercase', fontSize: 10 }}
      />
    ),
  },
  {
    // id: 0,
    name: 'John Sam',
    phoneNumber: '+233 000 000 000',
    bank: 'GCB Bank',
    date: 'April 27, 2024',
    amount: '₵50.00 - ₵300.00',
    status: (
      <Chip
        label="Approved"
        sx={{ width: 90, backgroundColor: '#96EBD533', color: '#2EB760', fontWeight: 'bold', textTransform: 'uppercase', fontSize: 10 }}
      />
    ),
  },
  {
    // id: 0,
    name: 'John Sam',
    phoneNumber: '+233 000 000 000',
    bank: 'GCB Bank',
    date: 'April 27, 2024',
    amount: '₵50.00 - ₵300.00',
    status: (
      <Chip
        label="Approved"
        sx={{ width: 90, backgroundColor: '#96EBD533', color: '#2EB760', fontWeight: 'bold', textTransform: 'uppercase', fontSize: 10 }}
      />
    ),
  },
]
export const rejectedLoansData = [
  {
    // id: 0,
    name: 'John Sam',
    phoneNumber: '+233 000 000 000',
    bank: 'GCB Bank',
    date: 'April 27, 2024',
    amount: '₵50.00 - ₵300.00',
    status: (
      <Chip
        label="Rejected"
        sx={{ width: 90, backgroundColor: '#F3574D26', color: '#F3574D', fontWeight: 'bold', textTransform: 'uppercase', fontSize: 10 }}
      />
    ),
  },
  {
    // id: 0,
    name: 'John Sam',
    phoneNumber: '+233 000 000 000',
    bank: 'GCB Bank',
    date: 'April 27, 2024',
    amount: '₵50.00 - ₵300.00',
    status: (
      <Chip
        label="Rejected"
        sx={{ width: 90, backgroundColor: '#F3574D26', color: '#F3574D', fontWeight: 'bold', textTransform: 'uppercase', fontSize: 10 }}
      />
    ),
  },
  {
    // id: 0,
    name: 'John Sam',
    phoneNumber: '+233 000 000 000',
    bank: 'GCB Bank',
    date: 'April 27, 2024',
    amount: '₵50.00 - ₵300.00',
    status: (
      <Chip
        label="Rejected"
        sx={{ width: 90, backgroundColor: '#F3574D26', color: '#F3574D', fontWeight: 'bold', textTransform: 'uppercase', fontSize: 10 }}
      />
    ),
  },
]
