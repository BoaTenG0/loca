import { DatabaseOutlined } from '@ant-design/icons'
import dayjs from 'dayjs'
import React from 'react'
// import { MdDateRange } from "react-icons/md";

interface CompTempProps {
  modalTitle?: string
  classname?: React.CSSProperties | string
  type?: 'title' | 'text'
  text?: string | React.ReactNode
}

export const ModalHeading = ({ modalTitle, classname }: CompTempProps) => {
  return <p className={`${classname} font-bold text-lg`}>{modalTitle}</p>
}

export const CurrentDate = ({ classname }: CompTempProps) => {
  return (
    <p className="text-white text-lg leading-normal flex justify-end  ">
      {' '}
      {/* <MdDateRange size={25} /> {dayjs().format("dddd, DD MMMM YYYY")} */}
    </p>
  )
}

export const ThemedText = ({ type = 'text', classname, text }: CompTempProps) => {
  return <>{type == 'text' ? <p className={`${classname}`}>{text}</p> : <h1 className={`${classname} font-medium text-xl`}>{text}</h1>}</>
}
