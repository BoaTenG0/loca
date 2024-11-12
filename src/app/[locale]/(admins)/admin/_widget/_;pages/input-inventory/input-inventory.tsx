'use client'
import HeadingMain from '@/components/templates/typography/headingMain'
import HeadingSub from '@/components/templates/typography/headingSub'
import MainCard from '@/components/templates/ui/card/main-card'
import AlertModalNew from '@/components/templates/ui/dialogs/alert-modal-new'
import DrawerTemplateNew from '@/components/templates/ui/dialogs/drawer-new'
import { NotificationTemplate } from '@/components/templates/ui/dialogs/notification'
import GenericTable from '@/components/templates/ui/table/kaluu'
import { TabPanel } from '@/components/templates/ui/TabPanel/tab-panel'
import { Box, Grid, Stack } from '@mui/material'
import React, { useState } from 'react'
import { InputInventoryStates } from '../../../_logics/interface'
import { InputInventoryDrawerDetails, InputInventoryDrawerEdit, InputInventoryTabs } from './_comps/inputs-inventory-components'
import { inputInventoryDataColumns } from '../../../_logics/data/data-grid-column'
import { UpdateStates } from '@/lib/functions/update-states'
import ButtonTemplate from '@/components/templates/ui/button/button'

const dummy1 = [
  { name: 'Rice', category: 'Food', supplier: 'John Doe', price: 10, stock: 100, status: 'Active' },
  { name: 'Tomato', category: 'Vegetable', supplier: 'Amina Ibrahim', price: 7, stock: 70, status: 'Active' },
  { name: 'Carrot', category: 'Vegetable', supplier: 'Fatima Al-Farsi', price: 4, stock: 40, status: 'Active' },
  { name: 'Potato', category: 'Food', supplier: 'Ahmed Khan', price: 4, stock: 40, status: 'Active' },
]
const dummy2 = [
  { name: 'Onion', category: 'Vegetable', supplier: 'Maria Garcia', price: 3, stock: 30, status: 'Inactive' },
  { name: 'Orange', category: 'Fruit', supplier: 'Pierre Dubois', price: 6, stock: 60, status: 'Inactive' },
]

const InputInventory = () => {
  const [myStates, setMyStates] = useState<InputInventoryStates>({
    modalView: '',
    modalOpen: false,
    modalTitle: '',
    value: 0,
    editType: '',
    selectedRow: null,
    anchorEl: null,
    alertOpen: false,
    message: '',
    notificationOpen: false,
    notificationMessage: '',
  })
  const {
    notificationMessage,
    notificationOpen,
    modalView,
    modalOpen,
    modalTitle,
    value,
    editType,
    message,
    alertOpen,
    selectedRow,
    anchorEl,
  } = myStates

  return (
    <div>
      <Grid className="h-full text-left pb-5">
        <div className="flex justify-between">
          <div className="">
            <HeadingMain>Input Inventory</HeadingMain>
            <HeadingSub>View and manage input inventory.</HeadingSub>
          </div>
          <div className="">
            <ButtonTemplate
              isText
              text="Add inventory"
              handleClick={() =>
                UpdateStates(setMyStates, undefined, undefined, { modalOpen: true, modalView: 'add', modalTitle: 'Add inventory' })
              }
            />
          </div>
        </div>
        <MainCard
          sx={{ marginTop: 5 }}
          title={
            <InputInventoryTabs
              value={value}
              handleChange={(event: React.SyntheticEvent, value: number) => UpdateStates(setMyStates, 'value', value)}
              labels={tabLabels}
            />
          }
          codeString
        >
          <Box sx={{ width: '100%' }}>
            <TabPanel value={value} index={0}>
              <Stack>
                <GenericTable columns={inputInventoryDataColumns(setMyStates, myStates)} data={dummy1} />
              </Stack>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Stack>
                <GenericTable columns={inputInventoryDataColumns(setMyStates, myStates)} data={dummy2} />
              </Stack>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Stack>
                <GenericTable columns={inputInventoryDataColumns(setMyStates, myStates)} data={dummy2} />
              </Stack>
            </TabPanel>
          </Box>
        </MainCard>
      </Grid>

      <DrawerTemplateNew
        open={modalOpen}
        title={modalTitle}
        onClose={() =>
          UpdateStates(setMyStates, undefined, undefined, {
            modalOpen: false,
            editType: '',
          })
        }
        customComponent={
          (modalView === 'edit' && editType === '') || modalView === 'details' || modalView === 'approval' ? (
            <InputInventoryDrawerEdit
              editTypeProps={myStates}
              setNoficationMessageState={(value) => UpdateStates(setMyStates, 'notificationMessage', value)}
              setNotificationOpenState={(value) => UpdateStates(setMyStates, 'notificationOpen', value)}
            />
          ) : (modalView === 'edit' && editType !== '') || modalView === 'add' ? (
            <InputInventoryDrawerEdit
              editTypeProps={myStates}
              setNoficationMessageState={(value) => UpdateStates(setMyStates, 'notificationMessage', value)}
              setNotificationOpenState={(value) => UpdateStates(setMyStates, 'notificationOpen', value)}
            />
          ) : null
        }
        size={420}
      />

      <AlertModalNew
        showOkBtn
        showCancelBtn
        cancelText="No, Cancel"
        okText="Yes"
        open={alertOpen}
        message={message}
        messageStyle=""
        icon="warning"
        onCancel={() => UpdateStates(setMyStates, 'alertOpen', false)}
        onOk={() => UpdateStates(setMyStates, 'alertOpen', false)}
      />

      <NotificationTemplate
        message={notificationMessage}
        open={notificationOpen}
        onClose={() => UpdateStates(setMyStates, undefined, undefined, { notificationOpen: false, notificationMessage: '' })}
        color="success"
        actionLabel="Undo"
        // actionClick={() => alert('Undo clicked!')}
        isIcon
        icon={'warning'}
      />
    </div>
  )
}

export default InputInventory
export const tabLabels = [{ name: 'Active' }, { name: 'Inactive', count: 9 }]
export const RolesTabLabels = [{ name: 'Roles Overview' }, { name: 'UserList' }]
