import {
  Grid,
  Button,
  Typography,
  FormHelperText,
  Stack,
  InputAdornment,
  IconButton,
  InputLabel,
  OutlinedInput,
  Box,
  List,
  ListItem,
  Checkbox,
  Avatar,
} from '@mui/material'
import { Formik } from 'formik'
import { getInitialValuesForRole, Schema } from '@/components/generals/view-details/edit-details/form/schemas'
import InputLabelTemplate from '@/components/templates/ui/input/inputLabel'
import InputsTemplateNew from '@/components/templates/ui/input/input'
import ButtonTemplate from '@/components/templates/ui/button/button'
import PermissionSection from '@/components/templates/ui/card/permission-box'
import { AddCircle, CloseCircle } from 'iconsax-react'
import { useState } from 'react'
import UserAssignModal from './User-assign-modal'
import SnackbarTemplate from '@/components/templates/ui/dialogs/snackbar'
import * as Yup from 'yup'

interface roleProps {
  onClick: () => void
  role?: any
  viewMode?: string | undefined
}

interface User {
  id: string
  name: string
  image: string
}

interface AssignedUserProps {
  user: User
  onRemove: (id: string) => void
}

interface AssignedUsersListProps {
  assignedUsers: User[]
  onRemoveUser: (id: string) => void
}

const AddRole = ({ role, onClick, viewMode }: roleProps) => {
  console.log('🚀 ~ viewMode:', viewMode)
  const permissions = ['View Users', 'Add/Edit Users', 'Approve/Reject User Registration']
  const plotManagement = ['View Plots', 'Add/Edit Plots Information', 'Approve Plot Registration']
  const services = ['View Service Request', 'Approve/Reject Service Request', 'Assign Service Provider']
  const users = [
    { id: '1', name: 'John Doe', image: '/images/user/user-09.png' },
    { id: '2', name: 'Ian Tubers', image: '/images/user/user-19.png' },
    { id: '2', name: 'Kanaan Stark', image: '/images/user/user-21.png' },
  ]
  const [state, setState] = useState({
    openModal: false,
    assignedUsers: [] as User[],
    snackbarOpen: false,
  })

  const handleAssignUser = (user: User) => {
    setState((prevState) => ({
      ...prevState,
      assignedUsers: [...prevState.assignedUsers, user],
      openModal: false,
    }))
  }

  const handleRemoveUser = (userId: string) => {
    setState((prevState) => ({
      ...prevState,
      assignedUsers: prevState.assignedUsers.filter((user) => user.id !== userId),
    }))
  }

  return (
    <>
      <Formik
        initialValues={getInitialValuesForRole(role)}
        validationSchema={Yup.object().shape({
          addRoleTitle: Yup.string().required('Title is required'),
          addRoleDescription: Yup.string().required('Description is required'),
        })}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          console.log('🚀 ~ onSubmit={ ~ values:', values)
          try {
            setState((prevState) => ({ ...prevState, snackbarOpen: true }))
            setTimeout(() => {
              onClick()
            }, 1000)
          } catch (error: unknown) {
            if (error instanceof Error) {
              console.error(error)
              setStatus({ success: false })
              setErrors({ submit: error.message })
              setSubmitting(false)
            } else {
              console.error('Unknown error:', error)
            }
          }
        }}
      >
        {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
          <form noValidate onSubmit={handleSubmit} style={{ width: '100%' }}>
            {viewMode === 'View Permissions' ? (
              <Stack spacing={1} width={'100%'} alignItems="flex-start" paddingBlock={5}>
                <Typography
                  gutterBottom
                  className="text-logaGreenDeep font-poppins font-black pl-7"
                  style={{ fontWeight: 'bold', fontFamily: 'Poppins' }}
                >
                  Admin
                </Typography>
                <Typography gutterBottom className="text-gray-300 font-poppins text-sm pl-7">
                  Full access to all system features
                </Typography>
                <Stack width="100%" direction="row" justifyContent="space-between" alignItems="center">
                  <Typography gutterBottom className="text-locaGreen font-poppins font-medium text-sm pl-7 uppercase">
                    Permissions
                  </Typography>

                  <ButtonTemplate
                    styles={{
                      color: '#FB7C74',
                      borderWidth: 2,
                      borderColor: '#FB7C74',
                      textTransform: 'none',
                      backgroundColor: 'transparent',
                    }}
                    label="Restore Defaults"
                  />
                </Stack>
                <PermissionSection
                  userPermissions={permissions}
                  plotPermissions={plotManagement}
                  servicePermissions={services}
                  hideTitle
                  defaultCheckedPermissions={{
                    userPermissions: ['View Users'],
                    plotPermissions: ['View Plots'],
                    servicePermissions: ['Assign Service Provider'],
                  }}
                />
              </Stack>
            ) : viewMode === 'Edit Permissions' ? (
              <Stack spacing={1} width={'100%'} alignItems="flex-start" paddingBlock={5}>
                <Typography
                  gutterBottom
                  className="text-logaGreenDeep font-poppins font-black pl-7"
                  style={{ fontWeight: 'bold', fontFamily: 'Poppins' }}
                >
                  Admin
                </Typography>
                <Typography gutterBottom className="text-gray-300 font-poppins text-sm pl-7">
                  Full access to all system features
                </Typography>
                <Stack width="100%" direction="row" justifyContent="space-between" alignItems="center">
                  <Typography gutterBottom className="text-locaGreen font-poppins font-medium text-sm pl-7 uppercase">
                    Permissions
                  </Typography>

                  <ButtonTemplate
                    styles={{
                      color: '#FB7C74',
                      borderWidth: 2,
                      borderColor: '#FB7C74',
                      textTransform: 'none',
                      backgroundColor: 'transparent',
                    }}
                    label="Restore Defaults"
                  />
                </Stack>
                <PermissionSection
                  userPermissions={permissions}
                  plotPermissions={plotManagement}
                  servicePermissions={services}
                  hideTitle
                  defaultCheckedPermissions={{
                    userPermissions: ['View Users'],
                    plotPermissions: ['View Plots'],
                    servicePermissions: ['Assign Service Provider'],
                  }}
                />

                <Grid container justifyContent="space-between" alignItems="center" paddingBlock={5} paddingLeft={3}>
                  <ButtonTemplate
                    btnType="text"
                    label={'Cancel'}
                    handleClick={onClick}
                    styles={{ color: '#000', backgroundColor: 'transparent' }}
                  />
                  <ButtonTemplate isDisabled={isSubmitting} type="submit" label={'Save Changes'} styles={{ backgroundColor: '#199675' }} />
                </Grid>
              </Stack>
            ) : (
              <Grid container spacing={3} sx={{ marginTop: 2 }}>
                <Grid item xs={12} md={12}>
                  <Stack width="100%" spacing={1} alignItems="flex-start">
                    <InputLabelTemplate
                      htmlFor="addRoleTitle"
                      label="Role Title"
                      className="my-class"
                      required={true}
                      //   shrink
                      variant="standard"
                    />
                    <InputsTemplateNew
                      //   label="Role Title"
                      inputName="addRoleTitle"
                      placeholder="Type here"
                      currentValue={values.addRoleTitle}
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                      fullWidth
                      error={Boolean(touched.addRoleTitle && errors.addRoleTitle)}
                      errorMessage={errors.addRoleTitle}
                      height={35}
                      borderRadius="10px"
                    />
                  </Stack>
                </Grid>
                <Grid item xs={12} md={12}>
                  <Stack width="100%" spacing={1} alignItems="flex-start">
                    <InputLabelTemplate
                      htmlFor="addRoleDescription"
                      label="Role Description"
                      className="my-class"
                      required={true}
                      //   shrink
                      variant="standard"
                    />
                    <InputsTemplateNew
                      inputName="addRoleDescription"
                      placeholder="Type here"
                      currentValue={values.addRoleDescription}
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                      fullWidth
                      isTextarea
                      rowsHeight={5}
                      error={Boolean(touched.addRoleDescription && errors.addRoleDescription)}
                      errorMessage={errors.addRoleDescription}
                      borderRadius="10px"
                    />
                  </Stack>
                </Grid>
                <Grid item xs={12} md={12}>
                  <Stack width="100%" spacing={1} alignItems="flex-start">
                    <InputLabelTemplate
                      htmlFor=""
                      label="Assign User(s)"
                      className="my-class"
                      required={true}
                      //   shrink
                      variant="standard"
                    />
                    <Stack direction="row" justifyContent="space-between" width="100%" alignItems="center">
                      {state.assignedUsers.length > 0 ? (
                        <AssignedUsersList assignedUsers={state.assignedUsers} onRemoveUser={handleRemoveUser} />
                      ) : (
                        <Typography sx={{ fontFamily: 'Poppins', fontWeight: 300, fontStyle: 'italic', color: '#808080', fontSize: 13 }}>
                          Not Assigned
                        </Typography>
                      )}
                      <ButtonTemplate
                        btnType="text"
                        label={'Assign'}
                        prefixIcon={<AddCircle color="#199675" size={18} />}
                        // handleClick={() => }
                        handleClick={() => setState((prevState) => ({ ...prevState, openModal: true }))}
                        styles={{ color: '#808080', padding: 0, backgroundColor: 'transparent' }}
                      />
                    </Stack>
                  </Stack>
                </Grid>

                <PermissionSection userPermissions={permissions} plotPermissions={plotManagement} servicePermissions={services} />
                <Grid container justifyContent="space-between" alignItems="center" paddingBlock={5} paddingLeft={3}>
                  <ButtonTemplate
                    btnType="text"
                    label={'Cancel'}
                    handleClick={onClick}
                    styles={{ color: '#000', backgroundColor: 'transparent' }}
                  />
                  <ButtonTemplate
                    isDisabled={isSubmitting}
                    type="submit"
                    label={'Add Role'}
                    // handleClick={onClick}
                    styles={{ backgroundColor: '#199675' }}
                  />
                </Grid>
              </Grid>
            )}
          </form>
        )}
      </Formik>
      <UserAssignModal
        open={state.openModal}
        onClose={() => setState((prevState) => ({ ...prevState, openModal: false }))}
        users={users}
        onAssign={handleAssignUser}
      />

      <SnackbarTemplate
        open={state.snackbarOpen}
        onClose={() => setState((prevState) => ({ ...prevState, snackbarOpen: false }))}
        message="New role added successfully!"
        severity="success"
        autoHideDuration={5000}
      />
    </>
  )
}
export default AddRole

export const AssignedUser: React.FC<AssignedUserProps> = ({ user, onRemove }) => (
  <Box
    sx={{
      display: 'flex',
      alignItems: 'center',
      padding: '5px 10px',
      borderRadius: '20px',
      backgroundColor: '#E6F2EB',
      marginRight: '8px',
    }}
  >
    <Avatar src={user.image} alt={user.name} sx={{ width: 30, height: 30, marginRight: '8px' }} />
    <Typography sx={{ fontFamily: 'Poppins', fontWeight: 300, color: '#004D40' }}>{user.name}</Typography>
    <IconButton size="small" onClick={() => onRemove(user?.id)} sx={{ marginLeft: '8px', color: '#004D40' }}>
      <CloseCircle fontSize="small" />
    </IconButton>
  </Box>
)

export const AssignedUsersList: React.FC<AssignedUsersListProps> = ({ assignedUsers, onRemoveUser }) => (
  <Stack direction="row" alignItems="center" spacing={1} flexWrap="wrap">
    {assignedUsers.map((user) => (
      <AssignedUser key={user.id} user={user} onRemove={onRemoveUser} />
    ))}
  </Stack>
)
