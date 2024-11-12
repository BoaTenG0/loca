// import React, { useState } from 'react'
// import { Box, Stack, IconButton, Menu, ListItemButton } from '@mui/material'
// import { More, Eye, Edit, CloseCircle, Trash, Play } from 'iconsax-react'

// type RowData = {
//   id: number
//   name: string
//   plotName: string
//   cropType: string
//   location: string
//   status: string
// }

// interface ActionMenuProps {
//   row: RowData
//   onViewDetails: (row: RowData) => void
//   onEditDetails: (row: RowData) => void
//   onSuspendUser: (row: RowData) => void
//   onDeleteUser: (row: RowData) => void
//   viewVerified: boolean
//   viewPending: boolean
//   viewInactive: boolean
// }

// export const PlotUsersActionMenu: React.FC<ActionMenuProps> = ({
//   row,
//   onViewDetails,
//   onEditDetails,
//   onSuspendUser,
//   onDeleteUser,
//   viewVerified,
//   viewPending,
//   viewInactive,
// }) => {
//   const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
//   const open = Boolean(anchorEl)

//   const handleClick = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorEl(event.currentTarget)
//   }

//   const handleClose = () => {
//     setAnchorEl(null)
//   }

//   return (
//     <Box sx={{ p: 3, pb: 1 }}>
//       <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={1}>
//         <IconButton
//           color="secondary"
//           aria-controls={open ? 'wallet-menu' : undefined}
//           aria-haspopup="true"
//           aria-expanded={open ? 'true' : undefined}
//           onClick={handleClick}
//         >
//           <More size={20} style={{ transform: 'rotate(90deg)', color: '#000' }} />
//         </IconButton>
//         {viewVerified && (
//           <Menu
//             id="wallet-menu"
//             anchorEl={anchorEl}
//             open={open}
//             onClose={handleClose}
//             MenuListProps={{
//               'aria-labelledby': 'wallet-button',
//               sx: { p: 1.25, minWidth: 150 },
//             }}
//             sx={{
//               '& .MuiPaper-root': {
//                 boxShadow: '0px 4px 12px rgba(232, 245, 241, 1)',
//                 border: '1px solid rgba(232, 245, 241, 1)',
//                 borderRadius: 3,
//               },
//             }}
//             anchorOrigin={{
//               vertical: 'bottom',
//               horizontal: 'right',
//             }}
//             transformOrigin={{
//               vertical: 'top',
//               horizontal: 'right',
//             }}
//           >
//             <ListItemButton
//               onClick={() => {
//                 handleClose()
//                 onViewDetails(row)
//               }}
//               sx={{ color: '#808080', fontSize: 15 }}
//             >
//               <Eye className="text-green-400 mr-2" size={20} /> View Details
//             </ListItemButton>
//             <ListItemButton
//               onClick={() => {
//                 handleClose()
//                 onEditDetails(row)
//               }}
//               sx={{ color: '#808080', fontSize: 15 }}
//             >
//               <Edit className="text-blue-400 mr-2" size={20} /> Edit Details
//             </ListItemButton>
//             <ListItemButton
//               onClick={() => {
//                 handleClose()
//                 onDeleteUser(row)
//               }}
//               sx={{ color: '#808080', fontSize: 15 }}
//             >
//               <CloseCircle className="text-red-600 mr-2" size={20} /> Deactivate Plot
//             </ListItemButton>
//           </Menu>
//         )}
//         {viewPending && (
//           <Menu
//             id="wallet-menu"
//             anchorEl={anchorEl}
//             open={open}
//             onClose={handleClose}
//             MenuListProps={{
//               'aria-labelledby': 'wallet-button',
//               sx: { p: 1.25, minWidth: 150 },
//             }}
//             sx={{
//               '& .MuiPaper-root': {
//                 boxShadow: '0px 4px 12px rgba(232, 245, 241, 1)',
//                 border: '1px solid rgba(232, 245, 241, 1)',
//                 borderRadius: 3,
//               },
//             }}
//             anchorOrigin={{
//               vertical: 'bottom',
//               horizontal: 'right',
//             }}
//             transformOrigin={{
//               vertical: 'top',
//               horizontal: 'right',
//             }}
//           >
//             <ListItemButton
//               onClick={() => {
//                 handleClose()
//                 onViewDetails(row)
//               }}
//               sx={{ color: '#808080', fontSize: 15 }}
//             >
//               <Eye className="text-green-400 mr-2" size={20} /> View Details
//             </ListItemButton>
//             <ListItemButton
//               onClick={() => {
//                 handleClose()
//                 onSuspendUser(row)
//               }}
//               sx={{ color: '#808080', fontSize: 15 }}
//             >
//               <Play className="text-green-400 mr-2" size={20} /> Approve Plot
//             </ListItemButton>
//             <ListItemButton
//               onClick={() => {
//                 handleClose()
//                 onDeleteUser(row)
//               }}
//               sx={{ color: '#808080', fontSize: 15 }}
//             >
//               <CloseCircle className="text-red-600 mr-2" size={20} /> Reject Plot
//             </ListItemButton>
//           </Menu>
//         )}
//         {viewInactive && (
//           <Menu
//             id="wallet-menu"
//             anchorEl={anchorEl}
//             open={open}
//             onClose={handleClose}
//             MenuListProps={{
//               'aria-labelledby': 'wallet-button',
//               sx: { p: 1.25, minWidth: 150 },
//             }}
//             sx={{
//               '& .MuiPaper-root': {
//                 boxShadow: '0px 4px 12px rgba(232, 245, 241, 1)',
//                 border: '1px solid rgba(232, 245, 241, 1)',
//                 borderRadius: 3,
//               },
//             }}
//             anchorOrigin={{
//               vertical: 'bottom',
//               horizontal: 'right',
//             }}
//             transformOrigin={{
//               vertical: 'top',
//               horizontal: 'right',
//             }}
//           >
//             <ListItemButton
//               onClick={() => {
//                 handleClose()
//                 onViewDetails(row)
//               }}
//               sx={{ color: '#808080', fontSize: 15 }}
//             >
//               <Eye className="text-green-400 mr-2" size={20} /> View Details
//             </ListItemButton>

//             <ListItemButton
//               onClick={() => {
//                 handleClose()
//                 onDeleteUser(row)
//               }}
//               sx={{ color: '#808080', fontSize: 15 }}
//             >
//               <Play className="text-green-400 mr-2" size={20} /> Activate
//             </ListItemButton>
//           </Menu>
//         )}
//       </Stack>
//     </Box>
//   )
// }

import React, { useState } from 'react'
import { Box, Stack, IconButton, Menu, ListItemButton } from '@mui/material'
import { More } from 'iconsax-react'

interface MenuAction {
  label: string
  icon: React.ReactNode
  onClick: (row: any) => void
  color?: string
}

interface ActionMenuProps {
  row: any
  actions: MenuAction[]
}

export const GenericActionMenu: React.FC<ActionMenuProps> = ({ row, actions }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Box>
      <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={1}>
        <IconButton
          color="secondary"
          aria-controls={open ? 'action-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          <More size={20} style={{ transform: 'rotate(90deg)', color: '#000' }} />
        </IconButton>
        <Menu
          id="action-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'action-button',
            sx: { p: 1.25, minWidth: 150 },
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
          {actions.map((action, index) => (
            <ListItemButton
              key={index}
              onClick={() => {
                handleClose()
                action.onClick(row)
              }}
              sx={{ color: action.color || '#808080', fontSize: 15 }}
            >
              {action.icon}
              {action.label}
            </ListItemButton>
          ))}
        </Menu>
      </Stack>
    </Box>
  )
}
