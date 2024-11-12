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

export const ServiceTypeListTabs: React.FC<PlotTabsProps> = ({ value, handleChange, labels }) => {
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

export const ServiceTypeListDrawerDetails: React.FC<{
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

  const products = [
    {
      name: 'Rice bag',
      image: '/crop.png',
      stock: '700 units',
      price: 12.0,
      status: 'ACTIVE',
    },
    {
      name: 'Rice bag',
      image: '/placeholder.svg',
      stock: '700 units',
      price: 12.0,
      status: 'INACTIVE',
    },
  ]
  const tabLabels = [
    { name: 'Tab 1', count: 10, chipColor: '#e8f5f1' },
    { name: 'Tab 2', count: 5, chipColor: '#e8f5f1' },
  ]
  const ratingData = [
    { label: 'Excellent', value: 90 },
    { label: 'Good', value: 75 },
    { label: 'Average', value: 60 },
    { label: 'Poor', value: 40 },
  ]
  const reviews = [
    {
      name: 'Ada the farmer',
      image: 'https://via.placeholder.com/40', // Replace with actual image URL
      review: 'Purchase maize seedlings from him and he delivered it very quick..',
      time: '03:12 p.m',
    },
    {
      name: 'Jones Brown',
      image: 'https://via.placeholder.com/40', // Replace with actual image URL
      review: 'Purchase maize seedlings from him and he delivered it very quick..',
      time: '03:12 p.m',
    },
  ]
  return (
    <div>
      <div className="w-full mx-auto p-4 space-y-6">
        <div className="bg-white  overflow-hidden">
          <div className="py-4 flex items-center justify-between ">
            <h2 className="text-xl font-semibold text-gray-800">User information</h2>
            {detailsStates.modalView === 'edit' && (
              <div
                className="pl-2 mr-2 flex cursor-pointer hover:transform hover:scale-110 hover:text-locaGreen"
                onClick={() => {
                  //send prop to view form
                  onEditTypeChange('userInfo')
                }}
              >
                <MdEdit className="text-xl text-locaGreen hover:text-gray-7" />
                <span className="pl-1 text-xs mt-1">Edit</span>
              </div>
            )}
          </div>

          <div className="py-4 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-sm text-gray-500">Full name</div>
              <div className="text-sm font-medium flex justify-end">Amoah Jones</div>
              <div className="text-sm text-gray-500">Phone number</div>
              <div className="text-sm font-medium flex justify-end">+233 000 000 000</div>
              <div className="text-sm text-gray-500">Country</div>
              <div className="text-sm font-medium flex items-center gap-2 justify-end">
                <span className="text-lg">🇬🇭</span> Ghana
              </div>
              <div className="text-sm text-gray-500">Plots</div>
              <div className="text-sm font-medium flex justify-end">3</div>
            </div>
          </div>
          <div className="py-4 mt-5 flex items-center justify-between ">
            <h2 className="text-xl font-semibold text-gray-800">Proof of residence</h2>
            {detailsStates.modalView === 'edit' && (
              <div
                className="pl-2 mr-2 flex cursor-pointer hover:transform hover:scale-110 hover:text-locaGreen"
                onClick={() => {
                  //send prop to view form
                  onEditTypeChange('proof')
                }}
              >
                <MdEdit className="text-xl text-locaGreen hover:text-gray-7" />
                <span className="pl-1 text-xs mt-1">Edit</span>
              </div>
            )}
          </div>
          <div className="py-4 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-sm text-gray-500">Nationality</div>
              <div className="text-sm font-medium flex items-center gap-2 justify-end">
                <span className="text-lg">🇬🇭</span> Ghana
              </div>
              <div className="text-sm text-gray-500">Method of verification</div>
              <div className="text-sm font-medium flex justify-end">Passport</div>
              <div className="text-sm text-gray-500">Attachments</div>
              <div className="flex gap-2 justify-end"></div>
            </div>
          </div>
        </div>
        {detailsStates.modalView !== 'edit' && (
          <>
            <TabComponent
              value={detailsStates.value}
              handleChange={(event: React.SyntheticEvent, value: number) => UpdateStates(setDetailStates, 'value', value)}
              labels={tabLabels}
              tabIndicatorColor="green" // Custom color for the tab indicator
              tabStyles={{ fontWeight: 'bold' }} // Custom styles for tabs
            />
            {detailsStates.value === 0 ? (
              <div className="w-full max-w-3xl text-sm mx-auto">
                {products.map((product, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg mb-2 bg-white">
                    <div className="flex items-center gap-3">
                      <div className=" mr-2">
                        <Image src={product.image} alt={product.name} className="rounded-lg object-cover" width={20} height={20} />
                      </div>
                      <div>
                        <div className=" text-muted-foreground mb-1">Product name</div>
                        <div className="text-doveGray">{product.name}</div>
                      </div>
                    </div>
                    <div>
                      <div className=" text-muted-foreground mb-1">Stock</div>
                      <div className="text-doveGray">{product.stock}</div>
                    </div>
                    <div>
                      <div className=" text-muted-foreground mb-1">Price</div>
                      <div className="text-doveGray">${product.price.toFixed(2)}</div>
                    </div>

                    <div>
                      <div className="text-muted-foreground mb-1">Status</div>
                      <div
                        className={`px-4 rounded-md text-center ${product.status === 'ACTIVE' ? ' bg-green-600/40 text-locaGreen' : 'bg-red-200 text-red-70'}`}
                      >
                        {product.status}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div>
                <div className="flex ">
                  <div className="w-[35%]">
                    <div className=" mb-2">
                      <div className="text-green-400 text-xl mr-2">⭐</div>
                      <h3 className=" text-doveGray">Overall rating score</h3>
                    </div>
                    <div className="flex items-baseline">
                      <p className="text-lg font-bold text-doveGray">545</p>
                      <span className="text-sm text-doveGray ml-2">43 reviews</span>
                    </div>
                  </div>
                  <div className="w-[60%] space-y-3">
                    {ratingData.map((rating, index) => (
                      <div key={index} className="flex items-center mb-2">
                        <div className="flex-1 flex items-center">
                          <div className="h-2 w-full bg-gray-300 rounded">
                            <div className="h-2 bg-green-500 rounded" style={{ width: `${rating.value}%` }}></div>
                          </div>
                        </div>
                        <span className="ml-3 text-sm text-gray-700">{rating.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="py-4 mt-4">
                  <h2 className="font-semibold  text-doveGray mb-2">
                    Customer reviews <span className="text-green-600">(34)</span>
                  </h2>
                  {/* reviews */}
                  {reviews.map((review, index) => (
                    <div key={index} className="flex items-start text-sm mb-4">
                      <div className="">
                        <img src={review.image} alt={review.name} className="rounded-full object-cover mr-5 w-14 h-14" />
                      </div>
                      <div className="space-y-3">
                        <h3 className="font-semibold text-gray-800">{review.name}</h3>
                        <p className="text-gray-600">{review.review}</p>
                        <p className="text-sm text-locaGreen">{review.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {detailsStates.modalView === 'approval' && (
        <div className=" mt-20">
          <div className="flex justify-between">
            <ButtonTemplate color="success" isText text="Approve User" />
            <ButtonTemplate color="error" isText text="Reject User" />
          </div>
        </div>
      )}
    </div>
  )
}

export const ServiceTypeListDrawerEdit: React.FC<{
  editTypeProps: FarmersStates
  setNotificationOpenState: (value: boolean) => void
  setNoficationMessageState: (value: string) => void
}> = ({ editTypeProps, setNoficationMessageState, setNotificationOpenState }) => {
  const { editType, modalView } = editTypeProps

  return (
    <div>
      <div className="space-y-2">
        <label htmlFor="serviceType" className="block mb-3 text-sm text-locaGreen">
          Service type
        </label>
        <input
          type="text"
          id="serviceType"
          name="serviceType"
          defaultValue={modalView === 'add' ? '' : 'Service type'}
          className="w-full px-3 py-2  border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />
      </div>

      <div className=" mt-20">
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
