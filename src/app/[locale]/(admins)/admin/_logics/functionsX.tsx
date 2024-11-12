import { UpdateStates } from '@/lib/functions/update-states'

import {
  AlertStates,
  MyStates,
  RowData,
  FarmersStates,
  BeneficiaryStates,
  InputSupplierStates,
  ManualLaborUserStates,
  TicketListStates,
} from './interface'
import { Input } from 'postcss'

export const openDetailsModal = (
  setMyStates: React.Dispatch<React.SetStateAction<MyStates>>,
  title: string,
  view: string,
  row?: RowData
) => {
  UpdateStates(setMyStates, undefined, undefined, { selectedRow: row, modalOpen: true, modalTitle: title, modalView: view })
}
export const openEditDetailsModal = (
  setMyStates: React.Dispatch<React.SetStateAction<MyStates>>,
  title: string,
  view: string,
  row?: RowData
) => {
  UpdateStates(setMyStates, undefined, undefined, { selectedRow: row, modalOpen: true, modalTitle: title, modalView: view })
}

export const closeDetailsModal = (setMyStates: React.Dispatch<React.SetStateAction<MyStates>>) => {
  UpdateStates(setMyStates, undefined, undefined, { selectedRow: null, modalOpen: false, modalTitle: '', modalView: '' })
}

// Beneficiary
export const openFarmerDetailsModal = (
  setFarmerStates: React.Dispatch<React.SetStateAction<FarmersStates>>,
  title: string,
  view: string,
  row?: RowData
) => {
  UpdateStates(setFarmerStates, undefined, undefined, { selectedRow: row, modalOpen: true, modalTitle: title, modalView: view })
}
export const openBneficiaryDetailsModal = (
  setFarmerStates: React.Dispatch<React.SetStateAction<BeneficiaryStates>>,
  title: string,
  view: string,
  row?: RowData
) => {
  UpdateStates(setFarmerStates, undefined, undefined, { selectedRow: row, modalOpen: true, modalTitle: title, modalView: view })
}

export const openBeneficiaryModal = (setAlertStates: React.Dispatch<React.SetStateAction<BeneficiaryStates>>, message: string) => {
  UpdateStates(setAlertStates, undefined, undefined, { alertOpen: true, message: 'Do you want to delete this record?' })
}
export const closeABeneficiaryModal = (setAlertStates: React.Dispatch<React.SetStateAction<BeneficiaryStates>>) => {
  UpdateStates(setAlertStates, undefined, undefined, { alertOpen: false, message: '' })
}
////

export const openAlertModal = (setAlertStates: React.Dispatch<React.SetStateAction<FarmersStates>>, message: string) => {
  UpdateStates(setAlertStates, undefined, undefined, { alertOpen: true, message: 'Do you want to delete this record?' })
}
export const closeAlertModal = (setAlertStates: React.Dispatch<React.SetStateAction<AlertStates>>) => {
  UpdateStates(setAlertStates, undefined, undefined, { open: false, message: '', severity: '' })
}

// Input suppliers
export const openInputSupplierDetailsModal = (
  setFarmerStates: React.Dispatch<React.SetStateAction<InputSupplierStates>>,
  title: string,
  view: string,
  row?: RowData
) => {
  UpdateStates(setFarmerStates, undefined, undefined, { selectedRow: row, modalOpen: true, modalTitle: title, modalView: view })
}
export const openManualLaborDetailsModal = (
  setFarmerStates: React.Dispatch<React.SetStateAction<ManualLaborUserStates>>,
  title: string,
  view: string,
  row?: RowData
) => {
  UpdateStates(setFarmerStates, undefined, undefined, { selectedRow: row, modalOpen: true, modalTitle: title, modalView: view })
}

export const openticketsDetailsModal = (
  setTicketListStates: React.Dispatch<React.SetStateAction<TicketListStates>>,
  title: string,
  view: string,
  row?: RowData
) => {
  UpdateStates(setTicketListStates, 'displayView', 2)
}
