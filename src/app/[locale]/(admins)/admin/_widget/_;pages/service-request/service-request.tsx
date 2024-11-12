'use client'
import HeadingMain from '@/components/templates/typography/headingMain'
import HeadingSub from '@/components/templates/typography/headingSub'
import MainCard from '@/components/templates/ui/card/main-card'
import { Box, Grid, Stack } from '@mui/material'
import React, { useState } from 'react'
import { ServiceRequestDrawerDetails, ServiceRequestDrawerEdit, ServiceRequestTabs } from './comps/service-request-components'
import { TabPanel } from '@/components/templates/ui/TabPanel/tab-panel'
import GenericTable from '@/components/templates/ui/table/kaluu'
import { serviceRequestDataColumns } from '../../../_logics/data/data-grid-column'
import DrawerTemplateNew from '@/components/templates/ui/dialogs/drawer-new'
import { UpdateStates } from '@/lib/functions/update-states'
import AlertModalNew from '@/components/templates/ui/dialogs/alert-modal-new'
import { NotificationTemplate } from '@/components/templates/ui/dialogs/notification'
import { ServiceRequestStates } from '../../../_logics/interface'

const dummy = [
  {
    requestId: 1,
    farmerName: 'John Doe',
    serviceRequested: 'Farm Inspection',
    serviceProvider: 'John Smith',
    dateOfRequest: '2023-02-20',
    status: 'Pending',
  },
  {
    requestId: 2,
    farmerName: 'Liu Wei',
    serviceRequested: 'Farm Inspection',
    serviceProvider: 'John Smith',
    dateOfRequest: '2023-02-21',
    status: 'Pending',
  },
]
const dummy1 = [
  {
    requestId: 3,
    farmerName: 'Ahmed Khan',
    serviceRequested: 'Farm Inspection',
    serviceProvider: 'John Smith',
    dateOfRequest: '2023-02-22',
    status: 'Active',
  },
  {
    requestId: 4,
    farmerName: 'Fatima Al-Farsi',
    serviceRequested: 'Farm Inspection',
    serviceProvider: 'John Smith',
    dateOfRequest: '2023-02-23',
    status: 'Active',
  },
  {
    requestId: 5,
    farmerName: 'Amina Ibrahim',
    serviceRequested: 'Farm Inspection',
    serviceProvider: 'John Smith',
    dateOfRequest: '2023-02-24',
    status: 'Active',
  },
  {
    requestId: 6,
    farmerName: 'Amina sdgsd',
    serviceRequested: 'Farm Inspection',
    serviceProvider: 'John Smith',
    dateOfRequest: '2023-02-25',
    status: 'Active',
  },
]
const dummy2 = [
  {
    requestId: 7,
    farmerName: 'Maria Garcia',
    serviceRequested: 'Farm Inspection',
    serviceProvider: 'John Smith',
    dateOfRequest: '2023-02-26',
    status: 'Inactive',
  },
  {
    requestId: 8,
    farmerName: 'Pierre Dubois',
    serviceRequested: 'Farm Inspection',
    serviceProvider: 'John Smith',
    dateOfRequest: '2023-02-27',
    status: 'Inactive',
  },
]
const ServiceRequest = () => {
  const [myStates, setMyStates] = useState<ServiceRequestStates>({
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
        <HeadingMain>Service request</HeadingMain>
        <HeadingSub>View and manage service request.</HeadingSub>
        <MainCard
          sx={{ marginTop: 5 }}
          title={
            <ServiceRequestTabs
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
                <GenericTable columns={serviceRequestDataColumns(setMyStates, myStates)} data={dummy1} />
              </Stack>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Stack>
                <GenericTable columns={serviceRequestDataColumns(setMyStates, myStates)} data={dummy2} />
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
            <ServiceRequestDrawerDetails
              detailProps={myStates}
              onEditTypeChange={(value) => {
                UpdateStates(setMyStates, 'editType', value)
                console.log('dfdfd', value)
              }}
            />
          ) : modalView === 'edit' && editType !== '' ? (
            <ServiceRequestDrawerEdit
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

export default ServiceRequest
export const tabLabels = [
  { name: 'Approved(In progress)', count: 9 },
  { name: 'Pending approval' },
  { name: 'Completed', count: 9 },
  { name: 'Rejected', count: 9 },
]
export const RolesTabLabels = [{ name: 'Roles Overview' }, { name: 'UserList' }]
