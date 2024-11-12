'use client'
import MainCard from '@/components/templates/ui/card/main-card'
import { a11yProps, TabPanel } from '@/components/templates/ui/TabPanel/tab-panel'
import { UpdateStates } from '@/lib/functions/update-states'

import { Box, Chip, Menu, Stack, Typography } from '@mui/material'
import { AddCircle, CloseCircle, Edit, Eye, More, Play, SearchNormal, Location, Video } from 'iconsax-react'
import React, { MouseEventHandler, useState } from 'react'
import { useTheme } from '@mui/material/styles'
import PlotTabs from '@/components/generals/plot-tabs/page'
import { tableData, tableData1, tableData2 } from '@/hooks/dummy-data/table-data'
import DrawerTemplateNew from '@/components/templates/ui/dialogs/drawer-new'
import HeadingMain from '@/components/templates/typography/headingMain'
import HeadingSub from '@/components/templates/typography/headingSub'
import { MyStates, RowData } from '../../../_logics/interface'
import { closeDetailsModal, openDetailsModal, openEditDetailsModal } from '../../../_logics/functionsX'
import ButtonTemplate from '@/components/templates/ui/button/button'
import IconMenuCard from '@/components/templates/ui/card/icon-menu-card'
import InputsTemplateNew from '@/components/templates/ui/input/input'
import MenuPopUp from '@/components/templates/ui/menu-pop-up/menu'
import CreateWorkShop from '@/components/generals/view-details/edit-details/create-workshop'
import SnackbarTemplate from '@/components/templates/ui/dialogs/snackbar'

const Workshop = () => {
  const theme = useTheme()
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
  const { modalView, modalOpen, modalTitle, value, selectedRow } = myStates

  const handleChange = (event: any, newValue: number) => {
    setMyStates((prevState) => ({
      ...prevState,
      value: newValue,
    }))
  }

  const tabLabels = [{ name: 'Upcoming' }, { name: 'Completed' }]

  const avatarGroup = [
    { alt: 'Remy Sharp', src: '/images/user/user-01.png' },
    { alt: 'Travis Howard', src: '/images/user/user-02.png' },
    { alt: 'Cindy Baker', src: '/images/user/user-03.png' },
    { alt: 'Agnes Walker', src: '/images/user/user-04.png' },
    { alt: 'Trevor Henderson', src: '/images/user/user-05.png' },
    { alt: 'Trevor Henderson', src: '/images/user/user-05.png' },
    { alt: 'Trevor Henderson', src: '/images/user/user-05.png' },
  ]

  const menuItems = [
    {
      label: 'Via online(zoom, google meet)',
      icon: <Video size={20} />,
      onClick: () => openDetailsModal(setMyStates, 'Create Online Workshop', 'online'),
    },
    {
      label: 'In-person workshop',
      icon: <Location size={20} />,
      onClick: () => openDetailsModal(setMyStates, 'Create in Person', 'location'),
    },
  ]

  return (
    <div>
      <div className="h-full text-left pb-5">
        <div className="w-full flex justify-between items-center">
          <div>
            <HeadingMain>Workshop</HeadingMain>
            <HeadingSub>View and manage workshop.</HeadingSub>
          </div>
          <MenuPopUp
            menuItems={menuItems}
            tooltipButtonContent={
              <ButtonTemplate
                styles={{
                  backgroundColor: '#199675',
                  color: 'white',
                  fontSize: 12,
                  width: 200,
                }}
                label="Create Workshop"
                prefixIcon={<AddCircle size={15} />}
              />
            }
            iconColor={{ color: '#199675' }}
          />
        </div>
        <MainCard
          sx={{ marginTop: 5, overflow: 'hidden' }}
          title={<PlotTabs value={value} handleChange={handleChange} labels={tabLabels} />}
          codeString
        >
          <Box sx={{ width: '100%' }}>
            <TabPanel value={value} index={0}>
              <Stack sx={{ px: 2 }}>
                <div className="flex space-x-5">
                  <InputsTemplateNew
                    classname="rounded-lg"
                    afterIcon={<SearchNormal size={20} />}
                    placeholder="Find location"
                    height={35}
                  />
                  <InputsTemplateNew classname="rounded-lg" placeholder="Find location" inputType="date" height={35} />
                </div>
                <Typography variant="h5" sx={{ marginTop: 3, fontFamily: 'Poppins', fontWeight: 'bold', color: '#0E5340' }}>
                  Upcoming
                </Typography>
                <Typography sx={{ marginY: 3, fontFamily: 'Poppins' }}>Tomorrow</Typography>
                <IconMenuCard
                  avatarGroup={avatarGroup}
                  upcoming
                  contents={[
                    {
                      id: 1,
                      //   imageSrc: '/images/user/soil.png',
                      title: 'Good irrigation practices',
                      header: 'online meeting',
                      duration: '10:00 am - 4:00 pm',
                      location: 'Dansonman estate',
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
                    {
                      id: 2,
                      //   imageSrc: '/images/user/crop.png',
                      title: 'Good irrigation practices',
                      header: 'online meeting',
                      duration: '10:00 am - 4:00 pm',
                      location: 'Dansonman estate',
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
                          onClick: () =>
                            UpdateStates(setMyStates, undefined, undefined, {
                              snackbarOpen: true,
                              snackbarMessage: 'Publishing Successfully!',
                            }),
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
                          onClick: () =>
                            UpdateStates(setMyStates, undefined, undefined, {
                              snackbarOpen: true,
                              snackbarMessage: 'Deleted Successfully!',
                            }),
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
      </div>

      <DrawerTemplateNew
        open={modalOpen}
        title={modalTitle}
        onClose={() => closeDetailsModal(setMyStates)}
        customComponent={modalView === 'online' ? <CreateWorkShop workshop /> : modalView === 'location' ? <CreateWorkShop /> : null}
        size={520}
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

export default Workshop
