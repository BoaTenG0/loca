import React, { useState } from 'react'
import { Box, Stack, IconButton, Menu, ListItemButton } from '@mui/material'
import { More } from 'iconsax-react'

interface MenuItem {
  label: string
  icon: JSX.Element
  color?: string
  onClick: () => void
}

interface IconMenuTemplateProps {
  menuItems: MenuItem[]
  icon?: JSX.Element
  iconColor?: string
  iconSize?: number
  buttonId?: string
  buttonColor?: 'primary' | 'secondary' | 'default'
  boxPadding?: number
  boxBottom?: number
  menuMinWidth?: number
  menuPadding?: number
}

//usage
//const menuItems = [
//     { label: 'View Details', icon: <Eye className="text-green-400 mr-2" size={20} />, onClick: () => console.log('View clicked') },
//     { label: 'Edit Details', icon: <Edit className="text-blue-400 mr-2" size={20} />, onClick: () => console.log('Edit clicked') },
//     { label: 'Suspend User', icon: <CloseCircle className="text-red-300 mr-2" size={20} />, onClick: () => console.log('Suspend clicked') },
//     { label: 'Delete User', icon: <Trash className="text-red-600 mr-2" size={20} />, onClick: () => console.log('Delete clicked') },
//   ];

//   // In the component where you want to render it
//   <IconMenuTemplate
//     menuItems={menuItems}
//     iconColor="#000"
//     buttonColor="secondary"
//   />

const IconMenuTemplate: React.FC<IconMenuTemplateProps> = ({
  menuItems,
  icon = <More size={20} />,
  iconColor = '#000',
  iconSize = 20,
  buttonId = 'wallet-button',
  buttonColor = 'secondary',
  boxPadding = 3,
  boxBottom = 1,
  menuMinWidth = 150,
  menuPadding = 1.25,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Box
      sx={{
        p: boxPadding,
        pb: boxBottom,
        '&:hover': {
          backgroundColor: 'none',
        },
        '&:hover.MuiStack-root': {
          backgroundColor: 'none',
        },
      }}
    >
      <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={1}>
        <IconButton
          color={buttonColor}
          id={buttonId}
          aria-controls={open ? `${buttonId}-menu` : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          sx={{
            '&:hover': {
              backgroundColor: 'transparent',
            },
            '&:hover.MuiIconButton-label': {
              backgroundColor: 'transparent',
            },
          }}
        >
          {/* <More size={iconSize} style={{ transform: 'rotate(90deg)', color: iconColor }} /> */}
          {React.cloneElement(icon, { style: { color: iconColor } })}
        </IconButton>
        <Menu
          id={`${buttonId}-menu`}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': buttonId,
            sx: { p: menuPadding, minWidth: menuMinWidth },
          }}
          sx={{
            '& .MuiPaper-root': {
              boxShadow: '0px 4px 12px rgba(232, 245, 241, 1)',
              border: '1px solid rgba(232, 245, 241, 1)',
              borderRadius: 3,
            },
          }}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          {menuItems.map((item, index) => (
            <ListItemButton
              key={index}
              onClick={item.onClick}
              sx={{
                color: item.color || '#808080',
                fontSize: 15,
                gap: 2,
              }}
            >
              {item.icon}
              {item.label}
            </ListItemButton>
          ))}
        </Menu>
      </Stack>
    </Box>
  )
}

export default IconMenuTemplate
