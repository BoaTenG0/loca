import React, { useState } from 'react'
import { Modal, Box, TextField, List, ListItem, ListItemAvatar, Avatar, ListItemText, Typography, IconButton } from '@mui/material'
import { CloseCircle } from 'iconsax-react'

interface User {
  id: string
  name: string
  image: string
}

interface UserAssignModalProps {
  open: boolean
  onClose: () => void
  users: User[]
  onAssign: (user: User) => void
}

const UserAssignModal: React.FC<UserAssignModalProps> = ({ open, onClose, users, onAssign }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const filteredUsers = users.filter((user) => user.name.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          width: 400,
          maxHeight: '80vh',
          padding: 3,
          backgroundColor: 'background.paper',
          borderRadius: 2,
          boxShadow: 24,
          overflowY: 'auto',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography variant="h6">Assign User</Typography>
          <IconButton onClick={onClose} size="small">
            <CloseCircle />
          </IconButton>
        </Box>

        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search Users"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{ mb: 2 }}
        />

        <List>
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <ListItem component="button" key={user.id} onClick={() => onAssign(user)}>
                <ListItemAvatar>
                  <Avatar src={user.image} alt={user.name} />
                </ListItemAvatar>
                <ListItemText primary={user.name} />
              </ListItem>
            ))
          ) : (
            <Typography variant="body2" color="text.secondary" align="center">
              No users found
            </Typography>
          )}
        </List>
      </Box>
    </Modal>
  )
}

export default UserAssignModal
