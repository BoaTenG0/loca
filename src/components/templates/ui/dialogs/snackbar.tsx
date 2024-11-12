import * as React from 'react'
import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'

interface SnackbarTemplateProps {
  open: boolean | undefined
  onClose: (event?: React.SyntheticEvent | Event, reason?: SnackbarCloseReason) => void
  message: string | undefined
  severity?: 'success' | 'info' | 'warning' | 'error'
  autoHideDuration?: number
}

export default function SnackbarTemplate({ open, onClose, message, severity = 'success', autoHideDuration = 6000 }: SnackbarTemplateProps) {
  return (
    <Snackbar open={open} autoHideDuration={autoHideDuration} onClose={onClose} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} >
      <Alert onClose={onClose} severity={severity} variant="filled" sx={{ width: '100%', backgroundColor: "#fff", color:"#000" }}>
        {message}
      </Alert>
    </Snackbar>
  )
}
