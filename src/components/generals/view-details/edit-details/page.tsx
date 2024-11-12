import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
  Stack,
  OutlinedInput,
  Tooltip,
  Typography,
} from '@mui/material'
import { Form, FormikProvider, useFormik } from 'formik'
import { getInitialValues, Schema } from './form/schemas'
import { ArrowLeft } from 'iconsax-react'
import { useState } from 'react'
import AlertModalNew from '@/components/templates/ui/dialogs/alert-modal-new'

type RowData = {
  id: number
  name: string
  plotName: string
  cropType: string
  location: string
  size?: number
  status?: string
  date?: string | undefined
}

interface EditDetailsProps {
  account?: RowData | null
  onClose?: () => void
}

const EditDetails: React.FC<EditDetailsProps> = ({ account, onClose }) => {
  const [modalState, setModalState] = useState<boolean>(false)

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: getInitialValues(account),
    validationSchema: Schema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        setSubmitting(true)

        if (account) {
        } else {
        }
      } catch (err) {
        console.log(err)
      } finally {
        setSubmitting(false)
      }
    },
  })

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps, setFieldValue } = formik
  return (
    <>
      <FormikProvider value={formik}>
        <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2} padding={2}>
            <Grid item xs={12}>
              <Stack spacing={1.25}>
                <InputLabel htmlFor="name" sx={{ fontFamily: 'Poppins' }}>
                  Farmer Name
                </InputLabel>
                <OutlinedInput
                  id="name"
                  type="text"
                  {...getFieldProps('name')}
                  fullWidth
                  error={Boolean(touched.name && errors.name)}
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
                <InputLabel htmlFor="plotName" sx={{ fontFamily: 'Poppins' }}>
                  Plot Name
                </InputLabel>
                <OutlinedInput
                  id="plotName"
                  type="text"
                  {...getFieldProps('plotName')}
                  fullWidth
                  error={Boolean(touched.plotName && errors.plotName)}
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
                <InputLabel htmlFor="cropType" sx={{ fontFamily: 'Poppins' }}>
                  Crop Type
                </InputLabel>
                <OutlinedInput
                  id="cropType"
                  type="text"
                  {...getFieldProps('cropType')}
                  fullWidth
                  error={Boolean(touched.cropType && errors.cropType)}
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
                <InputLabel htmlFor="size" sx={{ fontFamily: 'Poppins' }}>
                  Size
                </InputLabel>
                <OutlinedInput
                  id="size"
                  type="text"
                  {...getFieldProps('size')}
                  fullWidth
                  error={Boolean(touched.size && errors.size)}
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
                <InputLabel htmlFor="location" sx={{ fontFamily: 'Poppins' }}>
                  Location
                </InputLabel>
                <OutlinedInput
                  id="location"
                  type="text"
                  {...getFieldProps('location')}
                  fullWidth
                  error={Boolean(touched.location && errors.location)}
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
                <InputLabel htmlFor="date" sx={{ fontFamily: 'Poppins' }}>
                  Date
                </InputLabel>
                <OutlinedInput
                  id="date"
                  type="date"
                  {...getFieldProps('date')}
                  fullWidth
                  error={Boolean(touched.date && errors.date)}
                  style={{ borderRadius: 15, paddingBlock: 0, backgroundColor: '#F2F2F2', height: 40 }}
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
          <Stack sx={{ p: 2.5 }}>
            <Grid container justifyContent="space-between" alignItems="center">
              <Button
                variant="text"
                size="large"
                sx={{ fontFamily: 'Poppins', textTransform: 'none', fontSize: 12, color: '#000', height: 40 }}
                onClick={onClose}
              >
                <ArrowLeft size={20} color="#000" style={{ marginRight: 5 }} /> Cancel
              </Button>
              <Button
                variant="contained"
                size="large"
                sx={{
                  borderRadius: 3,
                  backgroundColor: '#199675',
                  fontFamily: 'Poppins',
                  textTransform: 'none',
                  fontSize: 10,
                  height: 40,
                }}
                onClick={() => setModalState(true)}
              >
                {isSubmitting ? 'Saving...' : account ? 'Update Details' : 'Add'}
              </Button>
            </Grid>
          </Stack>
        </Form>
      </FormikProvider>
      <AlertModalNew
        isIcon
        modalStyle="flex flex-col justify-center items-center"
        open={modalState}
        icon="warning"
        centered
        showOkBtn
        showCancelBtn
        okText="Yes, update user"
        cancelText="No, don't update"
        message={'Are you sure you want to update this user?'}
        onCancel={() => setModalState(false)}
        onOk={() => setModalState(false)}
      />
    </>
  )
}
export default EditDetails
