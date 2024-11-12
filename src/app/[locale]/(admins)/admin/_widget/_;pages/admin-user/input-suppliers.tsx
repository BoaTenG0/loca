'use client'
import HeadingMain from '@/components/templates/typography/headingMain'
import HeadingSub from '@/components/templates/typography/headingSub'
import MainCard from '@/components/templates/ui/card/main-card'
import DrawerTemplateNew from '@/components/templates/ui/dialogs/drawer-new'
import GenericTable from '@/components/templates/ui/table/kaluu'
import { TabPanel } from '@/components/templates/ui/TabPanel/tab-panel'
import { Box, Grid, Stack } from '@mui/material'
import React, { useState } from 'react'
import { FarmersStates, MyStates } from '../../../_logics/interface'
import { UpdateStates } from '@/lib/functions/update-states'
import { farmerDataColumns, inputSupplierDataColumns } from '../../../_logics/data/data-grid-column'
import AlertModalNew from '@/components/templates/ui/dialogs/alert-modal-new'
import { NotificationTemplate } from '@/components/templates/ui/dialogs/notification'
import { InputSupplierDrawerDetails, InputSupplierDrawerEdit, InputSuppliersTabs } from './_comp/inputSupplier-components'
import ButtonTemplate from '@/components/templates/ui/button/button'

const dummy = [
  { name: 'John Doe', email: 'USA@mail.cm', phone: '+1-555-123-4567', products: 5, status: 'Pending' },
  { name: 'Liu Wei', email: 'China@mail.cm', phone: '+86-138-1234-5678', products: 2, status: 'Pending' },
]
const dummy1 = [
  { name: 'Ahmed Khan', email: 'India@mail.cm', phone: '+91-98765-43210', products: 10, status: 'Active' },
  { name: 'Fatima Al-Farsi', email: 'Saudi Arabia@mail.cm', phone: '+966-5-1234-5678', products: 7, status: 'Active' },
  { name: 'Amina Ibrahim', email: 'Nigeria@mail.cm', phone: '+234-80-1234-5678', products: 4, status: 'Active' },
  { name: 'Amina sdgsd', email: 'Nigeria@mail.cm', phone: '+234-80-1234-5678', products: 4, status: 'Active' },
]
const dummy2 = [
  { name: 'Maria Garcia', email: 'Mexico', phone: '+52-55-1234-5678', products: 3, status: 'Inactive' },
  { name: 'Pierre Dubois', email: 'France@mail.cm', phone: '+33-1-23-45-67-89', products: 6, status: 'Inactive' },
]

const InputSuppliers = () => {
  const [myStates, setMyStates] = useState<FarmersStates>({
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
      <Grid className="h-full text-left pb-5 mx-auto">
        <div className="flex justify-between">
          <div className="">
            <HeadingMain>Input suppliers</HeadingMain>
            <HeadingSub>View and manage input suppliers.</HeadingSub>
          </div>
          <div className="">
            <ButtonTemplate isText color="success" text="Create account" />
          </div>
        </div>
        <MainCard
          sx={{ marginTop: 5 }}
          title={
            <InputSuppliersTabs
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
                <GenericTable columns={inputSupplierDataColumns(setMyStates, myStates)} data={dummy} />
              </Stack>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Stack>
                <GenericTable columns={inputSupplierDataColumns(setMyStates, myStates)} data={dummy1} />
              </Stack>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Stack>
                <GenericTable columns={inputSupplierDataColumns(setMyStates, myStates)} data={dummy2} />
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
            <InputSupplierDrawerDetails
              detailProps={myStates}
              onEditTypeChange={(value) => {
                UpdateStates(setMyStates, 'editType', value)
              }}
            />
          ) : modalView === 'edit' && editType !== '' ? (
            <InputSupplierDrawerEdit
              editTypeProps={myStates}
              setNoficationMessageState={(value) => UpdateStates(setMyStates, 'notificationMessage', value)}
              setNotificationOpenState={(value) => UpdateStates(setMyStates, 'notificationOpen', value)}
            />
          ) : null
        }
        size={modalView === 'edit' ? 420 : 640}
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
      {/*
      <NotificationTemplate
        message={notificationMessage}
        open={notificationOpen}
        onClose={() => UpdateStates(setMyStates, undefined, undefined, { notificationOpen: false, notificationMessage: '' })}
        color="success"
        actionLabel="Undo"
        // actionClick={() => alert('Undo clicked!')}
        isIcon
        icon={'warning'}
      /> */}
    </div>
  )
}

export default InputSuppliers
export const tabLabels = [{ name: 'Pending Approval', count: 9 }, { name: 'Verified' }, { name: 'Suspended', count: 9 }]
export const RolesTabLabels = [{ name: 'Roles Overview' }, { name: 'UserList' }]
