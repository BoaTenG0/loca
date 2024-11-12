import { Button } from '@mui/material'
import Image from 'next/image'
import React, { CSSProperties } from 'react'
import AnimateButton from './anime'

interface props<T = any> {
  isText?: boolean
  text?: string
  label?: string
  buttonID?: string
  classname?: string
  sx?: object
  styles?: CSSProperties
  textclassname?: string
  handleClick?: (e?: T) => void
  btnImage?: T
  btnImgClassname?: string
  type?: 'button' | 'reset' | 'submit'
  btnType?: 'text' | 'outlined' | 'contained'
  color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning'
  isDisabled?: boolean
  prefixIcon?: React.ReactNode
}

const ButtonTemplate = ({
  type = 'submit',
  btnType = 'contained',
  isText = false,
  text = 'Search',
  buttonID = 'default',
  sx,
  styles,
  textclassname,
  handleClick,
  btnImage,
  btnImgClassname,
  isDisabled = false,
  prefixIcon,
  label,
  classname,
  color,
}: props) => {
  return (
    <>
      <AnimateButton>
        <Button
          variant={btnType}
          disabled={isDisabled}
          color={color}
          id={buttonID}
          type={type}
          onClick={handleClick}
          sx={{
            ...sx,
            borderRadius: 3,
            // width: sx?.width || 150,
            height: 40,
          }}
          className={classname}
          style={{
            ...styles,
            // padding: 10,
            // borderRadius: '20px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textTransform: 'none',
            fontSize: 10,
            // backgroundColor: '#199675',
            fontFamily: 'Poppins',
            borderWidth: styles?.borderWidth,
            borderColor: styles?.borderColor,
            backgroundColor: styles?.backgroundColor || '#199675',
            width: styles?.width || 150,

            // width: 200,
            // color: '#fff',
          }}
          startIcon={prefixIcon}
          size="large"
        >
          {btnImage && <Image alt="" className={`${btnImgClassname} mr-2`} src={btnImage} />}
          {label}

          <div className="flex justify-center items-center space-x-1">{isText && <p className={`m-0 ${textclassname}`}>{text}</p>}</div>
        </Button>
      </AnimateButton>
    </>
  )
}

export default ButtonTemplate
