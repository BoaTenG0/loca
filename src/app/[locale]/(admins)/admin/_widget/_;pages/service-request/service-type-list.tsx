'use client'
import HeadingMain from '@/components/templates/typography/headingMain'
import HeadingSub from '@/components/templates/typography/headingSub'
import MainCard from '@/components/templates/ui/card/main-card'
import AlertModalNew from '@/components/templates/ui/dialogs/alert-modal-new'
import DrawerTemplateNew from '@/components/templates/ui/dialogs/drawer-new'
import { NotificationTemplate } from '@/components/templates/ui/dialogs/notification'
import GenericTable from '@/components/templates/ui/table/kaluu'
import { TabPanel } from '@/components/templates/ui/TabPanel/tab-panel'
import { UpdateStates } from '@/lib/functions/update-states'
import { Box, Grid, Stack } from '@mui/material'
import React, { useState } from 'react'
import { ServiceTypeListDrawerEdit, ServiceTypeListTabs } from './comps/service-type-list-components'
import { serviceTypeListDataColumns } from '../../../_logics/data/data-grid-column'
import { ServiceRequestStates } from '../../../_logics/interface'

const dummy = [
  { serviceName: 'Fertilizers' },
  { serviceName: 'Fertilizers' },
  { serviceName: 'Fertilizers' },
  { serviceName: 'Fertilizers' },
  { serviceName: 'Fertilizers' },
  { serviceName: 'Fertilizers' },
  { serviceName: 'Fertilizers' },
]

const ServiceTypeList = () => {
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
            <ServiceTypeListTabs
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
                <GenericTable columns={serviceTypeListDataColumns(setMyStates, myStates)} data={dummy} />
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
            <ServiceTypeListDrawerEdit
              editTypeProps={myStates}
              setNoficationMessageState={(value) => UpdateStates(setMyStates, 'notificationMessage', value)}
              setNotificationOpenState={(value) => UpdateStates(setMyStates, 'notificationOpen', value)}
            />
          ) : modalView === 'edit' && editType !== '' ? (
            <ServiceTypeListDrawerEdit
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

export default ServiceTypeList
export const tabLabels = [{ name: 'Approved' }]
export const RolesTabLabels = [{ name: 'Roles Overview' }, { name: 'UserList' }]
