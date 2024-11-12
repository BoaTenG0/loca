'use client'
import MainCard from '@/components/templates/ui/card/main-card'

import { a11yProps, TabPanel } from '@/components/templates/ui/TabPanel/tab-panel'
import { Box, Chip, Grid, IconButton, ListItemButton, Menu, Stack, Tab, Tabs, Tooltip, Typography } from '@mui/material'
import React, { MouseEventHandler, useState } from 'react'
import PlotTabs from '@/components/generals/plot-tabs/page'
import { data, tableData, tableData1, tableData2 } from '@/hooks/dummy-data/table-data'
import { DetailsView } from '@/components/generals/view-details/pages'
import DrawerTemplateNew from '@/components/templates/ui/dialogs/drawer-new'
import EditDetails from '@/components/generals/view-details/edit-details/page'
import HeadingMain from '@/components/templates/typography/headingMain'
import HeadingSub from '@/components/templates/typography/headingSub'
import { MyStates, RowData } from '../../../_logics/interface'
import { closeDetailsModal, openDetailsModal, openEditDetailsModal } from '../../../_logics/functions'
import { columns, tabLabels } from '../../../_logics/data/data-grid-column'
import GenericTable from '@/components/templates/ui/table/kaluu'
import SnackbarTemplate from '@/components/templates/ui/dialogs/snackbar'
import { UpdateStates } from '@/lib/functions/update-states'
import AlertModalNew from '@/components/templates/ui/dialogs/alert-modal-new'

const Plots = () => {
  const [myStates, setMyStates] = useState<MyStates>({
    modalView: '',
    modalOpen: false,
    modalTitle: '',
    value: 0,
    selectedRow: null,
    anchorEl: null,
    snackbarOpen: false,
    snackbarMessage: '',
    modalState: '',
    modalMessage: '',
  })
  const { modalView, modalOpen, modalTitle, value, selectedRow, modalState, modalMessage, snackbarMessage, snackbarOpen } = myStates

  const handleChange = (event: any, newValue: number) => {
    setMyStates((prevState) => ({
      ...prevState,
      value: newValue,
    }))
  }

  return (
    <div>
      <Grid className="h-full text-left pb-5">
        <HeadingMain>Plots</HeadingMain>
        <HeadingSub>View and manage plots.</HeadingSub>
        <MainCard sx={{ marginTop: 5 }} title={<PlotTabs value={value} handleChange={handleChange} labels={tabLabels} />} codeString>
          <Box sx={{ width: '100%' }}>
            <TabPanel value={value} index={0}>
              <Stack>
                <GenericTable columns={columns(setMyStates, myStates)} data={data} />
              </Stack>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Stack>
                <GenericTable columns={columns(setMyStates, myStates)} data={tableData1} />
              </Stack>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Stack>
                <GenericTable columns={columns(setMyStates, myStates)} data={tableData2} />
              </Stack>
            </TabPanel>
          </Box>
        </MainCard>
      </Grid>

      <DrawerTemplateNew
        open={modalOpen}
        title={modalTitle}
        onClose={() => closeDetailsModal(setMyStates)}
        // customComponent={selectedRow ? <DetailsView growingStage row={selectedRow} /> : null}
        customComponent={
          modalView === 'details' ? (
            selectedRow ? (
              <DetailsView growingStage row={selectedRow} />
            ) : null
          ) : modalView === 'edit' ? (
            selectedRow ? (
              <EditDetails onClose={() => closeDetailsModal(setMyStates)} account={selectedRow} />
            ) : null
          ) : null
        }
        size={520}
      />

      <AlertModalNew
        isIcon
        modalStyle="flex flex-col justify-center items-center"
        open={modalState === 'activate' || modalState === 'reject' || modalState === 'approve' || modalState === 'deactivate'}
        icon="warning"
        centered
        showOkBtn
        showCancelBtn
        okText={
          modalState === 'activate'
            ? 'Yes, activate Plot'
            : modalState === 'reject'
              ? 'Yes, reject'
              : modalState === 'approve'
                ? 'Yes, approve'
                : 'Yes, deactivate'
        }
        cancelText={
          modalState === 'activate'
            ? "No, don't activate"
            : modalState === 'reject'
              ? "No, don't reject"
              : modalState === 'approve'
                ? "No, don't approve"
                : "No, don't deactivate"
        }
        message={modalMessage}
        onCancel={() => UpdateStates(setMyStates, 'modalOpen', false, { modalState: '' })}
        // onOk={handleCloseModal}
        onOk={() => {
          UpdateStates(setMyStates, undefined, undefined, {
            modalState: '',
            snackbarOpen: true,
          })
        }}
      />

      <SnackbarTemplate
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() =>
          UpdateStates(setMyStates, undefined, undefined, {
            snackbarOpen: false,
          })
        }
        severity="success"
        message={snackbarMessage}
      />
    </div>
  )
}

export default Plots
