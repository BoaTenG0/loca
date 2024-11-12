'use client'
import MainCard from '@/components/templates/ui/card/main-card'

import { a11yProps, TabPanel } from '@/components/templates/ui/TabPanel/tab-panel'
import { Box, Chip, Grid, IconButton, ListItemButton, Menu, Stack, Tab, Tabs, Tooltip, Typography } from '@mui/material'
import React, { MouseEventHandler, useState } from 'react'
import PlotTabs from '@/components/generals/plot-tabs/page'
import { cropTableData, data, tableData, tableData1, tableData2 } from '@/hooks/dummy-data/table-data'
import { DetailsView } from '@/components/generals/view-details/pages'
import DrawerTemplateNew from '@/components/templates/ui/dialogs/drawer-new'
import EditDetails from '@/components/generals/view-details/edit-details/page'
import HeadingMain from '@/components/templates/typography/headingMain'
import HeadingSub from '@/components/templates/typography/headingSub'
import { MyStates, RowData } from '../../../_logics/interface'
import { closeDetailsModal, openDetailsModal, openEditDetailsModal } from '../../../_logics/functions'
import { columns, cropsColumns, tabLabels } from '../../../_logics/data/data-grid-column'
import GenericTable from '@/components/templates/ui/table/kaluu'
import SnackbarTemplate from '@/components/templates/ui/dialogs/snackbar'
import { UpdateStates } from '@/lib/functions/update-states'
import AlertModalNew from '@/components/templates/ui/dialogs/alert-modal-new'
import { AddCircle } from 'iconsax-react'
import ButtonTemplate from '@/components/templates/ui/button/button'
import AddCrop from '@/components/generals/view-details/edit-details/addCrop'

const Crops = () => {
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
        <div className="w-full flex justify-between items-center">
          <div>
            <HeadingMain>Crops Management</HeadingMain>
            <HeadingSub>View and manage crops.</HeadingSub>
          </div>
          <ButtonTemplate
            sx={{
              backgroundColor: '#199675',
              color: 'white',
              fontSize: 12,
            }}
            label="Add Crop Type"
            handleClick={() => UpdateStates(setMyStates, undefined, undefined, { modalOpen: true, modalTitle: 'Add Crop' })}
            prefixIcon={<AddCircle size={15} />}
          />
        </div>
        <MainCard sx={{ marginTop: 5 }} codeString>
          <Box sx={{ width: '100%' }}>
            <GenericTable columns={cropsColumns(setMyStates, myStates)} data={cropTableData} />
          </Box>
        </MainCard>
      </Grid>

      <DrawerTemplateNew
        open={modalOpen}
        title={modalTitle}
        onClose={() => closeDetailsModal(setMyStates)}
        // customComponent={selectedRow ? <DetailsView growingStage row={selectedRow} /> : null}
        customComponent={<AddCrop onClose={() => closeDetailsModal(setMyStates)} account={selectedRow} />}
        size={520}
      />

      <AlertModalNew
        isIcon
        modalStyle="flex flex-col justify-center items-center"
        open={modalState === 'delete'}
        icon="warning"
        centered
        showOkBtn
        showCancelBtn
        okText={'Yes, delete Plot'}
        cancelText={"No, don't delete"}
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

export default Crops
