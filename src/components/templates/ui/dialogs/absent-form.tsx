import React from 'react'
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, IconButton } from '@mui/material'
import { CloseCircle } from 'iconsax-react'

interface Props {
  title?: string
  open: boolean
  okHandler?: (e?: any) => void
  cancelHandler?: (e?: any) => void
  disableCancel?: boolean
  width?: number | string
  height?: number | string
  okText?: string
  cancelText?: string
  customComponent?: React.ReactNode
  modalStyles?: React.CSSProperties
}

export const AbsentFormModal = ({
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
    <Dialog
      open={open}
      onClose={cancelHandler}
      maxWidth="md"
      fullWidth
      PaperProps={{
        style: {
          border: '1px solid rgb(96 165 250)',
          borderRadius: 9,
          zIndex: 100000,
          ...modalStyles,
        },
      }}
    >
      <DialogTitle id="alert-dialog-title" sx={{ position: 'relative' }}>
        {title}
        <IconButton
          onClick={cancelHandler}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: '#000',
          }}
        >
          <CloseCircle color="#808080" />
        </IconButton>
      </DialogTitle>
      <DialogContent style={{ height: height ?? 'auto' }}>{customComponent}</DialogContent>
      {/* <DialogActions>
        {!disableCancel && (
          <Button onClick={cancelHandler} color="secondary">
            {cancelText || 'Cancel'}
          </Button>
        )}
        <Button onClick={okHandler} color="primary" style={{ backgroundColor: '#0747a1' }}>
          {okText || 'OK'}
        </Button>
      </DialogActions> */}
    </Dialog>
  )
}
