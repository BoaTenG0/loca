import { Box, Button, Chip, Grid, Stack, Typography } from '@mui/material'
import { useState } from 'react'
import PlotTabs from '../plot-tabs/page'
import { TabPanel } from '@/components/templates/ui/TabPanel/tab-panel'
import VerticalLinearStepper from '@/components/templates/ui/steppe-vertical/page'
import { Clock } from 'iconsax-react'
import { FaCheckCircle } from 'react-icons/fa'
import AlertModalNew from '@/components/templates/ui/dialogs/alert-modal-new'
import LocationMap from '@/components/templates/ui/map/map'
import CustomStepper from '@/components/templates/ui/steppe-vertical/customStepper'

type RowData = {
  id: number
  name: string
  plotName: string
  cropType: string
  location: string
  status: string
}

export const DetailsView: React.FC<{ row: RowData; growingStage?: boolean }> = ({ row, growingStage }) => {
  const [state, setState] = useState<{ value: number; modalState: string | null; message: string | null }>({
    value: 0,
    modalState: null,
    message: null,
  })

  const handleChange = (event: any, newValue: number) => {
    setState((prevState) => ({ ...prevState, value: newValue }))
  }

  const handleOpenModal = (type: string, message: string) => {
    setState({ value: state.value, modalState: type, message })
  }

  const handleCloseModal = () => {
    setState((prevState) => ({ ...prevState, modalState: null, message: null }))
  }

  const tabLabels = [{ name: 'Growing Stages' }, { name: 'Farm Issues', count: 14 }, { name: 'Map View of Plot' }]
  const issues = [
    { id: 0, name: 'Fall Armyworm infestation', date: '20 APR 2024', resolved: true },
    { id: 1, name: 'Fall Armyworm infestation', date: '20 APR 2024', resolved: false },
    { id: 2, name: 'Fall Armyworm infestation', date: '20 APR 2024', resolved: false },
  ]

  return (
    <>
      <Stack spacing={5} padding={2} sx={{ position: 'relative' }}>
        <Grid container xs={12} justifyContent="space-between">
          <Stack spacing={2}>
            <Typography variant="body2" color="#808080" fontFamily="Poppins" fontWeight="300">
              Plot Registration Date
            </Typography>
            <Typography variant="h6" fontFamily="Poppins">
              April 7, 2024
            </Typography>
          </Stack>
          <Stack spacing={2} alignItems="flex-end">
            <Typography variant="body2" color="#808080" fontFamily="Poppins" fontWeight="300">
              Status
            </Typography>
            {row.status}
          </Stack>
        </Grid>
        <Stack>
          <Typography variant="h6" fontFamily="Poppins">
            Plot Information
          </Typography>
          <Grid container xs={12} justifyContent="space-between" marginTop={4}>
            <Stack spacing={3}>
              <Typography variant="body2" color="#808080" fontFamily="Poppins" fontWeight="300">
                Farmer Name
              </Typography>
              <Typography variant="body2" color="#808080" fontFamily="Poppins" fontWeight="300">
                Plot Name
              </Typography>
              <Typography variant="body2" color="#808080" fontFamily="Poppins" fontWeight="300">
                Crop Type
              </Typography>
              <Typography variant="body2" color="#808080" fontFamily="Poppins" fontWeight="300">
                Location
              </Typography>
              <Typography variant="body2" color="#808080" fontFamily="Poppins" fontWeight="300">
                Size
              </Typography>
              <Typography variant="body2" color="#808080" fontFamily="Poppins" fontWeight="300">
                Sowing Date
              </Typography>
            </Stack>
            <Stack spacing={3}>
              <Typography variant="body2" color="#808080" fontFamily="Poppins" fontWeight="300">
                {row.name}
              </Typography>
              <Typography variant="body2" color="#808080" fontFamily="Poppins" fontWeight="300">
                {row.plotName}{' '}
              </Typography>
              <Typography variant="body2" color="#808080" fontFamily="Poppins" fontWeight="300">
                {row.cropType}
              </Typography>
              <Typography variant="body2" color="#808080" fontFamily="Poppins" fontWeight="300">
                {row.location}
              </Typography>
              <Typography variant="body2" color="#808080" fontFamily="Poppins" fontWeight="300">
                2 Acres
              </Typography>
              <Typography variant="body2" color="#808080" fontFamily="Poppins" fontWeight="300">
                January 3, 2023
              </Typography>
            </Stack>
          </Grid>
        </Stack>
        {growingStage && (
          <Grid>
            <Stack spacing={3}>
              <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <PlotTabs value={state.value} handleChange={handleChange} labels={tabLabels} />
                </Box>
                <TabPanel value={state.value} index={0}>
                  <Stack sx={{ py: 5 }}>
                    <CustomStepper />
                  </Stack>
                </TabPanel>
                <TabPanel value={state.value} index={1}>
                  <Stack spacing={3} sx={{ py: 5 }}>
                    {issues.map((issue) => (
                      <>
                        <Typography variant="subtitle2" sx={{ flexGrow: 1, ml: 2, fontFamily: 'Poppins' }}>
                          {issue.name}
                        </Typography>
                        <Box
                          key={issue.id}
                          sx={{
                            p: 1,
                            borderRadius: 2,
                            backgroundColor: '#f5f5f5',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                          }}
                        >
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Clock fontSize="small" style={{ marginRight: 1 }} />
                            <Typography variant="body2" sx={{ fontFamily: 'Poppins' }}>
                              {issue.date}
                            </Typography>
                          </Box>

                          <Chip
                            label={issue.resolved ? 'Resolved' : 'Unresolved'}
                            icon={issue.resolved ? <FaCheckCircle /> : <FaCheckCircle />}
                            color={issue.resolved ? 'success' : 'default'}
                            variant="outlined"
                            sx={{ fontFamily: 'Poppins', backgroundColor: issue.resolved ? '#fff' : '', width: 110 }}
                          />
                        </Box>
                      </>
                    ))}
                  </Stack>
                </TabPanel>
                <TabPanel value={state.value} index={2}>
                  <Stack sx={{ py: 5 }}>
                    <LocationMap />
                  </Stack>
                </TabPanel>
              </Box>
            </Stack>
          </Grid>
        )}
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
              onClick={() => handleOpenModal('warning', 'Are you sure you want to edit this plot?')}
            >
              Edit Plot Details
            </Button>
            <div className="flex space-x-4">
              <Button
                variant="contained"
                size="large"
                sx={{
                  borderRadius: 3,
                  backgroundColor: '#F2F2F2',
                  fontFamily: 'Poppins',
                  textTransform: 'none',
                  fontSize: 10,
                  color: '#808080',
                  height: 40,
                  width: 150,
                }}
                onClick={() => handleOpenModal('danger', 'Are you sure you want to deactivate this plot?')}
              >
                Deactivate Plot
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
                onClick={() => handleOpenModal('success', 'Are you sure you want to delete this plot?')}
              >
                Delete Plot
              </Button>
            </div>
          </Grid>
        </Stack>
      </Stack>
      <AlertModalNew
        isIcon
        modalStyle="flex flex-col justify-center items-center"
        open={state.modalState === 'success' || state.modalState === 'danger' || state.modalState === 'warning'}
        icon="warning"
        centered
        showOkBtn
        showCancelBtn
        okText={state.modalState === 'success' ? 'Yes, delete Plot' : state.modalState === 'warning' ? 'Yes edit' : 'Yes, deactivate Plot'}
        cancelText={
          state.modalState === 'success' ? "No, don't delete" : state.modalState === 'warning' ? "No, don't edit" : "No, don't deactivate"
        }
        message={state.message}
        onCancel={handleCloseModal}
        onOk={handleCloseModal}
      />
    </>
  )
}
