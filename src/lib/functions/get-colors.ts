// ==============================|| CUSTOM FUNCTION - COLORS ||============================== //

const getColors = (theme: { palette: { secondary: any; error: any; warning: any; info: any; success: any; primary: any } }, color: any) => {
  switch (color) {
    case 'secondary':
      return theme.palette.secondary
    case 'error':
      return theme.palette.error
    case 'warning':
      return theme.palette.warning
    case 'info':
      return theme.palette.info
    case 'success':
      return theme.palette.success
    default:
      return theme.palette.primary
  }
}

export default getColors
