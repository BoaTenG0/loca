import { Drawer, Typography, Space, Divider } from 'antd'
import React, { useState } from 'react'
import { CloseCircle } from 'iconsax-react'
import { Button } from '@mui/material'
import AlertModalNew from './alert-modal-new'

interface DrawerTemplateProps<T = any> {
  title: T
  onClose?: () => void
  back?: () => void
  open: boolean
  view?: boolean
  customComponent: React.ReactNode
  size: string | number
}

const DrawerTemplate: React.FC<DrawerTemplateProps> = ({ title, onClose, open, customComponent, size, back, view }) => {
  const [modalState, setModalState] = useState<'success' | 'danger' | null>(null)

  const handleOpenModal = (type: 'success' | 'danger') => {
    setModalState(type)
  }

  const handleCloseModal = () => {
    setModalState(null)
  }

  return (
    <>
      <Drawer
        width={size}
        onClose={onClose}
        open={open}
        closable={false}
        // headerStyle={{ padding: '8px 16px', borderBottom: 'none' }}
        // bodyStyle={{ paddingTop: 0 }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography.Text style={{ fontSize: '16px', fontWeight: 'bold', color: '#808080' }}>{title}</Typography.Text>

          <Button
            // type="text"
            onClick={onClose}
            startIcon={<CloseCircle style={{ fontSize: '18px', color: '#808080' }} />}
          />
        </div>
        <Divider className="" />

        {customComponent}
        <div className="w-full absolute bottom-0 pb-3 pr-10 flex justify-end items-center">
          {view && (
            <div className="flex space-x-2">
              <Button
                variant="contained"
                size="large"
                sx={{ borderRadius: 3, backgroundColor: '#199675', fontFamily: 'Poppins', textTransform: 'none' }}
                onClick={() => handleOpenModal('success')}
              >
                Approve Plot
              </Button>
              <Button
                variant="contained"
                size="large"
                sx={{ borderRadius: 3, backgroundColor: '#FA7D75', fontFamily: 'Poppins', textTransform: 'none' }}
                onClick={() => handleOpenModal('danger')}
              >
                Delete Plot
              </Button>
            </div>
          )}
        </div>
      </Drawer>
      <AlertModalNew
        isIcon
        modalStyle="flex flex-col justify-center items-center"
        open={modalState === 'success'}
        icon="warning"
        centered
        showOkBtn
        showCancelBtn
        okText="Yes, activate Plot"
        cancelText="No, don't activate"
        message={'Are you sure you want to activate this plot?'}
        onCancel={handleCloseModal}
        onOk={handleCloseModal}
      />

      <AlertModalNew
        isIcon
        modalStyle="flex flex-col justify-center items-center"
        open={modalState === 'danger'}
        icon="danger"
        centered
        showOkBtn
        showCancelBtn
        okText="Yes, delete Plot"
        cancelText="No, don't delete"
        message={'Are you sure you want to delete this plot?'}
        onCancel={handleCloseModal}
        onOk={handleCloseModal}
      />
    </>
  )
}

export default DrawerTemplate
