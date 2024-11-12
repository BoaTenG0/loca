'use client'
import React, { useState } from 'react'
import { AdminUserStates, TicketListStates } from '../../../_logics/interface'
import { Box, Grid, Stack } from '@mui/material'
import HeadingMain from '@/components/templates/typography/headingMain'
import HeadingSub from '@/components/templates/typography/headingSub'
import MainCard from '@/components/templates/ui/card/main-card'
import { UpdateStates } from '@/lib/functions/update-states'
import { TabPanel } from '@/components/templates/ui/TabPanel/tab-panel'
import { ticketListDataColumns } from '../../../_logics/data/data-grid-column'
import GenericTable from '@/components/templates/ui/table/kaluu'
import DrawerTemplateNew from '@/components/templates/ui/dialogs/drawer-new'
import AlertModalNew from '@/components/templates/ui/dialogs/alert-modal-new'
import { NotificationTemplate } from '@/components/templates/ui/dialogs/notification'
import { TicketListDetailsModal, TicketListTabs } from './comp/ticket-list-components'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import ButtonTemplate from '@/components/templates/ui/button/button'
import { GoDotFill } from 'react-icons/go'
import { IoMdArrowBack } from 'react-icons/io'
import Image from 'next/image'
import { LuDownload } from 'react-icons/lu'
import { Button } from 'antd'

const dummy1 = [
  {
    ticketId: 'TICK-001',
    username: 'Ahmed Khan',
    dateSubmitted: '2022-01-01',
    issueType: 'Technical',
    priority: 'High',
    assignedAgent: 'John Doe',
    status: 'Open',
  },
  {
    ticketId: 'TICK-002',
    username: 'Fatima Al-Farsi',
    dateSubmitted: '2022-01-02',
    issueType: 'Non-Technical',
    priority: 'Low',
    assignedAgent: 'Jane Doe',
    status: 'Open',
  },
  {
    ticketId: 'TICK-003',
    username: 'Amina Ibrahim',
    dateSubmitted: '2022-01-03',
    issueType: 'Technical',
    priority: 'Medium',
    assignedAgent: 'John Doe',
    status: 'Open',
  },
  {
    ticketId: 'TICK-004',
    username: 'Amina sdgsd',
    dateSubmitted: '2022-01-04',
    issueType: 'Non-Technical',
    priority: 'High',
    assignedAgent: 'Jane Doe',
    status: 'Open',
  },
]
const dummy2 = [
  {
    ticketId: 'TICK-005',
    username: 'Maria Garcia',
    dateSubmitted: '2022-01-05',
    issueType: 'Technical',
    priority: 'Low',
    assignedAgent: 'John Doe',
    status: 'In progress',
  },
  {
    ticketId: 'TICK-006',
    username: 'Pierre Dubois',
    dateSubmitted: '2022-01-06',
    issueType: 'Non-Technical',
    priority: 'Medium',
    assignedAgent: 'Jane Doe',
    status: 'In progress',
  },
]
const dummy3 = [
  {
    ticketId: 'TICK-005',
    username: 'Maria Garcia',
    dateSubmitted: '2022-01-05',
    issueType: 'Technical',
    priority: 'Low',
    assignedAgent: 'John Doe',
    status: 'Close',
  },
  {
    ticketId: 'TICK-006',
    username: 'Pierre Dubois',
    dateSubmitted: '2022-01-06',
    issueType: 'Non-Technical',
    priority: 'Medium',
    assignedAgent: 'Jane Doe',
    status: 'Close',
  },
]

const TicketList = () => {
  const [myStates, setMyStates] = useState<TicketListStates>({
    modalView: '',
    modalOpen: false,
    modalTitle: '',
    value: 0,
    editType: '',
    selectedRow: null,
    anchorEl: null,
    alertOpen: false,
    displayView: 1,
    message: '',
    notificationOpen: false,
    notificationMessage: '',
  })
  const {
    notificationMessage,
    notificationOpen,
    displayView,
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
      {displayView === 1 && (
        <Grid className="h-full text-left pb-5">
          <div className="">
            <HeadingMain>Ticket list</HeadingMain>
            <HeadingSub>View and manage admin ticket list.</HeadingSub>
          </div>
          <MainCard
            sx={{ marginTop: 5 }}
            title={
              <TicketListTabs
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
                  <GenericTable columns={ticketListDataColumns(setMyStates, myStates)} data={dummy1} />
                </Stack>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Stack>
                  <GenericTable columns={ticketListDataColumns(setMyStates, myStates)} data={dummy2} />
                </Stack>
              </TabPanel>
            </Box>
          </MainCard>
        </Grid>
      )}
      {displayView !== 1 && (
        <TicketListDetailsModal
          displayView={(value) => {
            console.log(value)
            UpdateStates(setMyStates, 'displayView', value)
          }}
        />
      )}

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

export default TicketList

export const tabLabels = [{ name: 'Open' }, { name: 'Inprogress', count: 9 }, { name: 'Close', count: 9 }]
export const RolesTabLabels = [{ name: 'Roles Overview' }, { name: 'UserList' }]
