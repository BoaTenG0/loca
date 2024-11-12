import React, { useState } from 'react'
import { Drawer, Typography, Divider, Button } from '@mui/material'
import { ArrowLeft, CloseCircle } from 'iconsax-react'
import AlertModalNew from './alert-modal-new'

interface DrawerTemplateProps<T = any> {
  title: T
  onClose?: T
  back?: boolean
  open: boolean
  verifyView?: boolean
  growingStage?: boolean
  farmerSuspend?: boolean
  customComponent: React.ReactNode
  customComponentGrowingStage?: React.ReactNode
  size: string | number
}

const DrawerTemplateNew: React.FC<DrawerTemplateProps> = ({
  title,
  onClose,
  open,
  customComponent,
  size,
  back,
  verifyView,
  growingStage,
  customComponentGrowingStage,
  farmerSuspend,
}) => {
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
        anchor="right"
        open={open}
        onClose={onClose}
        sx={{
          width: size,
          // flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: size,
            boxSizing: 'border-box',
          },
        }}
      >
        <div style={{ padding: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h6" style={{ color: '#808080' }}>
              {title}
            </Typography>
            <Button onClick={onClose}>
              <CloseCircle style={{ fontSize: '18px', color: '#808080' }} />
            </Button>
          </div>
          <Divider style={{ margin: '8px 0' }} />

          {customComponent}
          {growingStage && customComponentGrowingStage}

          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '16px' }}>
            {back && (
              <Button variant="text" onClick={onClose} startIcon={<ArrowLeft />}>
                Back
              </Button>
            )}
            {back && (
              <Button variant="contained" color="primary" onClick={() => handleOpenModal('success')}>
                Update Details
              </Button>
            )}
          </div>

          {verifyView && (
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '16px' }}>
              <Button variant="contained" color="primary" onClick={() => handleOpenModal('success')}>
                Approve Plot
              </Button>
              <Button variant="contained" color="secondary" onClick={() => handleOpenModal('danger')}>
                Delete Plot
              </Button>
            </div>
          )}

          {growingStage && (
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '16px' }}>
              <Button variant="contained" color="primary" onClick={() => handleOpenModal('success')}>
                Edit Plot Details
              </Button>
              <div style={{ display: 'flex', gap: '8px' }}>
                <Button variant="contained" color="primary" onClick={() => handleOpenModal('success')}>
                  Deactivate Plot
                </Button>
                <Button variant="contained" color="secondary" onClick={() => handleOpenModal('danger')}>
                  Delete Plot
                </Button>
              </div>
            </div>
          )}

          {farmerSuspend && (
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '16px' }}>
              <Button variant="contained" color="primary" onClick={() => handleOpenModal('success')}>
                Edit User Details
              </Button>
              <div style={{ display: 'flex', gap: '8px' }}>
                <Button variant="outlined" color="error" onClick={() => handleOpenModal('success')}>
                  Suspend User
                </Button>
                <Button variant="contained" color="secondary" onClick={() => handleOpenModal('danger')}>
                  Delete User Account
                </Button>
              </div>
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

export default DrawerTemplateNew
