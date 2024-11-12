'use client'
import React from 'react'
import Snackbar from '@mui/joy/Snackbar'
import Image from 'next/image'

import check from '../../../../assets/images/check.png'
import warning from '../../../../assets/images/warning.png'
interface NotificationTemplateProps {
  message: string
  open: boolean
  onClose: () => void
  color?: 'info' | 'success' | 'warning' | 'danger'
  actionLabel?: string
  actionClick?: () => void
  duration?: number
  isIcon: boolean
  icon: 'success' | 'danger' | 'warning'
  icon_width?: number
  iconStyle?: string
}

export const NotificationTemplate: React.FC<NotificationTemplateProps> = ({
  message,
  open,
  onClose,
  color = 'info',
  actionLabel,
  actionClick,
  duration = 1000,
  isIcon = true,
  icon = 'success',
  icon_width,
  iconStyle,
}) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={duration}
      onClose={onClose}
      sx={{
        width: 90,
      }}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }} // Change to top center
    >
      {isIcon && (
        <span className={iconStyle ?? 'pr-3 py-1'}>
          <Image src={icon === 'warning' ? warning : check} width={icon_width || 37} alt="icon" />
        </span>
      )}
      {message}
    </Snackbar>
  )
}
