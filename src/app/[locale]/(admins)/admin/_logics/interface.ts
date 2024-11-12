import { ReactNode } from 'react'

export type RowData = {
  id: number
  name: string
  plotName: string
  cropType: string
  location: string
  status: string
  phoneNumber?: string | undefined
  bank?: string | undefined
  date?: string | undefined
  amount?: string | undefined
}

export type InputSupplierStates<T = any> = {
  modalView: string

  notificationOpen: boolean
  notificationMessage: string

  alertOpen: boolean
  message: string

  modalOpen: boolean
  createProgram?: boolean
  addRole?: boolean
  editType?: string
  modalTitle: string
  value: number
  selectedRow?: RowData | null
  anchorEl: null
}
export type FinancialUserStates<T = any> = {
  modalView: string

  notificationOpen: boolean
  notificationMessage: string

  alertOpen: boolean
  message: string

  modalOpen: boolean
  createProgram?: boolean
  addRole?: boolean
  editType?: string
  modalTitle: string
  value: number
  selectedRow?: RowData | null
  anchorEl: null
}
export type InputInventoryStates<T = any> = {
  modalView: string

  notificationOpen: boolean
  notificationMessage: string

  alertOpen: boolean
  message: string

  modalOpen: boolean
  createProgram?: boolean
  addRole?: boolean
  editType?: string
  modalTitle: string
  value: number
  selectedRow?: RowData | null
  anchorEl: null
}
export type CategoryListStates<T = any> = {
  modalView: string

  notificationOpen: boolean
  notificationMessage: string

  alertOpen: boolean
  message: string

  modalOpen: boolean
  createProgram?: boolean
  addRole?: boolean
  editType?: string
  modalTitle: string
  value: number
  selectedRow?: RowData | null
  anchorEl: null
}
export type ServiceRequestStates<T = any> = {
  modalView: string

  notificationOpen: boolean
  notificationMessage: string

  alertOpen: boolean
  message: string

  modalOpen: boolean
  createProgram?: boolean
  addRole?: boolean
  editType?: string
  modalTitle: string
  value: number
  selectedRow?: RowData | null
  anchorEl: null
}

export type ServiceTypeListStates<T = any> = {
  modalView: string

  notificationOpen: boolean
  notificationMessage: string

  alertOpen: boolean
  message: string

  modalOpen: boolean
  createProgram?: boolean
  addRole?: boolean
  editType?: string
  modalTitle: string
  value: number
  selectedRow?: RowData | null
  anchorEl: null
}
export type AlertStates = {
  open: boolean
  message: string
  severity: string
  type: string
}
export type TicketListStates<T = any> = {
  modalView: string

  notificationOpen: boolean
  notificationMessage: string
  displayView: number

  alertOpen: boolean
  message: string

  modalOpen: boolean
  createProgram?: boolean
  addRole?: boolean
  editType?: string
  modalTitle: string
  value: number
  selectedRow?: RowData | null
  anchorEl: null
}

export type AdminUserStates<T = any> = {
  modalView: string

  notificationOpen: boolean
  notificationMessage: string

  alertOpen: boolean
  message: string

  modalOpen: boolean
  createProgram?: boolean
  addRole?: boolean
  editType?: string
  modalTitle: string
  value: number
  selectedRow?: RowData | null
  anchorEl: null
}

export type FarmersStates<T = any> = {
  modalView: string

  notificationOpen: boolean
  notificationMessage: string

  alertOpen: boolean
  message: string

  modalOpen: boolean
  createProgram?: boolean
  addRole?: boolean
  editType?: string
  modalTitle: string
  value: number
  selectedRow?: RowData | null
  anchorEl: null
}
export type ManualLaborUserStates<T = any> = {
  modalView: string

  notificationOpen: boolean
  notificationMessage: string

  alertOpen: boolean
  message: string

  modalOpen: boolean
  createProgram?: boolean
  addRole?: boolean
  editType?: string
  modalTitle: string
  value: number
  selectedRow?: RowData | null
  anchorEl: null
}
export type MyStates<T = any> = {
  modalView: string
  modalState?: string
  modalMessage?: string
  modalOpen: boolean
  createProgram?: boolean
  addRole?: boolean
  modalTitle: string
  value: number
  selectedRow?: RowData | null
  anchorEl: null
  snackbarOpen?: boolean
  snackbarMessage?: string
  viewMessage?: string
}
export type TheStates<T = any> = {
  // MODAL STATES
  modalView: string
  modalOpen: boolean
  modalTitle: string
  navID: number
  editType: string
  // ALERT STATES
  alertOpen: boolean
  alertType: string
  alertMessage: string
  // TAB STATES
  tabValue: number
}

export interface AvatarGroupProps {
  avatars: {
    alt: string
    src: string
  }[]
  max: number
  componentsProps?: {
    additionalAvatar?: {
      onMouseEnter?: () => void
      onMouseLeave?: () => void
    }
  }
}

export interface User {
  id: string
  name: string
  image: string
}

export interface CreateState {
  locationOpen?: boolean
  modalOpen: boolean
  open: boolean
  locationInfo: { address: string; coordinates: { lat: number; lng: number } | null }
  isMapVisible: boolean
  selectedFarmers?: string[]
  snackbarOpen?: boolean
  assignedUsers: User[]
}

export interface AnimateButtonProps {
  children: ReactNode
  type?: 'slide' | 'scale' | 'rotate'
  direction?: 'up' | 'down' | 'left' | 'right'
  offset?: number
  scale?: number | { hover: number; tap: number }
}

interface ShippingData {
  trainingTitle: string
  trainingDescription: string
  uploadedFiles: []
}
interface CourseContentData {
  moduleOne: string
  uploadOne: []
  moduleTwo: string
  uploadTwo: []
}
interface PaymentData {
  whatYouLearn: string
}
interface requirementData {
  requirement: string
}

export interface FormState {
  activeStep: number
  shippingData: ShippingData
  paymentData: PaymentData
  requirementData: requirementData
  courseContent: CourseContentData
  errorIndex: number | null
}

export interface BeneficiaryStates {
  modalView: string
  modalOpen: boolean
  modalTitle: string
  value: number
  editType: string
  selectedRow: RowData | null
  anchorEl: null
  alertOpen: boolean
  message: string
  notificationOpen: boolean
  notificationMessage: string
}
