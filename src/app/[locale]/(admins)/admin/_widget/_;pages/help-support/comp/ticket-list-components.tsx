import React, { useState } from 'react'
import { Box, Chip, LinearProgress, Stack, Tab, Tabs } from '@mui/material'
import { MdEdit } from 'react-icons/md'
import Image from 'next/image'
import ButtonTemplate from '@/components/templates/ui/button/button'
import TabComponent from '@/components/templates/ui/Tab/tab'
import { UpdateStates } from '@/lib/functions/update-states'
import { FarmersStates } from '../../../../_logics/interface'
import HeadingMain from '@/components/templates/typography/headingMain'
import { GoDotFill } from 'react-icons/go'
import { IoMdArrowBack } from 'react-icons/io'
import { LuDownload } from 'react-icons/lu'

interface TabLabel {
  name: string
  count?: number
}

interface PlotTabsProps {
  value: number
  handleChange: (event: React.SyntheticEvent, newValue: number) => void
  labels: TabLabel[]
}

export const TicketListTabs: React.FC<PlotTabsProps> = ({ value, handleChange, labels }) => {
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

// export const TicketListDetailsModal: React.FC<> = () => {
export const TicketListDetailsModal: React.FC<{ displayView: (value: number) => void }> = ({ displayView }) => {
  return (
    <div className="">
      <div className="flex space-x-3 py-4 font-bold text-xl">Ticket list Viw details</div>
      <div className="grid grid-cols-3 gap-4 text-left">
        {/* Right */}
        <div className="col-span-2 bg-white rounded-xl ">
          <div className="border-b-2 py-3 border-doveGray">
            {' '}
            <IoMdArrowBack className="ml-3" />
          </div>
          <div className=" bg-white rounded-xl px-5 py-5 ">
            <div className="flex justify-between ">
              <div className="">
                <span className="text-sm text-locaGreen">#23232</span>
                <HeadingMain>Payment Problem</HeadingMain>
              </div>
              <div className=" flex ">
                <div className="flex text-sm text-red-500 mt-1">
                  <GoDotFill className="mt-1" /> High
                </div>
                <span className="ml-2 ">
                  <span className="text-xs rounded-xl bg-locaGreenLight text-locaGreen px-2">OPEN</span>
                </span>
              </div>
            </div>

            {/*  */}
            <div className=" my-4 py-6 text-sm">
              <div className="flex items-start mb-4">
                <div className="items-center flex justify-center">
                  <span className="bg-purple-500 text-white font-bold px-5 py-4 rounded-full">D</span>
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold">Daniel</h3>
                  <p className="text-sm text-gray-500">April 22, 2024 at 7:45 am</p>
                  <div className="my-4 ">
                    <p className="text-gray-700">
                      Hi, I tried to place an order for fertilizers, but my payment didn’t go through, and I’m not sure what went wrong.
                      Could you help me finalize the payment?
                    </p>
                    <p className="mt-2 text-gray-700 font-medium">Here is the order number FD07062010</p>
                  </div>
                  <div className="text-gray-700">
                    Thanks,
                    <br />
                    Daniel Weins
                  </div>
                  <div className="mt-4">
                    <p className="text-sm font-medium py-3 text-locaGreen">2 Attachments</p>
                    <div className="flex gap-2 mt-2">
                      <div className="flex px-4  py-2 rounded-2xl items-center bg-locaGreenLight border-2 border-locaGreen">
                        <Image src="/image-13.png" alt="Farm attachment" width={80} height={80} />
                        <div className="px-2 text-xs mx-3">
                          Farm.png
                          <br />
                          34kb
                        </div>
                        <div className="">
                          <LuDownload />
                        </div>
                      </div>
                      <div className="flex px-4 py-2 rounded-2xl items-center bg-locaGreenLight border-2 border-locaGreen">
                        <Image src="/image-13.png" alt="Farm attachment" width={80} height={80} />
                        <div className="px-2 text-xs mx-3">
                          Farm.png
                          <br />
                          34kb
                        </div>
                        <div className="">
                          <LuDownload />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*  */}
            <div className=" text-center">
              <span className="px-4 py-2 border-doveGray rounded-lg bg-slate-200 text-doveGray">Conversations</span>
            </div>
            <div className="my-3 mt-6  border-gray-4">
              <div className="flex border-b-2 items-start mb-4">
                <div className="items-center flex justify-center">
                  <span className="bg-blue-500 text-white font-bold px-5 py-3 rounded-full">S</span>
                </div>
                <div className="ml-4 text-sm">
                  <h3 className="font-semibold">
                    Support - <span className="text-locaGreen">Brown carl</span>
                  </h3>
                  <div className="my-4 txt-xs">
                    <p className="text-gray-700">
                      Hi, I tried to place an order for fertilizers, but my payment didn’t go through, and I’m not sure what went wrong.
                      Could you help me finalize the payment?
                    </p>
                    <p className="mt-2 text-locaGreen italic">10:00 am</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="my-3 mt-6 ">
              <div className="flex items-start mb-4">
                <div className="items-center flex justify-center">
                  <span className="bg-purple-500 text-white font-bold px-5 py-3 rounded-full">D</span>
                </div>
                <div className="ml-4 text-sm">
                  <h3 className="font-semibold">Daniel</h3>
                  <div className="my-4 txt-xs">
                    <p className="text-gray-700">I am using mobile money</p>
                    <p className="mt-2 text-locaGreen italic">10:00 am</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* button */}
          <div className="flex justify-between py-4  px-5">
            <div className="mt-2">
              <span onClick={() => displayView(1)}>Cancel</span>
            </div>
            <div className="flex space-x-3">
              <div className="rounded-xl border-2  px-4 py-2">
                <span
                  onClick={() => {
                    displayView(1)
                  }}
                >
                  Reply
                </span>
              </div>
              <ButtonTemplate
                handleClick={() => {
                  displayView(1)
                }}
                color="success"
                classname=""
                isText
                text="Update status"
              />
            </div>
          </div>
        </div>

        {/*  left */}
        <div className="col-1 space-y-4 ">
          <div className=" bg-white rounded-xl">
            <div className="text-center text-doveGray py-2 border-b-2 border-gray-4">Basic details</div>
            <div className="p-4 text-sm">
              <span className="font-semibold ">User information</span>
              <div className="">
                <div className="flex justify-between mt-6 mb-3">
                  <div className="col-1">Email</div>
                  <div className="col-1">Helloe@Mmail.com</div>
                </div>
                <div className="flex justify-between mb-3">
                  <div className="col-1">Phone number</div>
                  <div className="col-1">+23433333333</div>
                </div>
              </div>
              <div className="font-semibold mt-6 mb-4 ">Assign agent</div>
              <div className="flex justify-between mb-3">
                <div className="col-1">Emmanuel Harris</div>
                <ButtonTemplate color="success" classname="h-2" isText text="Update agent" />
              </div>
            </div>
          </div>
          {/* down */}
          <div className="my-5 text-sm bg-white rounded-xl">
            <div className="text-center text-doveGray py-2 border-b-2 border-gray-4">Previous ticket</div>
            <div className="p-4">
              <div className="flex justify-between">
                <div className="text-locaGreen">April 20, 2002 at 5:22 a.m</div>
                <div className="">
                  <span className="rounded-xl text-xs bg-slate-200 text-doveGray px-4 py-1">CLOSED</span>
                </div>
                <div className=""></div>
              </div>
              <p className="text-bold my-2">Payment problem</p>
              <div className="text-xs text-gray-4">The fertilizer I ordered was delivered to the farm</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
