import {
  Button,
  Divider,
  Grid,
  InputLabel,
  Stack,
  OutlinedInput,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  Modal,
  Box,
  TextField,
  Typography,
  List,
  Avatar,
  Checkbox,
  ListItem,
} from '@mui/material'
import { Form, FormikProvider, useFormik } from 'formik'
import { initialValues, Schema } from './form/schemas'
import { Add, ArrowLeft, SearchNormal } from 'iconsax-react'
import { useState } from 'react'
import AlertModalNew from '@/components/templates/ui/dialogs/alert-modal-new'
import ButtonTemplate from '@/components/templates/ui/button/button'
import { CreateState, User } from '@/app/[locale]/(admins)/admin/_logics/interface'
import LocationMap from '@/components/templates/ui/map/map'
import { UpdateStates } from '@/lib/functions/update-states'
import InputsTemplateNew from '@/components/templates/ui/input/input'
import SnackbarTemplate from '@/components/templates/ui/dialogs/snackbar'
import UserAssignModal from '@/app/[locale]/(admins)/admin/_widget/_;pages/roles-permissions/User-assign-modal'
import { AssignedUsersList } from '@/app/[locale]/(admins)/admin/_widget/_;pages/roles-permissions/add-role'
import InputLabelTemplate from '@/components/templates/ui/input/inputLabel'

interface CreateProps {
  onClose?: () => void
  workshop?: boolean
}

interface AssignedUserProps {
  user: User
  onRemove: (id: string) => void
}

interface AssignedUsersListProps {
  assignedUsers: User[]
  onRemoveUser: (id: string) => void
}
const farmers = [
  { id: '1', name: 'Brown Carl', image: '/images/user/user-01.png' },
  { id: '2', name: 'Brown Carl', image: '/path-to-avatar2.jpg' },
  { id: '3', name: 'Brown Carl', image: '/path-to-avatar3.jpg' },
  { id: '4', name: 'Brown Carl', image: '/path-to-avatar4.jpg' },
]

const CreateWorkShop: React.FC<CreateProps> = ({ onClose, workshop }) => {
  const [state, setState] = useState<CreateState>({
    modalOpen: false,
    locationOpen: false,
    locationInfo: { address: '', coordinates: null },
    isMapVisible: false,
    open: false,
    selectedFarmers: [],
    snackbarOpen: false,
    assignedUsers: [] as User[],
  })
  const users = [
    { id: '1', name: 'John Doe', image: '/images/user/user-09.png' },
    { id: '2', name: 'Ian Tubers', image: '/images/user/user-19.png' },
    { id: '2', name: 'Kanaan Stark', image: '/images/user/user-21.png' },
  ]
  const handleSelect = (id: string) => {
    setState((prevState) => ({
      ...prevState,
      selectedFarmers: prevState.selectedFarmers?.includes(id)
        ? prevState.selectedFarmers.filter((farmerId) => farmerId !== id)
        : [...(prevState?.selectedFarmers || []), id],
    }))
  }

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

  const formik = useFormik({
    initialValues: { ...initialValues, location: state.locationInfo.address },
    validationSchema: Schema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const finalValues = { ...values, location: state.locationInfo.coordinates, address: state.locationInfo.address }
        console.log(finalValues)

        UpdateStates(setState, 'modalOpen', true)
        setSubmitting(true)
        setSubmitting(true)
      } catch (err) {
        console.log(err)
      } finally {
        setSubmitting(false)
      }
    },
  })

  //   const handleLocationSelect = (coordinates: { lat: number; lng: number } | null, address: string) => {
  //     setState((prev) => ({
  //       ...prev,
  //       locationInfo: { address, coordinates },
  //       isMapVisible: !coordinates,
  //     }))
  //   }
  const handleLocationSelect = (coordinates: { lat: number; lng: number } | null, address: string) => {
    console.log('Coordinates selected:', coordinates)
    console.log('Address selected:', address)
    setState((prev) => ({
      ...prev,
      locationInfo: { address, coordinates },
      isMapVisible: false,
      locationOpen: false,
    }))
    setFieldValue('workLocation', address)
    console.log('🚀 ~ handleLocationSelect ~ address:', address)
  }

  console.log('Current location info:', state.locationInfo)
  const { errors, touched, handleSubmit, isSubmitting, getFieldProps, setFieldValue } = formik
  return (
    <>
      <FormikProvider value={formik}>
        <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2} padding={2}>
            <Grid item xs={12}>
              <Stack spacing={1.25}>
                <InputLabel htmlFor="title" sx={{ fontFamily: 'Poppins' }}>
                  Tittle
                </InputLabel>
                <OutlinedInput
                  id="title"
                  type="text"
                  {...getFieldProps('title')}
                  fullWidth
                  error={Boolean(touched.title && errors.title)}
                  style={{ borderRadius: 15, paddingBlock: 0, height: 40 }}
                  sx={{
                    '&.Mui-focused': {
                      border: 'none',
                      boxShadow: '0px 4px 12px rgba(232, 245, 241, 1)',
                    },
                  }}
                />
              </Stack>
            </Grid>
            <Grid item xs={12}>
              <Stack spacing={1.25}>
                <InputLabel htmlFor="workLocation" sx={{ fontFamily: 'Poppins' }}>
                  Location
                </InputLabel>
                <OutlinedInput
                  id="workLocation"
                  type="text"
                  //   {...getFieldProps('workLocation')}
                  value={state.locationInfo.coordinates?.lat}
                  onChange={(e) =>
                    setState((prev) => ({
                      ...prev,
                      locationInfo: { ...prev.locationInfo, address: e.target.value },
                    }))
                  }
                  onFocus={() => UpdateStates(setState, undefined, undefined, { isMapVisible: true, locationOpen: true })}
                  fullWidth
                  error={Boolean(touched.workLocation && errors.workLocation)}
                  style={{ borderRadius: 15, paddingBlock: 0, height: 40 }}
                  sx={{
                    '&.Mui-focused': {
                      border: 'none',
                      boxShadow: '0px 4px 12px rgba(232, 245, 241, 1)',
                    },
                  }}
                />
              </Stack>
            </Grid>
            <Dialog
              open={state.locationOpen ?? false}
              onClose={() => UpdateStates(setState, 'locationOpen', false)}
              fullWidth
              maxWidth="md"
            >
              <DialogTitle>Select Location</DialogTitle>
              <DialogContent>
                <LocationMap
                  onSelectLocation={(coordinates) => handleLocationSelect(coordinates, state.locationInfo.address)}
                  onUpdateAddress={(address) => {
                    handleLocationSelect(state.locationInfo.coordinates, address)
                  }}
                />
              </DialogContent>
              {/* <DialogActions>
                <Button onClick={() => UpdateStates(setState, 'locationOpen', false)} color="primary">
                  Cancel
                </Button>
              </DialogActions> */}
            </Dialog>
            <Grid item xs={12}>
              <Stack spacing={1.25}>
                <InputLabel htmlFor="workDate" sx={{ fontFamily: 'Poppins' }}>
                  Date
                </InputLabel>
                <OutlinedInput
                  id="workDate"
                  type="date"
                  {...getFieldProps('workDate')}
                  fullWidth
                  error={Boolean(touched.workDate && errors.workDate)}
                  style={{ borderRadius: 15, paddingBlock: 0, height: 40 }}
                  sx={{
                    '&.Mui-focused': {
                      border: 'none',
                      boxShadow: '0px 4px 12px rgba(232, 245, 241, 1)',
                    },
                  }}
                />
              </Stack>
            </Grid>
            <Grid item xs={6}>
              <Stack spacing={1.25}>
                <InputLabel htmlFor="startTime" sx={{ fontFamily: 'Poppins' }}>
                  Start Time
                </InputLabel>
                <OutlinedInput
                  id="startTime"
                  type="time"
                  {...getFieldProps('startTime')}
                  fullWidth
                  error={Boolean(touched.startTime && errors.startTime)}
                  style={{ borderRadius: 15, paddingBlock: 0, height: 40 }}
                  sx={{
                    '&.Mui-focused': {
                      border: 'none',
                      boxShadow: '0px 4px 12px rgba(232, 245, 241, 1)',
                    },
                  }}
                />
              </Stack>
            </Grid>
            <Grid item xs={6}>
              <Stack spacing={1.25}>
                <InputLabel htmlFor="endTime" sx={{ fontFamily: 'Poppins' }}>
                  End Time
                </InputLabel>
                <OutlinedInput
                  id="endTime"
                  type="time"
                  {...getFieldProps('endTime')}
                  fullWidth
                  error={Boolean(touched.endTime && errors.endTime)}
                  style={{ borderRadius: 15, paddingBlock: 0, height: 40 }}
                  sx={{
                    '&.Mui-focused': {
                      border: 'none',
                      boxShadow: '0px 4px 12px rgba(232, 245, 241, 1)',
                    },
                  }}
                />
              </Stack>
            </Grid>
          </Grid>
          <Divider sx={{ py: 2 }} />
          <Grid item xs={12}>
            <Stack direction="row" justifyContent="space-between" width="100%" alignItems="center" padding={3}>
              {state.assignedUsers.length > 0 ? (
                <AssignedUsersList assignedUsers={state.assignedUsers} onRemoveUser={handleRemoveUser} />
              ) : (
                <Typography sx={{ fontFamily: 'Poppins', fontWeight: 300, fontStyle: 'italic', color: '#808080', fontSize: 13 }}>
                  Not Assigned
                </Typography>
              )}
              <ButtonTemplate
                styles={{
                  color: '#199675',
                  // fontSize: 12,
                  backgroundColor: 'transparent',
                }}
                btnType="text"
                prefixIcon={<Add />}
                label={'Invite'}
                handleClick={() => UpdateStates(setState, 'open', true)}
              />
            </Stack>
          </Grid>
          {/* <div className="w-full flex justify-end">
            <ButtonTemplate
              styles={{
                color: '#199675',
                // fontSize: 12,
                backgroundColor: 'transparent',
              }}
              btnType="text"
              prefixIcon={<Add />}
              label={'Invite'}
              handleClick={() => UpdateStates(setState, 'open', true)}
            />
          </div> */}

          <Stack sx={{ p: 2.5 }}>
            <Grid
              container
              justifyContent="space-between"
              alignItems="center"
              sx={{ position: 'absolute', bottom: 0, width: '90%', pb: 4 }}
            >
              {/* <Button
                variant="text"
                size="large"
                sx={{ fontFamily: 'Poppins', textTransform: 'none', fontSize: 12, color: '#000', height: 40 }}
                onClick={onClose}
              >
                <ArrowLeft size={20} color="#000" style={{ marginRight: 5 }} /> Cancel
              </Button> */}
              <ButtonTemplate
                // sx={{ fontFamily: 'Poppins', textTransform: 'none', fontSize: 12, color: '#000', height: 40 }}
                styles={{ backgroundColor: 'transparent', color: '#000' }}
                label={'Cancel'}
                btnType="text"
                prefixIcon={<ArrowLeft size={20} color="#000" style={{ marginRight: 5 }} />}
                handleClick={onClose}
              />
              <ButtonTemplate
                sx={{
                  // backgroundColor: '#199675',
                  color: 'white',
                  // fontSize: 12,
                }}
                label={isSubmitting ? 'Saving...' : workshop ? 'Create Workshop' : 'Create In-person'}
                handleClick={() => UpdateStates(setState, 'modalOpen', false)}
              />
            </Grid>
          </Stack>
        </Form>
      </FormikProvider>
      <AlertModalNew
        isIcon
        modalStyle="flex flex-col justify-center items-center"
        open={state.modalOpen}
        icon="warning"
        centered
        showOkBtn
        showCancelBtn
        okText="Yes, create workshop"
        cancelText="No, don't"
        message={'Are you sure you want to create this workshop?'}
        onCancel={() => UpdateStates(setState, 'modalOpen', false)}
        onOk={() => UpdateStates(setState, 'modalOpen', false, { snackbarOpen: true })}
      />
      <UserAssignModal
        open={state.open}
        onClose={() => setState((prevState) => ({ ...prevState, open: false }))}
        users={users}
        onAssign={handleAssignUser}
      />
      <SnackbarTemplate
        open={state.snackbarOpen}
        autoHideDuration={3000}
        onClose={() => UpdateStates(setState, 'modalOpen', false, { snackbarOpen: false })}
        severity="success"
        message={'Workshop created successfully!'}
      />
    </>
  )
}
export default CreateWorkShop
