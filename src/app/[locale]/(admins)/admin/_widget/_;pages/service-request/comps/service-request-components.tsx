import React, { useState } from 'react'
import { Box, Chip, LinearProgress, Stack, Tab, Tabs } from '@mui/material'
import { MdEdit } from 'react-icons/md'
import { FarmersStates } from '../../../../_logics/interface'
import Image from 'next/image'
import ButtonTemplate from '@/components/templates/ui/button/button'
import TabComponent from '@/components/templates/ui/Tab/tab'
import { UpdateStates } from '@/lib/functions/update-states'

interface TabLabel {
  name: string
  count?: number
}

interface PlotTabsProps {
  value: number
  handleChange: (event: React.SyntheticEvent, newValue: number) => void
  labels: TabLabel[]
}

export const ServiceRequestTabs: React.FC<PlotTabsProps> = ({ value, handleChange, labels }) => {
  return (
    <Box sx={{ width: '100%', borderBottom: 1, borderColor: 'divider', zIndex: 1 }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="plot tabs"
        sx={{
          px: 3,
          '.MuiTabs-indicator': {
            backgroundColor: '#199675',
          },
          zIndex: 1,
        }}
      >
        {labels.map((label, index) => (
          <Tab
            key={index}
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                {label.name}
                {label.count && <Chip label={label.count} size="small" sx={{ marginLeft: 1, backgroundColor: '#e8f5f1' }} />}
              </Box>
            }
            sx={{
              textTransform: 'none',
              fontFamily: 'Poppins',
              '&.Mui-selected': { color: '#199675' },
            }}
          />
        ))}
      </Tabs>
    </Box>
  )
}

export const ServiceRequestDrawerDetails: React.FC<{
  detailProps: FarmersStates
  onEditTypeChange: (editType: string) => void
}> = ({ detailProps, onEditTypeChange }) => {
  // const [detailsStates, setDetailStates] = useState({
  const [detailsStates, setDetailStates] = useState({
    modalView: detailProps.modalView,
    modalOpen: false,
    modalTitle: detailProps.modalTitle,
    value: 0,
    editType: '',
    selectedRow: null,
    anchorEl: null,
    alertOpen: false,
    message: '',
  })

  return (
    <div>
      <div className="max-w-2xl mx-auto py-6 text-xs">
        <div className="space-y-8">
          {/* Header */}
          <div className="flex justify-between ">
            <div className="">
              <div className="text-sm text-gray-500">Date of request</div>
              <div className="font-medium">April 7, 2024</div>
            </div>
            <div className="">
              <div className="px-3 py-1 mt-3 rounded-full items-center bg-purple-50 text-purple-700 text-sm font-medium">In progress</div>
            </div>
          </div>

          {/* Farmer Information */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Farmer Information</h2>
            <div className="flex justify-between">
              <div className="text-doveGray">Request ID</div>
              <div className="">#12345</div>
            </div>
            <div className="flex justify-between">
              <div className="text-doveGray">Service</div>
              <div className="">Soil testing</div>
            </div>
            <div className="flex justify-between">
              <div className="text-doveGray">Price</div>
              <div className="">GHc 500</div>
            </div>
            <div className="flex justify-between">
              <div className="text-doveGray">Payment</div>
              <div className="">Cash</div>
            </div>
            <div className="flex justify-between">
              <div className="text-doveGray">Note</div>
              <div className="">Place ensure the testing covers all areas</div>
            </div>
          </div>

          {/* Service Information */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Service information</h2>
            <div className="flex justify-between">
              <div className="text-doveGray">Full name</div>
              <div className="">Amoah jones</div>
            </div>
            <div className="flex justify-between">
              <div className="text-doveGray">Phone number</div>
              <div className="">+233 20 000 0000</div>
            </div>
            <div className="flex justify-between">
              <div className="text-doveGray">Plot location</div>
              <div className="">Madina estates</div>
            </div>
          </div>

          {/* Service Provider */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Service provider</h2>
            <div className="flex justify-between">
              <div className="">
                Brown Carl <span className="text-locaGreen itallic">-Assigned </span>
              </div>
              <div className="text-[0.55rem]">
                <span>Contact</span>
                <span className="pl-3">Remove</span>
              </div>
            </div>
          </div>

          <div className="relative bottom-0">
            <div className="flex  justify-between">
              <ButtonTemplate isText text="Mark as completed" color="success" />
              <ButtonTemplate isText text="Cancel request" color="error" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const ServiceRequestDrawerEdit: React.FC<{
  editTypeProps: FarmersStates
  setNotificationOpenState: (value: boolean) => void
  setNoficationMessageState: (value: string) => void
}> = ({ editTypeProps, setNoficationMessageState, setNotificationOpenState }) => {
  const { editType, modalView } = editTypeProps

  return (
    <div>
      <div className="space-y-4">
        {/* <form className="space-y-4"> */}
        <h2 className="text-lg text-doveGray mb-9">User information</h2>

        <div className="grid grid-cols-1 gap-8 ">
          <div className="my-2 flex justify-between ">
            <div className="">
              <label htmlFor="fullName" className="block mb-3 text-sm text-locaGreen">
                First name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                defaultValue={modalView === 'edit' ? 'Jones' : ''}
                className="px-2 w-[90%] py-2  border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <div className="">
              <label htmlFor="fullName" className="block mb-3 text-sm text-locaGreen">
                Last name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                defaultValue={modalView === 'edit' ? 'Amoah ' : ''}
                className=" px-3 py-2  w-[90%] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block mb-3 text-sm text-locaGreen">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              defaultValue={modalView === 'edit' ? 'Amoah@mail.com ' : ''}
              className=" px-3 py-2  w-[90%] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="country" className="block text-sm  mb-3 text-logaTextGreen">
              Phone number
            </label>
            <input
              type="number"
              id="phone"
              name="phone"
              // defaultValue={modalView === 'edit' ? 'Amoah@mail.com ' : ''}
              className=" px-3 py-2  w-[90%] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
        </div>
      </div>

      <div className=" mt-20 bottom-0">
        <div className="flex justify-between">
          <ButtonTemplate
            isText
            handleClick={() => {
              setNotificationOpenState(false)
              setNoficationMessageState('')
            }}
            text="<- Back"
          />
          <ButtonTemplate
            color="success"
            handleClick={() => {
              setNoficationMessageState('Details updated successfully')
              setNotificationOpenState(true)
            }}
            isText
            text="Update Details"
          />
        </div>
      </div>
    </div>
  )
}
