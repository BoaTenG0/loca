'use client'

import React, { useEffect, useState } from 'react'
import * as echarts from 'echarts/core'
import HeadingMain from '@/components/templates/typography/headingMain'
import { GridComponent, GridComponentOption, TitleComponent, TooltipComponent, LegendComponent } from 'echarts/components'
import { PieChart, BarChart, BarSeriesOption } from 'echarts/charts'
import { LabelLayout } from 'echarts/features'
import { CanvasRenderer } from 'echarts/renderers'
import { AdminUserStates, ManualLaborUserStates, MyStates } from '../../../_logics/interface'
import MainCard from '@/components/templates/ui/card/main-card'
import { Box, Stack } from '@mui/material'
import { TabPanel } from '@/components/templates/ui/TabPanel/tab-panel'
import GenericTable from '@/components/templates/ui/table/kaluu'
import ButtonTemplate from '@/components/templates/ui/button/button'
import { landingPageColumns } from '../../../_logics/data/data-grid-column'

echarts.use([
  GridComponent,
  BarChart,
  CanvasRenderer,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  PieChart,
  CanvasRenderer,
  LabelLayout,
])

type EChartsOption = echarts.ComposeOption<GridComponentOption | BarSeriesOption>

const dummy = [
  {
    serviceRequested: 'Service 1',
    totalRequest: 200,
    completed: 100,
    pending: 100,
  },
  {
    serviceRequested: 'Service 2',
    totalRequest: 200,
    completed: 100,
    pending: 100,
  },
]

const items = [
  {
    id: 0,
    title: 'Total active users',
    value: 2345,
    icon: (
      <svg className="w-5 h-5 text-logaTextGreen" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
  {
    id: 1,
    title: 'Completed service requests',
    value: 2345,
    icon: (
      <svg className="w-5 h-5 text-logaTextGreen" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
        />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Total active products',
    value: 2345,
    icon: (
      <svg className="w-5 h-5 text-logaTextGreen" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
        />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Pending loan application',
    value: 25,
    icon: (
      <svg className="w-5 h-5 text-logaTextGreen" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
  },
]
const Landing = () => {
  const [myStates, setMyStates] = useState<AdminUserStates>({
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

  useEffect(() => {
    const chartDom = document.getElementById('bar')!
    const myChart = echarts.init(chartDom)

    const option: EChartsOption = {
      xAxis: {
        type: 'category',
        data: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
        axisLine: {
          show: false, // Hide the axis line
        },
        axisTick: {
          show: false, // Hide the ticks
        },
        axisLabel: {
          color: '#9CA3AF', // Light gray color for labels
        },
      },
      yAxis: {
        type: 'value',
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          lineStyle: {
            color: '#E5E7EB', // Light gray grid lines
          },
        },
        axisLabel: {
          color: '#9CA3AF',
        },
      },
      grid: {
        top: 30,
        left: '3%',
        right: '3%',
        bottom: 50,
        containLabel: true,
      },
      series: [
        {
          data: [100, 300, 200, 50, 0, 400, 100, 0, 50, 0, 300, 200], // Replace with your data
          type: 'bar',
          itemStyle: {
            color: '#199675', // Custom green color for bars
          },
          barWidth: '40%', // Adjust bar width
          showBackground: true,
          backgroundStyle: {
            color: '#E5E7EB', // Light gray for background bars
          },
        },
      ],
    }

    myChart.setOption(option)

    return () => {
      myChart.dispose()
    }
  }, [])

  useEffect(() => {
    const myPieChartDom = document.getElementById('myPieID')!
    const myPieChart = echarts.init(myPieChartDom)

    const pieOption = {
      title: {
        text: 'Input categories',
        left: 'left',
      },
      tooltip: {
        trigger: 'item',
      },
      color: ['#A0E4CB', '#2B8479', '#83C49D', '#397D68'],
      legend: {
        orient: 'horizontal',
        left: 'left',
        top: 30,
        bottom: 30,
        itemHeight: 10,
        itemWidth: 10,
        itemGap: 20,
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: '58%',
          data: [
            { value: 25, name: 'Fertilizer' },
            { value: 20, name: 'Seedlings' },
            { value: 40, name: 'Fruits' },
            { value: 15, name: 'vetables' },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
        },
      ],
    }

    myPieChart.setOption(pieOption)

    // Cleanup function to dispose of the chart on unmount
    return () => {
      myPieChart.dispose()
    }
  }, [])

  return (
    <div className=" text-left">
      {/* <div className="bg-white rounded-lg"> */}
      <div className="py-4">
        <HeadingMain>Overview</HeadingMain>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-4">
        {items.map(({ id, title, value, icon }) => (
          <>
            <div className="bg-white rounded-lg shadow p-6">
              <div className=" h-[70%]">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-sm font-medium text-gray-500">{title}</h3>
                  <div className="border-2 rounded-md">{icon} </div>
                </div>
              </div>
              <div className="h-[30%]">
                <div className="flex justify-between">
                  <p className="text-2xl font-bold text-gray-700">{value}</p>
                  <p className="text-xs mt-2 font-medium text-locaGreen">{`View ->`} </p>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
      <div className="w-full mt-4">
        <div className="flex items-center justify-between space-x-5">
          <div className="bg-white rounded-lg shadow p-4 w-[50%]">
            <div className="flex justify-between">
              <div className="">
                <div className="text-doveGray text-sm font-light">FARMER ENROLLMENT OVER TIME</div>
                <p className="font-bold text-[0.65rem] ">New users</p>
              </div>
              {/* <div className="flex space-x-2">
                <ButtonTemplate sx={{ backgroundColor:"none"  }}  isText text="Quarter" />
                <ButtonTemplate color='inherit' isText text="Semester" />
                <ButtonTemplate color='success' isText text="Annual" />
              </div> */}
            </div>
            <div className="">
              <div id="bar" style={{ width: '100%', height: '400px' }} />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-4 w-[50%]">
            <div id="myPieID" style={{ width: '400px', height: '435px' }} />
          </div>
        </div>
      </div>
      <div className="mt-8">
        <div className="bg-white rounded-3xl pb-5">
          <Stack>
            <div className="tetx-lg font-semibold mb-2 pl-5 pt-3">Service requests report</div>
            <GenericTable columns={landingPageColumns(setMyStates, myStates)} data={dummy} />
          </Stack>
        </div>
      </div>
    </div>
    // </div>
  )
}

export default Landing
