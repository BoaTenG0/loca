import { Box, Button, Chip, Grid, IconButton, Stack, Typography } from '@mui/material'
import { useState } from 'react'
import { BsFileEarmarkFill } from 'react-icons/bs'
import AlertModalNew from '@/components/templates/ui/dialogs/alert-modal-new'
import { MdEdit, MdOutlineFileDownload, MdOutlineInsertDriveFile } from 'react-icons/md'
import { AbsentFormModal } from '@/components/templates/ui/dialogs/absent-form'
import { UpdateStates } from '@/lib/functions/update-states'
import InputsTemplateNew from '@/components/templates/ui/input/input'
import ButtonTemplate from '@/components/templates/ui/button/button'
import { LuDot } from 'react-icons/lu'
import SnackbarTemplate from '@/components/templates/ui/dialogs/snackbar'

type RowData = {
  id: number
  name: string
  phoneNumber?: string | undefined
  bank?: string | undefined
  date?: string | undefined
  amount?: string | undefined
  status: string | undefined
}

export const FinanceDetailsView: React.FC<{
  row: RowData
  pending?: boolean
  rejected?: boolean
  disbursement?: boolean
  bankApproved?: boolean
}> = ({ row, pending, rejected, disbursement, bankApproved }) => {
  const [state, setState] = useState<{
    value: number
    modalState: string | null
    message: string | null
    absentFormOpen: boolean
    rejectReason: string
    snackbarOpen: boolean
    snackbarMessage: string
  }>({
    value: 0,
    modalState: null,
    message: null,
    absentFormOpen: false,
    rejectReason: '',
    snackbarOpen: false,
    snackbarMessage: '',
  })

  const handleCloseModal = () => {
    setState((prevState) => ({ ...prevState, modalState: null, message: null }))
  }

  return (
    <>
      <Stack spacing={5} padding={2} sx={{ position: 'relative' }}>
        <Grid container xs={12} justifyContent="space-between">
          <Stack spacing={2}>
            <Typography variant="body2" color="#808080" fontFamily="Poppins">
              Date of Application
            </Typography>
            <Typography variant="h6" fontFamily="Poppins">
              April 7, 2024
            </Typography>
          </Stack>
          <Stack spacing={2} alignItems="flex-end">
            <Typography variant="body2" color="#808080" fontFamily="Poppins">
              Status
            </Typography>
            {row.status}
          </Stack>
        </Grid>
        <Stack>
          <Typography variant="h6" fontFamily="Poppins">
            Loan Information
          </Typography>
          <Grid container xs={12} justifyContent="space-between" marginTop={4}>
            <Stack spacing={3}>
              <Typography variant="body2" color="#808080" fontFamily="Poppins" fontWeight="300">
                Beneficiary Name
              </Typography>
              <Typography variant="body2" color="#808080" fontFamily="Poppins" fontWeight="300">
                Phone Number
              </Typography>
              <Typography variant="body2" color="#808080" fontFamily="Poppins" fontWeight="300">
                Bank Name
              </Typography>
              <Typography variant="body2" color="#808080" fontFamily="Poppins" fontWeight="300">
                Requested Amount Range
              </Typography>
              <Typography variant="body2" color="#808080" fontFamily="Poppins" fontWeight="300">
                Interest Rate
              </Typography>
              <Typography variant="body2" color="#808080" fontFamily="Poppins" fontWeight="300">
                Duration
              </Typography>
            </Stack>
            <Stack spacing={3}>
              <Typography variant="body2" color="#808080" fontFamily="Poppins" fontWeight="300">
                {row.name}
              </Typography>
              <Typography variant="body2" color="#808080" fontFamily="Poppins" fontWeight="300">
                {row.phoneNumber}
              </Typography>
              <Typography variant="body2" color="#808080" fontFamily="Poppins" fontWeight="300">
                {row.bank}
              </Typography>
              <Typography variant="body2" color="#808080" fontFamily="Poppins" fontWeight="300">
                {row.amount}
              </Typography>
              <Typography variant="body2" color="#808080" fontFamily="Poppins" fontWeight="300">
                7%
              </Typography>
              <Typography variant="body2" color="#808080" fontFamily="Poppins" fontWeight="300">
                2years
              </Typography>
            </Stack>
          </Grid>
        </Stack>
        <Stack>
          <Typography variant="h6" fontFamily="Poppins">
            Application Document
          </Typography>
          <Grid container alignItems="center" justifyContent="space-between" spacing={2}>
            <Grid item>
              <Box display="flex" alignItems="center">
                <IconButton sx={{ padding: 0 }}>
                  <BsFileEarmarkFill fontSize="large" color="#53a9fd" size={24} />
                </IconButton>
                <Typography variant="body2" fontFamily="Poppins" color="#808080" marginLeft={1}>
                  Form.pdf (1MB)
                </Typography>
              </Box>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                startIcon={<MdOutlineFileDownload />}
                sx={{
                  borderRadius: 3,
                  color: '#199675',
                  borderColor: '#199675',
                  textTransform: 'none',
                }}
                href="/path/to/Form.pdf"
                download
              >
                Download
              </Button>
            </Grid>
          </Grid>
        </Stack>
        {disbursement && (
          <Stack>
            <Typography variant="h6" fontFamily="Poppins">
              Disbursement
            </Typography>
            <Grid container xs={12} justifyContent="space-between" marginTop={4}>
              <Stack spacing={3}>
                <Typography variant="body2" color="#808080" fontFamily="Poppins" fontWeight="300">
                  Status
                </Typography>
                <Typography variant="body2" color="#808080" fontFamily="Poppins" fontWeight="300">
                  Date
                </Typography>
                <Typography variant="body2" color="#808080" fontFamily="Poppins" fontWeight="300">
                  Amount
                </Typography>
                <Typography variant="body2" color="#808080" fontFamily="Poppins" fontWeight="300">
                  Transfer Method
                </Typography>
              </Stack>
              <Stack spacing={3} alignItems="flex-end">
                <Typography variant="body2" color="primary" fontFamily="Poppins" className="flex items-center justify-center gap-2">
                  <LuDot color="#4D95F3" size={25} />
                  Pending
                </Typography>
                <Typography variant="body2" color="#808080" fontFamily="Poppins" fontWeight="300">
                  -
                </Typography>
                <Typography variant="body2" color="#808080" fontFamily="Poppins" fontWeight="300">
                  -
                </Typography>
                <Typography variant="body2" color="#808080" fontFamily="Poppins" fontWeight="300">
                  -
                </Typography>
              </Stack>
            </Grid>
          </Stack>
        )}
        {bankApproved && (
          <Stack>
            <Typography variant="h6" fontFamily="Poppins">
              Disbursement
            </Typography>
            <Grid container xs={12} justifyContent="space-between" marginTop={4}>
              <Stack spacing={3}>
                <Typography variant="body2" color="#808080" fontFamily="Poppins" fontWeight="300">
                  Status
                </Typography>
                <Typography variant="body2" color="#808080" fontFamily="Poppins" fontWeight="300">
                  Date
                </Typography>
                <Typography variant="body2" color="#808080" fontFamily="Poppins" fontWeight="300">
                  Amount
                </Typography>
                <Typography variant="body2" color="#808080" fontFamily="Poppins" fontWeight="300">
                  Transfer Method
                </Typography>
              </Stack>
              <Stack spacing={3} alignItems="flex-end">
                <Typography variant="body2" color="#2EB760" fontFamily="Poppins" className="flex items-center justify-center gap-2">
                  <LuDot color="#2EB760" size={25} />
                  Disbursed
                </Typography>
                <Typography variant="body2" color="#808080" fontFamily="Poppins" fontWeight="300">
                  April 27, 2024
                </Typography>
                <Typography variant="body2" color="#808080" fontFamily="Poppins" fontWeight="300">
                  ₵300.00
                </Typography>
                <Typography variant="body2" color="#808080" fontFamily="Poppins" fontWeight="300">
                  Mobile money
                </Typography>
              </Stack>
            </Grid>
          </Stack>
        )}
        {pending && (
          <Stack sx={{ position: 'fixed', bottom: 0, right: 0, padding: 2, backgroundColor: 'white', zIndex: 1, width: 520 }}>
            <Grid container justifyContent="space-between" alignItems="center">
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
                  width: 150,
                }}
                onClick={() =>
                  UpdateStates(setState, undefined, undefined, {
                    value: state.value,
                    modalState: 'warning',
                    message: 'Are you sure you want to approve this loan?',
                    absentFormOpen: false,
                    rejectReason: '',
                  })
                }
                // onClick={() => handleOpenModal('warning', 'Are you sure you want to approve this loan?')}
              >
                Approve Loan
              </Button>

              <Button
                variant="contained"
                size="large"
                sx={{
                  borderRadius: 3,
                  backgroundColor: '#FA7D75',
                  fontFamily: 'Poppins',
                  textTransform: 'none',
                  fontSize: 10,
                  height: 40,
                  width: 150,
                }}
                onClick={() =>
                  UpdateStates(setState, undefined, undefined, {
                    value: state.value,
                    modalState: 'danger',
                    message: 'Are you sure you want to reject this loan?',
                    absentFormOpen: false,
                    rejectReason: '',
                  })
                }
                // onClick={() => handleOpenModal('danger', 'Are you sure you want to reject this loan?')}
              >
                Reject Loan
              </Button>
            </Grid>
          </Stack>
        )}
        {rejected && (
          <Box
            sx={{
              width: '100%',
              p: 2,
              borderRadius: 2,
              backgroundColor: '#E8F5F1B2',
            }}
          >
            <Stack spacing={2}>
              <Stack width="100%" direction="row" justifyContent="space-between" alignItems="center">
                <Typography gutterBottom sx={{ fontFamily: 'Poppins' }}>
                  Reason for Rejection
                </Typography>
                {!disbursement && (
                  <Typography gutterBottom className="flex items-center" sx={{ fontFamily: 'Poppins', color: '#999999' }}>
                    <MdEdit color="#999999" />
                    Edit
                  </Typography>
                )}
              </Stack>
              <Typography gutterBottom sx={{ color: '#0E5340', fontFamily: 'Poppins', fontWeight: '300' }}>
                User did not provide enough information.
              </Typography>
            </Stack>
          </Box>
        )}
      </Stack>
      <AlertModalNew
        isIcon
        modalStyle="flex flex-col justify-center items-center"
        open={state.modalState === 'success' || state.modalState === 'danger' || state.modalState === 'warning'}
        icon="warning"
        centered
        showOkBtn
        showCancelBtn
        okText={state.modalState === 'success' ? 'Yes, delete Plot' : state.modalState === 'warning' ? 'Yes, approve' : 'Yes, reject'}
        cancelText={
          state.modalState === 'success' ? "No, don't delete" : state.modalState === 'warning' ? "No, don't approve" : "No, don't reject"
        }
        message={state.message}
        onCancel={handleCloseModal}
        // onOk={handleCloseModal}
        onOk={() => {
          state.modalState === 'danger'
            ? UpdateStates(setState, undefined, undefined, {
                value: state.value,
                modalState: null,
                message: null,
                absentFormOpen: true,
                rejectReason: '',
                snackbarOpen: false,
                snackbarMessage: 'Loan approved successfully!',
              })
            : UpdateStates(setState, undefined, undefined, {
                value: state.value,
                modalState: null,
                message: '',
                absentFormOpen: false,
                rejectReason: '',
                snackbarOpen: true,
                snackbarMessage: 'Approval successful!',
              })
        }}
      />
      <SnackbarTemplate
        open={state.snackbarOpen}
        autoHideDuration={3000}
        onClose={() =>
          UpdateStates(setState, undefined, undefined, {
            value: 0,
            modalState: null,
            message: '',
            absentFormOpen: false,
            snackbarOpen: false,
          })
        }
        severity="success"
        message={state.snackbarMessage}
      />
      <AbsentFormModal
        open={state.absentFormOpen}
        okHandler={() => UpdateStates(setState, undefined, undefined, { value: 0, modalState: null, message: '', absentFormOpen: false })}
        cancelHandler={() =>
          UpdateStates(setState, undefined, undefined, { value: 0, modalState: null, message: '', absentFormOpen: false })
        }
        title="Provide reason for rejection of loan"
        okText="Submit"
        cancelText="Cancel"
        customComponent={
          <>
            {/* <p className="text-gray-800 pb-5 pt-8">{`Please provide a brief explanation for your absence from class`}</p> */}
            <InputsTemplateNew
              isTextarea
              name={'reasonTextField'}
              placeholder="Type here..."
              //   classname="h-40"
              fullWidth
              rowsHeight={5}
              borderRadius="10px"
              currentValue={state.rejectReason}
              handleChange={(e: any) => {
                UpdateStates(setState, 'rejectReason', e.target.value)
                console.log('reason', e)
              }}
            />
            <div className="flex flex-row-reverse mt-10 w-full gap-5">
              <ButtonTemplate
                handleClick={() => {
                  UpdateStates(setState, undefined, undefined, {
                    value: 0,
                    modalState: null,
                    message: '',
                    absentFormOpen: false,
                    snackbarOpen: true,
                    snackbarMessage: 'Reason saved successfully!',
                  })
                }}
                // classname="px-2 py-2 text-white bg-[#013D84]"
                isText
                text="Submit"
              />
              <ButtonTemplate
                handleClick={() => {
                  UpdateStates(setState, undefined, undefined, { value: 0, modalState: null, message: '', absentFormOpen: false })
                }}
                styles={{ backgroundColor: '#C5C5C5' }}
                // classname="mr-2 px-8 py-2 text-white bg-gray-400"
                isText
                text="Cancel"
              />
            </div>
          </>
        }
      />
    </>
  )
}
