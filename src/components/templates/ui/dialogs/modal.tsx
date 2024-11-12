import { Modal } from 'antd'
import React from 'react'

interface Props<T = any> {
  title?: string | React.ReactNode
  open: boolean
  okHandler: (e?: T) => void
  cancelHandler: (e?: T) => void
  disableCancel?: boolean
  width?: number | string
  height?: number | string
  okText?: string
  cancelText?: string
  customComponent: React.ReactNode
  modalStyles?: T
}

const ModalTemplate = ({
  customComponent,
  okHandler,
  open,
  cancelHandler,
  cancelText,
  disableCancel,
  okText,
  title,
  width,
  height,
  modalStyles,
}: Props) => {
  return (
    <div>
      <Modal
        title={title}
        open={open}
        onOk={okHandler}
        okButtonProps={{ style: { backgroundColor: '#0747a1' } }}
        cancelButtonProps={disableCancel ? { style: { display: 'none' } } : {}}
        maskClosable={true}
        centered={true}
        width={width ?? 380}
        height={height}
        styles={{ ...modalStyles }}
        className="my-5"
        onCancel={cancelHandler}
        okText={okText}
        style={{
          border: '1px solid rgb(96 165 250)',
          borderRadius: 9,
          zIndex: 100000,
        }}
        transitionName=""
        footer={[]}
        cancelText={cancelText}
      >
        {customComponent}
      </Modal>
    </div>
  )
}

export default ModalTemplate
