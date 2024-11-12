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
import { Form, FormikProvider, useFormik, FieldArray } from 'formik'
import { Add, ArrowLeft, Trash } from 'iconsax-react'
import { useState } from 'react'
import AlertModalNew from '@/components/templates/ui/dialogs/alert-modal-new'
import * as Yup from 'yup'
import ButtonTemplate from '@/components/templates/ui/button/button'

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

export const validSchema = Yup.object().shape({
  name: Yup.string().required('Crop Name is required'),
  stages: Yup.array().of(
    Yup.object().shape({
      stageName: Yup.string().required('Stage name is required'),
      duration: Yup.string().required('Duration is required'),
    })
  ),
})

const initValues = {
  name: '',
  stages: [
    {
      stageName: '',
      duration: '',
    },
  ],
}

const AddCrop: React.FC<EditDetailsProps> = ({ account, onClose }) => {
  const [modalState, setModalState] = useState<boolean>(false)

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: initValues,
    validationSchema: validSchema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        setSubmitting(true)
        console.log(values)
        if (account) {
          // Handle update
        } else {
          // Handle create
        }
      } catch (err) {
        console.log(err)
      } finally {
        setSubmitting(false)
      }
    },
  })

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps, values } = formik

  return (
    <>
      <FormikProvider value={formik}>
        <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <Grid container spacing={3} padding={2}>
            <Grid item xs={12}>
              <Stack spacing={1.25}>
                <InputLabel htmlFor="name" sx={{ fontFamily: 'Poppins' }}>
                  Crop Name
                </InputLabel>
                <OutlinedInput
                  id="name"
                  type="text"
                  {...getFieldProps('name')}
                  fullWidth
                  placeholder="Crop name"
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
              <Typography variant="h6" fontFamily="Poppins" paddingBlock={3}>
                Add growing stages
              </Typography>

              <FieldArray
                name="stages"
                render={(arrayHelpers) => (
                  <>
                    {values?.stages?.map((stage, index) => (
                      <>
                        <Grid container spacing={2} key={index} sx={{ marginY: 2 }}>
                          <Grid item xs={11}>
                            <Stack spacing={1.25}>
                              <InputLabel htmlFor={`stages.${index}.stageName`} sx={{ fontFamily: 'Poppins' }}>
                                Stage {index + 1}
                              </InputLabel>
                              <OutlinedInput
                                id={`stages.${index}.stageName`}
                                type="text"
                                {...getFieldProps(`stages.${index}.stageName`)}
                                fullWidth
                                placeholder="Enter stage name"
                                error={Boolean(
                                  touched.stages?.[index] && typeof errors.stages?.[index] === 'object' && errors.stages?.[index].stageName
                                )}
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

                          <Grid item xs={11}>
                            <Stack spacing={1.25}>
                              <InputLabel htmlFor={`stages.${index}.duration`} sx={{ fontFamily: 'Poppins' }}>
                                Duration (days)
                              </InputLabel>
                              <OutlinedInput
                                id={`stages.${index}.duration`}
                                type="text"
                                {...getFieldProps(`stages.${index}.duration`)}
                                fullWidth
                                placeholder="Duration"
                                error={Boolean(
                                  touched.stages?.[index] && typeof errors.stages?.[index] === 'object' && errors.stages?.[index].duration
                                )}
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

                          {values.stages.length > 1 && (
                            <Grid item xs={1} sx={{ display: 'flex', alignItems: 'flex-end' }}>
                              <Button onClick={() => arrayHelpers.remove(index)} sx={{ minWidth: 'auto', color: 'error.main' }}>
                                <Trash size={20} />
                              </Button>
                            </Grid>
                          )}
                        </Grid>
                        <Divider sx={{ paddingBlock: 1 }} />
                      </>
                    ))}

                    <ButtonTemplate
                      btnType="text"
                      label={'Add new stage'}
                      prefixIcon={<Add />}
                      handleClick={() => arrayHelpers.push({ stageName: '', duration: '' })}
                      styles={{
                        color: '#47AB91',
                        marginTop: 20,
                        padding: 0,
                        backgroundColor: 'transparent',
                      }}
                    />
                  </>
                )}
              />
            </Grid>
          </Grid>

          <Divider sx={{ py: 2 }} />
          <Stack sx={{ p: 2.5 }}>
            <Grid container justifyContent="space-between" alignItems="center">
              <Button
                variant="text"
                size="large"
                sx={{
                  fontFamily: 'Poppins',
                  textTransform: 'none',
                  fontSize: 12,
                  color: '#000',
                  height: 40,
                }}
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
                {isSubmitting ? 'Saving...' : account ? 'Update Details' : 'Add crop type'}
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

export default AddCrop
