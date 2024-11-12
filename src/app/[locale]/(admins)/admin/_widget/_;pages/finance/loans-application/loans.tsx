'use client'
import MainCard from '@/components/templates/ui/card/main-card'

import { a11yProps, TabPanel } from '@/components/templates/ui/TabPanel/tab-panel'
import { Box, Chip, Grid, IconButton, ListItemButton, Menu, Stack, Tab, Tabs, Tooltip, Typography } from '@mui/material'
import React, { MouseEventHandler, useState } from 'react'
import PlotTabs from '@/components/generals/plot-tabs/page'
import {
  approvedLoansData,
  data,
  pendingLoansData,
  rejectedLoansData,
  tableData,
  tableData1,
  tableData2,
} from '@/hooks/dummy-data/table-data'
import { DetailsView } from '@/components/generals/view-details/pages'
import DrawerTemplateNew from '@/components/templates/ui/dialogs/drawer-new'
import EditDetails from '@/components/generals/view-details/edit-details/page'
import HeadingMain from '@/components/templates/typography/headingMain'
import HeadingSub from '@/components/templates/typography/headingSub'
import GenericTable from '@/components/templates/ui/table/kaluu'
import { MyStates } from '../../../../_logics/interface'
import { closeDetailsModal } from '../../../../_logics/functionsX'
import { columns, loansColumns, plotTabLabels, tabLabels } from '../../../../_logics/data/data-grid-column'
import { FinanceDetailsView } from '@/components/generals/view-details/finance-view'
import SnackbarTemplate from '@/components/templates/ui/dialogs/snackbar'
import { UpdateStates } from '@/lib/functions/update-states'

const Loans = () => {
  const [myStates, setMyStates] = useState<MyStates>({
    modalView: '',
    modalOpen: false,
    modalTitle: '',
    value: 0,
    selectedRow: null,
    anchorEl: null,
    snackbarOpen: false,
    snackbarMessage: '',
  })
  const { modalView, modalOpen, modalTitle, value, selectedRow, anchorEl } = myStates

  const handleChange = (event: any, newValue: number) => {
    setMyStates((prevState) => ({
      ...prevState,
      value: newValue,
    }))
  }

  return (
    <div>
      <Grid className="h-full text-left pb-5">
        <HeadingMain>Loans Application</HeadingMain>
        <HeadingSub>View and manage loans application.</HeadingSub>
        <MainCard sx={{ marginTop: 5 }} title={<PlotTabs value={value} handleChange={handleChange} labels={plotTabLabels} />} codeString>
          <Box sx={{ width: '100%' }}>
            <TabPanel value={value} index={0}>
              <Stack>
                <GenericTable columns={loansColumns(setMyStates, myStates)} data={pendingLoansData} search={false} filter />
              </Stack>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Stack>
                <GenericTable columns={loansColumns(setMyStates, myStates)} data={approvedLoansData} />
              </Stack>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Stack>
                <GenericTable columns={loansColumns(setMyStates, myStates)} data={rejectedLoansData} />
              </Stack>
            </TabPanel>
          </Box>
        </MainCard>
      </Grid>

      <DrawerTemplateNew
        open={modalOpen}
        title={modalTitle}
        onClose={() => closeDetailsModal(setMyStates)}
        customComponent={
          modalView === 'details' ? (
            selectedRow ? (
              <FinanceDetailsView pending row={selectedRow} />
            ) : null
          ) : modalView === 'approvedDetails' ? (
            selectedRow ? (
              <FinanceDetailsView row={selectedRow} />
            ) : null
          ) : selectedRow ? (
            <FinanceDetailsView rejected row={selectedRow} />
          ) : null
        }
        size={520}
      />

      <SnackbarTemplate
        open={myStates.snackbarOpen}
        autoHideDuration={3000}
        onClose={() =>
          UpdateStates(setMyStates, undefined, undefined, {
            value: myStates.value,
            modalView: '',
            modalOpen: false,
            modalTitle: '',
            selectedRow: null,
            snackbarOpen: false,
            snackbarMessage: '',
          })
        }
        severity="success"
        message={myStates.snackbarMessage}
      />
    </div>
  )
}

export default Loans
