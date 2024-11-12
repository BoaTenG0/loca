import React, { useState } from 'react'
import { Box, Chip, Tab, Tabs } from '@mui/material'
import { MdEdit } from 'react-icons/md'
import Image from 'next/image'
import ButtonTemplate from '@/components/templates/ui/button/button'
import { FarmersStates } from '../../../../_logics/interface'

interface TabLabel {
  name: string
  count?: number
}

interface PlotTabsProps {
  value: number
  handleChange: (event: React.SyntheticEvent, newValue: number) => void
  labels: TabLabel[]
}

export const FarmersTabs: React.FC<PlotTabsProps> = ({ value, handleChange, labels }) => {
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

export const FarmerDrawerDetails: React.FC<{
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

export const FarmerDrawerEdit: React.FC<{
  editTypeProps: FarmersStates
  setNotificationOpenState: (value: boolean) => void
  setNoficationMessageState: (value: string) => void
}> = ({ editTypeProps, setNoficationMessageState, setNotificationOpenState }) => {
  const { editType } = editTypeProps

  return (
    <div>
      {editType === 'userInfo' && (
        <div className="space-y-4">
          {/* <form className="space-y-4"> */}
          <h2 className="text-lg font-medium text-logaTextGreen mb-9">User information</h2>

          <div className="grid grid-cols-1 gap-8 ">
            <div className="space-y-2">
              <label htmlFor="fullName" className="block mb-3 text-sm text-locaGreen">
                Full name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                defaultValue="Amoah Jones"
                className="w-full px-3 py-2  border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="country" className="block text-sm  mb-3 text-logaTextGreen">
                Country
              </label>
              <div className="relative">
                <select
                  id="country"
                  name="country"
                  defaultValue="ghana"
                  className="w-full px-3 py-2 bg-gray-100 rounded-md text-gray-900 appearance-none focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="ghana">🇬🇭 Ghana</option>
                  <option value="nigeria">🇳🇬 Nigeria</option>
                  <option value="kenya">🇰🇪 Kenya</option>
                  <option value="southAfrica">🇿🇦 South Africa</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="country" className="block text-sm  mb-3 text-logaTextGreen">
                Phone number
              </label>
              <div className="relative">
                <select
                  id="phone"
                  name="phone"
                  defaultValue="+233000000000"
                  className="w-full px-3 py-2 bg-gray-100 rounded-md text-gray-900 appearance-none focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="+233000000000">+233 000 000 000</option>
                  <option value="+233111111111">+233 111 111 111</option>
                  <option value="+233222222222">+233 222 222 222</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="country" className="block text-sm  mb-3 text-logaTextGreen">
                Plots
              </label>
              <input
                type="text"
                id="pets"
                name="pets"
                defaultValue="3"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
          </div>
        </div>
        // {/* </form> */}
      )}

      {editType === 'proof' && (
        <div className="p-4 bg-white">
          {/* <form className="space-y-4"> */}
          <div className="space-y-4">
            <h2 className="text-lg font-medium text-logaTextGreen mb-9">Proof of residence</h2>

            <div className="space-y-2">
              <label htmlFor="country" className="block text-sm  mb-3 text-logaTextGreen">
                Country
              </label>
              <div className="relative">
                <select
                  id="country"
                  name="country"
                  defaultValue="ghana"
                  className="w-full px-3 py-2 bg-gray-100 rounded-md text-gray-900 appearance-none focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="ghana">🇬🇭 Ghana</option>
                  <option value="nigeria">🇳🇬 Nigeria</option>
                  <option value="kenya">🇰🇪 Kenya</option>
                  <option value="southAfrica">🇿🇦 South Africa</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="country" className="block text-sm  my-9 text-logaTextGreen">
                Method of verification
              </label>

              <div className="my-10">
                <div className="w-full py-3  text-center bg-locaGreenLight rounded-md text-logaTextGreen">Passport</div>
                {[1, 2, 3].map(() => (
                  <div className="flex justify-between pt-10">
                    <div className="w-2/3">
                      <Image
                        src="/ghanaCard.png"
                        alt="Description of the image"
                        layout="responsive" // Makes the image responsive
                        width={100} // Aspect ratio width
                        height={100} // Aspect ratio height
                      />
                    </div>
                    <div className="flex">
                      <MdEdit className="text-xl text-locaGreen hover:text-gray-7" />
                      <span className="text-locaGreen text-sm pl-1"> Edit</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* </form> */}
        </div>
      )}
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
