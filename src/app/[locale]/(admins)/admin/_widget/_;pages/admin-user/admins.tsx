'use client'

import { Box, Grid, Stack } from '@mui/material'
import { useState } from 'react'
import { AdminUserStates } from '../../../_logics/interface'
import HeadingMain from '@/components/templates/typography/headingMain'
import HeadingSub from '@/components/templates/typography/headingSub'
import MainCard from '@/components/templates/ui/card/main-card'
import { AdminUsersDrawerDetails, AdminUsersDrawerEdit, AdminUsersTabs } from './_comp/admin-users-components'
import GenericTable from '@/components/templates/ui/table/kaluu'
import { adminUsersDataColumns } from '../../../_logics/data/data-grid-column'
import { TabPanel } from '@/components/templates/ui/TabPanel/tab-panel'
import DrawerTemplateNew from '@/components/templates/ui/dialogs/drawer-new'
import { UpdateStates } from '@/lib/functions/update-states'
import AlertModalNew from '@/components/templates/ui/dialogs/alert-modal-new'
import { NotificationTemplate } from '@/components/templates/ui/dialogs/notification'
import ButtonTemplate from '@/components/templates/ui/button/button'

const dummy = [
  { firstName: 'John', lastName: 'Doe', email: 'USA@mail.cm', phone: '+1-555-123-4567', status: 'Pending' },
  { firstName: 'Liu', lastName: 'Wei', email: 'China@mail.cm', phone: '+86-138-1234-5678', status: 'Pending' },
]
const dummy1 = [
  { firstName: 'Ahmed', lastName: 'Khan', email: 'India@mail.cm', phone: '+91-98765-43210', status: 'Active' },
  { firstName: 'Fatima', lastName: 'Al-Farsi', email: 'Saudi Arabia@mail.cm', phone: '+966-5-1234-5678', status: 'Active' },
  { firstName: 'Amina', lastName: 'Ibrahim', email: 'Nigeria@mail.cm', phone: '+234-80-1234-5678', status: 'Active' },
  { firstName: 'Amina', lastName: 'sdgsd', email: 'Nigeria@mail.cm', phone: '+234-80-1234-5678', status: 'Active' },
]
const dummy2 = [
  { firstName: 'Maria', lastName: 'Garcia', email: 'Mexico', phone: '+52-55-1234-5678', status: 'Inactive' },
  { firstName: 'Pierre', lastName: 'Dubois', email: 'France@mail.cm', phone: '+33-1-23-45-67-89', status: 'Inactive' },
]

const AdminUsers = () => {
  const [myStates, setMyStates] = useState<AdminUserStates>({
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
            <HeadingMain>Admin users</HeadingMain>
            <HeadingSub>View and manage admin users.</HeadingSub>
          </div>
          <div className="">
            <ButtonTemplate
              isText
              text="Add admin"
              handleClick={() =>
                UpdateStates(setMyStates, undefined, undefined, { modalOpen: true, modalView: 'add', modalTitle: 'Add admin' })
              }
            />
          </div>
        </div>
        <MainCard
          sx={{ marginTop: 5 }}
          title={
            <AdminUsersTabs
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
                <GenericTable columns={adminUsersDataColumns(setMyStates, myStates)} data={dummy1} />
              </Stack>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Stack>
                <GenericTable columns={adminUsersDataColumns(setMyStates, myStates)} data={dummy2} />
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
            <AdminUsersDrawerEdit
              editTypeProps={myStates}
              setNoficationMessageState={(value) => UpdateStates(setMyStates, 'notificationMessage', value)}
              setNotificationOpenState={(value) => UpdateStates(setMyStates, 'notificationOpen', value)}
            />
          ) : (modalView === 'edit' && editType !== '') || modalView === 'add' ? (
            <AdminUsersDrawerEdit
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

export default AdminUsers
export const tabLabels = [{ name: 'Active' }, { name: 'Inactive', count: 9 }]
export const RolesTabLabels = [{ name: 'Roles Overview' }, { name: 'UserList' }]
