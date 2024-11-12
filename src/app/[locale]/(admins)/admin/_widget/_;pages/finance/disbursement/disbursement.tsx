'use client'
import MainCard from '@/components/templates/ui/card/main-card'

import { TabPanel } from '@/components/templates/ui/TabPanel/tab-panel'
import { Box, Grid, Stack } from '@mui/material'
import React, { useState } from 'react'
import PlotTabs from '@/components/generals/plot-tabs/page'
import {
  approvedLoansData,
  disbursementData,
  pendingDisbursementData,
  pendingLoansData,
  rejectedLoansData,
} from '@/hooks/dummy-data/table-data'
import DrawerTemplateNew from '@/components/templates/ui/dialogs/drawer-new'
import HeadingMain from '@/components/templates/typography/headingMain'
import HeadingSub from '@/components/templates/typography/headingSub'
import GenericTable from '@/components/templates/ui/table/kaluu'
import { MyStates } from '../../../../_logics/interface'
import { disbursementColumns, disbursementTabLabels, plotTabLabels } from '../../../../_logics/data/data-grid-column'

const Disbursement = () => {
  const [myStates, setMyStates] = useState<MyStates>({
    modalView: '',
    modalOpen: false,
    modalTitle: '',
    value: 0,
    selectedRow: null,
    anchorEl: null,
  })
  const { value } = myStates

  const handleChange = (event: any, newValue: number) => {
    setMyStates((prevState) => ({
      ...prevState,
      value: newValue,
    }))
  }

  return (
    <div>
      <Grid className="h-full text-left pb-5">
        <HeadingMain>Disbursement</HeadingMain>
        <HeadingSub>View and manage all funds.</HeadingSub>
        <MainCard
          sx={{ marginTop: 5 }}
          title={<PlotTabs value={value} handleChange={handleChange} labels={disbursementTabLabels} />}
          codeString
        >
          <Box sx={{ width: '100%' }}>
            <TabPanel value={value} index={0}>
              <Stack>
                <GenericTable columns={disbursementColumns(setMyStates, myStates)} data={pendingDisbursementData} search={false} />
              </Stack>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Stack>
                <GenericTable columns={disbursementColumns(setMyStates, myStates)} data={disbursementData} />
              </Stack>
            </TabPanel>
          </Box>
        </MainCard>
      </Grid>
    </div>
  )
}

export default Disbursement
