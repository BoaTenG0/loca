'use client'
import MainCard from '@/components/templates/ui/card/main-card'
import DrawerTemplate from '@/components/templates/ui/dialogs/drawer'
import InputsTemplate from '@/components/templates/ui/inputs/inputs'
import SelectsTemplate from '@/components/templates/ui/inputs/selects'
import DatagridTemplate from '@/components/templates/ui/table/datagrid'
import { a11yProps, TabPanel } from '@/components/templates/ui/TabPanel/tab-panel'
import { UpdateStates } from '@/lib/functions/update-states'
import { DeleteFilled, EditFilled, EyeFilled, FileImageOutlined, SearchOutlined } from '@ant-design/icons'
import { Box, Chip, Grid, IconButton, ListItemButton, Menu, Stack, Tab, Tabs, Tooltip, Typography } from '@mui/material'
import { AddCircle, CloseCircle, Edit, Eye, More, Trash } from 'iconsax-react'
import React, { MouseEventHandler, useState } from 'react'
import { useTheme } from '@mui/material/styles'
import PlotTabs from '@/components/generals/plot-tabs/page'
import { data, RoleData, tableData, tableData1, tableData2, UserListData } from '@/hooks/dummy-data/table-data'
import { DetailsView } from '@/components/generals/view-details/pages'
import DrawerTemplateNew from '@/components/templates/ui/dialogs/drawer-new'
import EditDetails from '@/components/generals/view-details/edit-details/page'
import HeadingMain from '@/components/templates/typography/headingMain'
import HeadingSub from '@/components/templates/typography/headingSub'
import { MyStates, RowData } from '../../../_logics/interface'
import { closeDetailsModal, openDetailsModal, openEditDetailsModal } from '../../../_logics/functionsX'
import { columns, RolesColumns, RolesTabLabels, tabLabels, UserListColumns } from '../../../_logics/data/data-grid-column'
import GenericTable from '@/components/templates/ui/table/kaluu'
import IconButtonGroup from '@/components/templates/ui/icon-button/icon-button'
import ButtonTemplate from '@/components/templates/ui/button/button'
import AddRole from './add-role'
import SnackbarTemplate from '@/components/templates/ui/dialogs/snackbar'

const RolesPermission = () => {
  const [myStates, setMyStates] = useState<MyStates>({
    modalView: '',
    modalOpen: false,
    modalTitle: '',
    value: 0,
    selectedRow: null,
    anchorEl: null,
    addRole: false,
    snackbarOpen: false,
    snackbarMessage: '',
    viewMessage: '',
  })
  const { value, selectedRow, viewMessage } = myStates
  // const [anchorEl, setAnchorEl] = useState(null);

  const handleChange = (event: any, newValue: number) => {
    setMyStates((prevState) => ({
      ...prevState,
      value: newValue,
    }))
  }

  return (
    <div>
      {myStates.addRole ? (
        <div className="pt-3 flex flex-col space-y-9">
          <Typography variant="body1" sx={{ display: 'flex', color: '#808080', gap: 1, fontFamily: 'Poppins' }}>
            Roles Overview &gt; <Typography sx={{ color: '#000', fontFamily: 'Poppins' }}> {viewMessage}</Typography>
          </Typography>
          <MainCard height={600} sx={{ paddingX: 3 }}>
            <AddRole viewMode={viewMessage} onClick={() => UpdateStates(setMyStates, undefined, undefined, { addRole: false })} />
          </MainCard>
        </div>
      ) : (
        <Grid className="h-full text-left pb-5">
          <div className="w-full flex justify-between items-center">
            <div>
              <HeadingMain>Roles/Permissions</HeadingMain>
              <HeadingSub>View and manage roles/permissions.</HeadingSub>
            </div>
            <ButtonTemplate
              sx={{
                backgroundColor: '#199675',
                color: 'white',
                fontSize: 12,
              }}
              label="Add Role"
              handleClick={() => UpdateStates(setMyStates, undefined, undefined, { addRole: true, viewMessage: 'Add Role' })}
              prefixIcon={<AddCircle size={15} />}
            />
          </div>
          <MainCard sx={{ marginTop: 5 }} title={<PlotTabs value={value} handleChange={handleChange} labels={RolesTabLabels} />} codeString>
            <Box sx={{ width: '100%' }}>
              <TabPanel value={value} index={0}>
                <Stack>
                  <GenericTable columns={RolesColumns(setMyStates, myStates)} data={RoleData} />
                </Stack>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Stack>
                  <GenericTable columns={UserListColumns(setMyStates, myStates)} data={UserListData} />
                </Stack>
              </TabPanel>
            </Box>
          </MainCard>
        </Grid>
      )}

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

export default RolesPermission
