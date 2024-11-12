'use client'

import HeadingMain from '@/components/templates/typography/headingMain'
import HeadingSub from '@/components/templates/typography/headingSub'
import MainCard from '@/components/templates/ui/card/main-card'
import AlertModalNew from '@/components/templates/ui/dialogs/alert-modal-new'
import DrawerTemplateNew from '@/components/templates/ui/dialogs/drawer-new'
import GenericTable from '@/components/templates/ui/table/kaluu'
import { TabPanel } from '@/components/templates/ui/TabPanel/tab-panel'
import { UpdateStates } from '@/lib/functions/update-states'
import { Box, Grid, Stack } from '@mui/material'
import { useState } from 'react'
import { manualLaborUsersDataColumns } from '../../../_logics/data/data-grid-column'
import { ManualLaborUsersDrawerDetails, ManualLaborUsersDrawerEdit, ManualLaborUsersTabs } from './_comp/manual-labor-components'
import { ManualLaborUserStates } from '../../../_logics/interface'

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

const ManualLabor = () => {
  const [myStates, setMyStates] = useState<ManualLaborUserStates>({
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
        <div className="">
          <HeadingMain>Manual Labor</HeadingMain>
          <HeadingSub>View and manage manal labor users.</HeadingSub>
        </div>
        <MainCard
          sx={{ marginTop: 5 }}
          title={
            <ManualLaborUsersTabs
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
                <GenericTable columns={manualLaborUsersDataColumns(setMyStates, myStates)} data={dummy} />
              </Stack>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Stack>
                <GenericTable columns={manualLaborUsersDataColumns(setMyStates, myStates)} data={dummy1} />
              </Stack>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Stack>
                <GenericTable columns={manualLaborUsersDataColumns(setMyStates, myStates)} data={dummy2} />
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
            <ManualLaborUsersDrawerDetails
              detailProps={myStates}
              onEditTypeChange={(value) => {
                UpdateStates(setMyStates, 'editType', value)
              }}
            />
          ) : modalView === 'edit' && editType !== '' ? (
            <ManualLaborUsersDrawerEdit
              editTypeProps={myStates}
              setNoficationMessageState={(value) => UpdateStates(setMyStates, 'notificationMessage', value)}
              setNotificationOpenState={(value) => UpdateStates(setMyStates, 'notificationOpen', value)}
            />
          ) : null
        }
        size={620}
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

export default ManualLabor
export const tabLabels = [{ name: 'Pending Approval', count: 9 }, { name: 'Verified' }, { name: 'Inactive', count: 9 }]
export const RolesTabLabels = [{ name: 'Roles Overview' }, { name: 'UserList' }]
