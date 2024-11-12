import { UpdateStates } from '@/lib/functions/update-states'
import { MyStates, TheStates, RowData } from './interface'
// import { setTheStates } from './allStates'

export const openDetailsModal = (row: RowData, setMyStates: React.Dispatch<React.SetStateAction<MyStates>>) => {
  UpdateStates(setMyStates, undefined, undefined, { selectedRow: row, modalOpen: true, modalTitle: 'View Details', modalView: 'details' })
}
export const openEditDetailsModal = (row: RowData, setMyStates: React.Dispatch<React.SetStateAction<MyStates>>) => {
  UpdateStates(setMyStates, undefined, undefined, { selectedRow: row, modalOpen: true, modalTitle: 'Edit Details', modalView: 'edit' })
}

export const closeDetailsModal = (setMyStates: React.Dispatch<React.SetStateAction<MyStates>>) => {
  UpdateStates(setMyStates, undefined, undefined, { selectedRow: null, modalOpen: false, modalTitle: '', modalView: '' })
}

export const openTheModal = (setTheStates: React.Dispatch<React.SetStateAction<TheStates>>, title: string, view: string) => {
  UpdateStates(setTheStates, undefined, undefined, { modalOpen: true, modalTitle: title, modalView: view })
}

export const closeMyDetailsModal = (setTheStates: React.Dispatch<React.SetStateAction<TheStates>>) => {
  UpdateStates(setTheStates, undefined, undefined, { modalOpen: false, modalTitle: '', modalView: '' })
}
export const test = (setTheStates: React.Dispatch<React.SetStateAction<any>>) => {
  UpdateStates(setTheStates, undefined, undefined, { modalOpen: false, modalTitle: '', modalView: '' })
}

export const closeAlertModal = (setTheStates: React.Dispatch<React.SetStateAction<TheStates>>) => {
  UpdateStates(setTheStates, undefined, undefined, { alertOpen: false, alertType: '', alertMessage: '' })
}
