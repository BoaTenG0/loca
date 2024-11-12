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
// import { FarmersTabs, FarmerDrawerEdit, FarmerDrawerDetails } from './components'
import { farmerDataColumns } from '../../../_logics/data/data-grid-column'
import AlertModalNew from '@/components/templates/ui/dialogs/alert-modal-new'
import { NotificationTemplate } from '@/components/templates/ui/dialogs/notification'
import { FarmerDrawerDetails, FarmerDrawerEdit, FarmersTabs } from './_comp/beneficiary-components'

const dummy = [
  { farmer_name: 'John Doe', country: 'USA', phone: '+1-555-123-4567', plots: 5, status: 'Pending' },
  { farmer_name: 'Liu Wei', country: 'China', phone: '+86-138-1234-5678', plots: 2, status: 'Pending' },
]
const dummy1 = [
  { farmer_name: 'Ahmed Khan', country: 'India', phone: '+91-98765-43210', plots: 10, status: 'Active' },
  { farmer_name: 'Fatima Al-Farsi', country: 'Saudi Arabia', phone: '+966-5-1234-5678', plots: 7, status: 'Active' },
  { farmer_name: 'Amina Ibrahim', country: 'Nigeria', phone: '+234-80-1234-5678', plots: 4, status: 'Active' },
  { farmer_name: 'Amina sdgsd', country: 'Nigeria', phone: '+234-80-1234-5678', plots: 4, status: 'Active' },
]
const dummy2 = [
  { farmer_name: 'Maria Garcia', country: 'Mexico', phone: '+52-55-1234-5678', plots: 3, status: 'Inactive' },
  { farmer_name: 'Pierre Dubois', country: 'France', phone: '+33-1-23-45-67-89', plots: 6, status: 'Inactive' },
]

const BeneficiaryProducers = () => {
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
      <Grid className="h-full text-left pb-5">
        <HeadingMain>Beneficiary/Producer</HeadingMain>
        <HeadingSub>View and manage beneficiary/producer.</HeadingSub>
        <MainCard
          sx={{ marginTop: 5 }}
          title={
            <FarmersTabs
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
                <GenericTable columns={farmerDataColumns(setMyStates, myStates)} data={dummy} />
              </Stack>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Stack>
                <GenericTable columns={farmerDataColumns(setMyStates, myStates)} data={dummy1} />
              </Stack>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Stack>
                <GenericTable columns={farmerDataColumns(setMyStates, myStates)} data={dummy2} />
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
            <FarmerDrawerDetails
              detailProps={myStates}
              onEditTypeChange={(value) => {
                UpdateStates(setMyStates, 'editType', value)
                console.log('dfdfd', value)
              }}
            />
          ) : modalView === 'edit' && editType !== '' ? (
            <FarmerDrawerEdit
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

export default BeneficiaryProducers
export const tabLabels = [{ name: 'Pending Approval', count: 9 }, { name: 'Verified' }, { name: 'Inactive', count: 9 }]
export const RolesTabLabels = [{ name: 'Roles Overview' }, { name: 'UserList' }]
