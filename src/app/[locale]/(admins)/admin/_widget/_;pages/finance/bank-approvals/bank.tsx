'use client'
import MainCard from '@/components/templates/ui/card/main-card'

import { TabPanel } from '@/components/templates/ui/TabPanel/tab-panel'
import { Box, Grid, Stack } from '@mui/material'
import React, { useState } from 'react'
import PlotTabs from '@/components/generals/plot-tabs/page'
import { approvedLoansData, pendingLoansData, rejectedLoansData } from '@/hooks/dummy-data/table-data'
import DrawerTemplateNew from '@/components/templates/ui/dialogs/drawer-new'
import HeadingMain from '@/components/templates/typography/headingMain'
import HeadingSub from '@/components/templates/typography/headingSub'
import GenericTable from '@/components/templates/ui/table/kaluu'
import { MyStates } from '../../../../_logics/interface'
import { closeDetailsModal } from '../../../../_logics/functionsX'
import { bankColumns, plotTabLabels } from '../../../../_logics/data/data-grid-column'
import { FinanceDetailsView } from '@/components/generals/view-details/finance-view'

const BankApprovals = () => {
  const [myStates, setMyStates] = useState<MyStates>({
    modalView: '',
    modalOpen: false,
    modalTitle: '',
    value: 0,
    selectedRow: null,
    anchorEl: null,
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
        <HeadingMain>Bank Approvals</HeadingMain>
        <HeadingSub>View and manage bank approvals.</HeadingSub>
        <MainCard sx={{ marginTop: 5 }} title={<PlotTabs value={value} handleChange={handleChange} labels={plotTabLabels} />} codeString>
          <Box sx={{ width: '100%' }}>
            <TabPanel value={value} index={0}>
              <Stack>
                <GenericTable columns={bankColumns(setMyStates, myStates)} data={pendingLoansData} search={false} />
              </Stack>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Stack>
                <GenericTable columns={bankColumns(setMyStates, myStates)} data={approvedLoansData} />
              </Stack>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Stack>
                <GenericTable columns={bankColumns(setMyStates, myStates)} data={rejectedLoansData} />
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
              <FinanceDetailsView disbursement row={selectedRow} />
            ) : null
          ) : modalView === 'approvedDetails' ? (
            selectedRow ? (
              <FinanceDetailsView bankApproved row={selectedRow} />
            ) : null
          ) : selectedRow ? (
            <FinanceDetailsView disbursement rejected row={selectedRow} />
          ) : null
        }
        size={520}
      />
    </div>
  )
}

export default BankApprovals
