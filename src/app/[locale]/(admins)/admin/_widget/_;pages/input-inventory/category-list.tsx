'use client'
import HeadingMain from '@/components/templates/typography/headingMain'
import HeadingSub from '@/components/templates/typography/headingSub'
import MainCard from '@/components/templates/ui/card/main-card'
import { Box, Grid, Stack } from '@mui/material'
import React, { useState } from 'react'
import { CategoryListDrawerDetails, CategoryListDrawerEdit, CategoryListTabs } from './_comps/category-list-component'
import { TabPanel } from '@/components/templates/ui/TabPanel/tab-panel'
import GenericTable from '@/components/templates/ui/table/kaluu'
import { categoryListDataColumns } from '../../../_logics/data/data-grid-column'
import DrawerTemplateNew from '@/components/templates/ui/dialogs/drawer-new'
import { UpdateStates } from '@/lib/functions/update-states'
import { CategoryListStates } from '../../../_logics/interface'
import AlertModalNew from '@/components/templates/ui/dialogs/alert-modal-new'
import { NotificationTemplate } from '@/components/templates/ui/dialogs/notification'
import ButtonTemplate from '@/components/templates/ui/button/button'

const dummy = [
  { categoryName: 'Fertilizers' },
  { categoryName: 'Fertilizers' },
  { categoryName: 'Fertilizers' },
  { categoryName: 'Fertilizers' },
  { categoryName: 'Fertilizers' },
  { categoryName: 'Fertilizers' },
  { categoryName: 'Fertilizers' },
]

const CategoryList = () => {
  const [myStates, setMyStates] = useState<CategoryListStates>({
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
        <div className="flex justify-between">
          <div className="">
            <HeadingMain>Category list</HeadingMain>
            <HeadingSub>View and manage category list.</HeadingSub>
          </div>
          <div className="">
            <ButtonTemplate
              isText
              text="Add category"
              handleClick={() =>
                UpdateStates(setMyStates, undefined, undefined, { modalOpen: true, modalView: 'add', modalTitle: 'Add category' })
              }
            />
          </div>
        </div>
        <MainCard
          sx={{ marginTop: 5 }}
          title={
            <CategoryListTabs
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
                <GenericTable columns={categoryListDataColumns(setMyStates, myStates)} data={dummy} />
              </Stack>
            </TabPanel>
            {/* <TabPanel value={value} index={1}>
                  <Stack>
                    <GenericTable columns={categoryListDataColumns(setMyStates, myStates)} data={dummy1} />
                  </Stack>
                </TabPanel>
                <TabPanel value={value} index={2}>
                  <Stack>
                    <GenericTable columns={categoryListDataColumns(setMyStates, myStates)} data={dummy2} />
                  </Stack>
                </TabPanel> */}
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
            <CategoryListDrawerEdit
              editTypeProps={myStates}
              setNoficationMessageState={(value) => UpdateStates(setMyStates, 'notificationMessage', value)}
              setNotificationOpenState={(value) => UpdateStates(setMyStates, 'notificationOpen', value)}
            />
          ) : (modalView === 'edit' && editType !== '') || modalView === 'add' ? (
            <CategoryListDrawerEdit
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

export default CategoryList
export const tabLabels = [{ name: 'Fertilizers' }]
export const RolesTabLabels = [{ name: 'Roles Overview' }, { name: 'UserList' }]
