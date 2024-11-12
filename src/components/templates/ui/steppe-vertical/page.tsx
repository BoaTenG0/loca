import { useState } from 'react'

// material-ui
import {
  Box,
  Button,
  Step,
  Stepper,
  StepContent,
  StepLabel,
  Typography,
  Stack,
  TextField,
  OutlinedInput,
  InputAdornment,
  StepIconProps,
} from '@mui/material'
import MainCard from '../card/main-card'
import Image from 'next/image'
import { Send2 } from 'iconsax-react'
import { IoIosCheckmark } from 'react-icons/io'

// project-imports

interface StepInfo {
  label: string
  description: string
  apr?: string
}

const steps: StepInfo[] = [
  {
    label: 'Growing stage 1',
    description: `Stage Complete`,
    apr: '7 apr',
  },
  {
    label: 'Growing stage 2',
    description: 'Stage Complete',
    apr: '12 apr',
  },
  {
    label: 'Growing stage 3',
    description: `Stage Complete`,
    apr: '19 apr',
  },
  {
    label: 'Growing stage 4',
    description: `Stage Complete`,
    apr: '22 apr',
  },
]

function CustomStepIcon(props: StepIconProps) {
  const { active, completed, className } = props

  return (
    <div
      className={className}
      style={{
        color: completed || active ? '#fff' : '#000',
        backgroundColor: active ? '#199675' : completed ? '#199675' : '#ccc',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 24,
        height: 24,
        padding: 4,
        fontFamily: 'Poppins',
      }}
    >
      {completed ? <IoIosCheckmark /> : props.icon}
    </div>
  )
}
// ==============================|| STEPPER - VERTICAL ||============================== //

export default function VerticalLinearStepper() {
  const [stepState, setStepState] = useState<{ activeStep: number; comments: string[] }>({
    activeStep: 0,
    comments: Array(steps.length).fill(''),
  })

  const handleNext = () => setStepState((prev) => ({ ...prev, activeStep: prev.activeStep + 1 }))
  const handleBack = () => setStepState((prev) => ({ ...prev, activeStep: prev.activeStep - 1 }))
  const handleReset = () => setStepState({ activeStep: 0, comments: Array(steps.length).fill('') })

  const handleCommentChange = (index: number, value: string) => {
    const newComments = [...stepState.comments]
    newComments[index] = value
    setStepState((prev) => ({ ...prev, comments: newComments }))
  }

  return (
    <MainCard sx={{ boxShadow: 'none', border: 'none' }}>
      <Stepper activeStep={stepState.activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === 2 ? (
                  <Typography variant="caption" sx={{ fontFamily: 'Poppins' }}>
                    Last step
                  </Typography>
                ) : null
              }
              StepIconComponent={CustomStepIcon}
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Stack direction="row" alignItems="center" gap={2}>
                <Typography sx={{ fontFamily: 'Poppins', color: '#808080', fontSize: 12, fontWeight: 500 }}>{step.description}:</Typography>
                <Typography sx={{ fontFamily: 'Poppins', color: '#199675', fontSize: 12, fontWeight: 500 }}>{step.apr}</Typography>
              </Stack>
              <Stack spacing={2} marginY={5}>
                <Typography sx={{ fontFamily: 'Poppins', color: '#808080', fontSize: 12, fontWeight: 500 }}>Comments</Typography>
                <Stack direction="row" gap={2} alignItems="start">
                  <Image
                    width={112}
                    height={112}
                    src="/images/user/user-06.png"
                    style={{
                      width: 'auto',
                      height: 'auto',
                    }}
                    alt="User"
                    className="overflow-hidden rounded-full"
                  />
                  <Stack spacing={2}>
                    <Typography sx={{ fontFamily: 'Poppins', fontSize: 12, fontWeight: 500 }}>
                      Extension Officer - <span style={{ color: '#199675' }}>Brown Carl</span>{' '}
                    </Typography>
                    <Typography sx={{ fontFamily: 'Poppins', color: '#808080', fontSize: 12, fontWeight: 500 }}>
                      Hope you irrigated the plants well. Hope you irrigated the plants well Hope you irrigated the plants well
                    </Typography>
                    <span style={{ color: '#65B9A3', fontFamily: 'Poppins', fontSize: 10, fontStyle: 'italic' }}>03:12 p.m</span>
                  </Stack>
                </Stack>

                <OutlinedInput
                  id="comment"
                  type="text"
                  value={stepState.comments[index]}
                  onChange={(e) => handleCommentChange(index, e.target.value)}
                  name="comment"
                  //   onBlur={handleBlur}
                  placeholder="Leave a comment"
                  fullWidth
                  style={{ borderRadius: 15, paddingBlock: 0, backgroundColor: '#F2F2F2', height: 40 }}
                  sx={{
                    '&.Mui-focused': {
                      border: 'none',
                      boxShadow: '0px 4px 12px rgba(232, 245, 241, 1)',
                    },
                  }}
                  endAdornment={
                    <InputAdornment position="end">
                      <Button onClick={() => {}} sx={{ padding: 0 }}>
                        <Send2 color="#199675" />
                      </Button>
                    </InputAdornment>
                  }
                />
              </Stack>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1, textTransform: 'none', backgroundColor: '#e8f5f1', color: '#808080', fontFamily: 'Poppins' }}
                    color={index === steps.length - 1 ? 'success' : 'primary'}
                  >
                    {index === steps.length - 1 ? 'Finish' : 'Continue'}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1, color: '#199675', fontFamily: 'Poppins', textTransform: 'none' }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {stepState.activeStep === steps.length && (
        <Box sx={{ pt: 2 }}>
          <Typography sx={{ color: 'success.main' }}>All steps completed - you&apos;re finished</Typography>
          <Button
            size="small"
            variant="contained"
            color="error"
            onClick={handleReset}
            sx={{ mt: 1, mr: 1, backgroundColor: '#FA7D75', color: '#808080', fontFamily: 'Poppins', textTransform: 'none' }}
          >
            Reset
          </Button>
        </Box>
      )}
    </MainCard>
  )
}
