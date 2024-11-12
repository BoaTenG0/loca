import { Dialog, DialogTitle, DialogContent, DialogActions, IconButton, Button } from '@mui/material'
import Image from 'next/image'
import warning from '../../../../assets/images/warning.png'
import question from '../../../../assets/images/circle.png'
import success from '../../../../assets/images/check.png'
import danger from '../../../../assets/images/danger.png'
import React from 'react'
import { CloseCircle } from 'iconsax-react'

interface ModalProps<T = any> {
  width?: string | number
  title?: string
  open: boolean
  onOk?: () => void
  confirmLoading?: boolean
  onCancel?: () => void
  message?: React.ReactNode
  centered?: boolean
  okText?: string
  cancelText?: string
  isIcon?: boolean
  icon_width?: T
  icon?: '' | 'warning' | 'success' | 'question' | 'danger'
  modalStyle?: string
  iconStyle?: string
  messageStyle?: string
  showCancelBtn?: boolean
  showOkBtn?: boolean
}

const AlertModalNew = ({
  title,
  open,
  onCancel,
  onOk,
  confirmLoading,
  message,
  centered,
  okText,
  cancelText,
  isIcon = true,
  icon_width,
  icon = 'warning',
  modalStyle,
  iconStyle,
  messageStyle,
  showCancelBtn,
  showOkBtn,
  width,
}: ModalProps) => {
  return (
    <Dialog
      open={open}
      onClose={onCancel}
      maxWidth="sm"
      fullWidth
      PaperProps={{ style: { width: width ?? 420 } }}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      {/* {title && <DialogTitle id="alert-dialog-title">{title}</DialogTitle>}
       */}
      <DialogTitle id="alert-dialog-title" sx={{ position: 'relative' }}>
        {title}
        <IconButton
          onClick={onCancel}
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
      <DialogContent className={modalStyle ?? 'flex flex-col justify-center items-center'}>
        {isIcon && (
          <span className={iconStyle ?? 'pr-3 py-2'}>
            <Image
              src={icon === 'question' ? question : icon === 'warning' ? warning : icon === 'danger' ? danger : success}
              width={icon_width ?? 50}
              alt=""
            />
          </span>
        )}
        <p className={messageStyle ?? 'py-[12px] text-center'}>{message}</p>
      </DialogContent>

      <DialogActions sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 4, pb: 3 }}>
        {showOkBtn && (
          <Button
            onClick={onOk}
            variant="contained"
            size="large"
            sx={{
              borderRadius: 3,
              backgroundColor: '#199675',
              fontFamily: 'Poppins',
              textTransform: 'none',
              fontSize: 10,
              height: 40,
              width: 160,
            }}
          >
            {okText}
          </Button>
        )}
        {showCancelBtn && (
          <Button
            onClick={onCancel}
            variant="contained"
            size="large"
            sx={{
              borderRadius: 3,
              backgroundColor: '#C5C5C5',
              fontFamily: 'Poppins',
              textTransform: 'none',
              fontSize: 10,
              height: 40,
              width: 160,
            }}
          >
            {cancelText}
          </Button>
        )}
      </DialogActions>
    </Dialog>
  )
}

export default AlertModalNew
