'use client'
import MainCard from '@/components/templates/ui/card/main-card'
import DrawerTemplate from '@/components/templates/ui/dialogs/drawer'

import { a11yProps, TabPanel } from '@/components/templates/ui/TabPanel/tab-panel'
import { UpdateStates } from '@/lib/functions/update-states'
import { Box, Stack, Typography } from '@mui/material'
import { Add, AddCircle, Check, CloseCircle, Edit, Eye, More, Play, SearchNormal, Trash } from 'iconsax-react'
import React, { MouseEventHandler, useState } from 'react'
import { useTheme } from '@mui/material/styles'
import PlotTabs from '@/components/generals/plot-tabs/page'
import { DetailsView } from '@/components/generals/view-details/pages'
import DrawerTemplateNew from '@/components/templates/ui/dialogs/drawer-new'
import EditDetails from '@/components/generals/view-details/edit-details/page'
import HeadingMain from '@/components/templates/typography/headingMain'
import HeadingSub from '@/components/templates/typography/headingSub'
import { MyStates, RowData } from '../../../_logics/interface'
import { closeDetailsModal, openDetailsModal, openEditDetailsModal } from '../../../_logics/functionsX'
import ButtonTemplate from '@/components/templates/ui/button/button'
import IconMenuCard from '@/components/templates/ui/card/icon-menu-card'
import InputsTemplateNew from '@/components/templates/ui/input/input'
import ValidationWizard from '@/components/templates/ui/steppe-vertical/wizard/new'
import HorizontalLabelPositionBelowStepper from '@/components/templates/ui/steppe-vertical/wizard/new'
import CreateTraining from '@/components/templates/ui/steppe-vertical/wizard/create-training-program-'
import SnackbarTemplate from '@/components/templates/ui/dialogs/snackbar'

const Training = () => {
  const theme = useTheme()
  const [myStates, setMyStates] = useState<MyStates>({
    modalView: '',
    modalOpen: false,
    createProgram: false,
    modalTitle: '',
    value: 0,
    selectedRow: null,
    anchorEl: null,
    snackbarOpen: false,
    snackbarMessage: '',
  })
  const { modalView, modalOpen, modalTitle, value, selectedRow, anchorEl } = myStates
  // const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(myStates.anchorEl)
  const handleClick = (event: any) => {
    setMyStates((prevState) => ({
      ...prevState,
      anchorEl: event.currentTarget,
    }))
  }

  const handleClose = () => {
    setMyStates((prevState) => ({
      ...prevState,
      anchorEl: null,
    }))
  }
  const handleChange = (event: any, newValue: number) => {
    setMyStates((prevState) => ({
      ...prevState,
      value: newValue,
    }))
  }

  const tabLabels = [{ name: 'Published' }, { name: 'Draft' }]

  return (
    <div>
      <div className="h-full text-left pb-5">
        {myStates.createProgram ? (
          <div className="pt-3 flex flex-col space-y-9">
            <Typography variant="body1" sx={{ display: 'flex', color: '#808080', gap: 1, fontFamily: 'Poppins' }}>
              Training programs &gt; <Typography sx={{ color: '#000', fontFamily: 'Poppins' }}> Create training program</Typography>
            </Typography>
            <MainCard height={600} sx={{ paddingX: 3 }}>
              <CreateTraining onClick={() => UpdateStates(setMyStates, undefined, undefined, { createProgram: false })} />
            </MainCard>
          </div>
        ) : (
          <>
            <div className="w-full flex justify-between items-center">
              <div>
                <HeadingMain>Training Programs</HeadingMain>
                <HeadingSub>View and manage training programs.</HeadingSub>
              </div>
              <ButtonTemplate
                styles={{
                  backgroundColor: '#199675',
                  color: 'white',
                  fontSize: 12,
                  width: 200,
                  //   '&:hover': {
                  //     backgroundColor: 'primaryDark',
                  //   },
                }}
                label="Create Training Program"
                handleClick={() => UpdateStates(setMyStates, undefined, undefined, { createProgram: true })}
                prefixIcon={<AddCircle size={15} />}
              />
            </div>

            <MainCard
              sx={{ marginTop: 5, overflow: 'hidden' }}
              title={<PlotTabs value={value} handleChange={handleChange} labels={tabLabels} />}
              codeString
            >
              <Box sx={{ width: '100%', zIndex: 0 }}>
                <TabPanel value={value} index={0}>
                  <Stack sx={{ px: 2, zIndex: 0 }}>
                    <div className="flex space-x-5">
                      <InputsTemplateNew
                        classname="rounded-lg"
                        afterIcon={<SearchNormal size={20} />}
                        placeholder="Find location"
                        height={35}
                      />
                      <InputsTemplateNew classname="rounded-lg" placeholder="Find location" inputType="date" height={35} />
                    </div>
                    <Typography variant="h5" gutterBottom sx={{ marginTop: 3, fontFamily: 'Poppins', fontWeight: 'bold' }}>
                      Published
                    </Typography>
                    <Typography gutterBottom sx={{ fontFamily: 'Poppins' }}>
                      April 20, 2024
                    </Typography>
                    <IconMenuCard
                      image
                      contents={[
                        {
                          id: 1,
                          imageSrc: '/images/user/soil.png',
                          title: 'Soil testing',
                          duration: '1 hour 20 mins',
                          published: 'April 20, 2024',
                          actions: [
                            {
                              label: 'Edit',
                              icon: <Edit className="text-blue-400 mr-2" size={20} />,
                              onClick: (row) => console.log('Editing details', row),
                              color: '#808080',
                            },
                            {
                              label: 'Delete',
                              icon: <CloseCircle className="text-red-600 mr-2" size={20} />,
                              onClick: (row) => console.log('Deleting plot', row),
                              color: '#808080',
                            },
                          ],
                        },
                        {
                          id: 2,
                          imageSrc: '/images/user/crop.png',
                          title: 'Guide to sustainable farming',
                          duration: '2 hours',
                          published: 'April 20, 2024',
                          actions: [
                            {
                              label: 'Edit',
                              icon: <Edit className="text-blue-400 mr-2" size={20} />,
                              onClick: (row) => console.log('Editing details', row),
                              color: '#808080',
                            },
                            {
                              label: 'Delete',
                              icon: <CloseCircle className="text-red-600 mr-2" size={20} />,
                              onClick: (row) => console.log('Deleting plot', row),
                              color: '#808080',
                            },
                          ],
                        },
                      ]}
                    />
                  </Stack>
                </TabPanel>
                <TabPanel value={value} index={1}>
                  <Stack sx={{ px: 2 }}>
                    <Typography variant="h5" sx={{ marginY: 3, fontFamily: 'Poppins', fontWeight: 'bold' }}>
                      Draft
                    </Typography>
                    <IconMenuCard
                      image
                      contents={[
                        {
                          id: 1,
                          imageSrc: '/images/user/soil.png',
                          title: 'Soil testing',
                          duration: '1 hour 20 mins',
                          published: 'April 20, 2024',
                          actions: [
                            {
                              label: 'Publish',
                              icon: <Play className="text-green-400 mr-2" size={20} />,
                              onClick: (row) => console.log('publishing details', row),
                              color: '#808080',
                            },
                            {
                              label: 'Edit',
                              icon: <Edit className="text-blue-400 mr-2" size={20} />,
                              onClick: (row) => console.log('Editing details', row),
                              color: '#808080',
                            },
                            {
                              label: 'Delete',
                              icon: <CloseCircle className="text-red-600 mr-2" size={20} />,
                              onClick: (row) => console.log('Deleting plot', row),
                              color: '#808080',
                            },
                          ],
                        },
                        {
                          id: 2,
                          imageSrc: '/images/user/crop.png',
                          title: 'Guide to sustainable farming',
                          duration: '2 hours',
                          published: 'April 20, 2024',
                          actions: [
                            {
                              label: 'Edit',
                              icon: <Edit className="text-blue-400 mr-2" size={20} />,
                              onClick: (row) => console.log('Editing details', row),
                              color: '#808080',
                            },
                            {
                              label: 'Delete',
                              icon: <CloseCircle className="text-red-600 mr-2" size={20} />,
                              onClick: () =>
                                UpdateStates(setMyStates, undefined, undefined, {
                                  snackbarOpen: true,
                                  snackbarMessage: 'Deleted Successfully!',
                                }),
                              color: '#808080',
                            },
                          ],
                        },
                      ]}
                    />
                  </Stack>
                </TabPanel>
              </Box>
            </MainCard>
          </>
        )}
      </div>

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
        // growingStage
        // verifyView
        // pendingView
        // back
        // farmerSuspend
      />

      <SnackbarTemplate
        open={myStates.snackbarOpen}
        autoHideDuration={3000}
        onClose={() =>
          UpdateStates(setMyStates, undefined, undefined, {
            snackbarOpen: false,
          })
        }
        severity="success"
        message={myStates.snackbarMessage}
      />
    </div>
  )
}

export default Training
