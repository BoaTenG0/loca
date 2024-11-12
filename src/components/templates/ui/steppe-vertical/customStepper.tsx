import React, { useState } from 'react'
import { FaCheckCircle } from 'react-icons/fa'
import { IoChevronUpSharp, IoChevronDownSharp, IoChevronForwardOutline } from 'react-icons/io5'
import { Send2 } from 'iconsax-react'
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
  Collapse,
  IconButton,
} from '@mui/material'
import Image from 'next/image'

const CustomStepper = () => {
  // Track which step is expanded
  const [expandedStep, setExpandedStep] = useState(0)

  const steps = [
    {
      label: 'Growing stage 1',
      stat: 'completed',
      status: 'Stage completed',
      timeAgo: '7 ago',
      type: 'Germination',
      comments: [
        {
          author: 'Operation officer',
          avatarUrl: '/api/placeholder/32/32',
          text: 'Process has started the picnic value has triggered the picket and slice was accepted',
          time: '10:40 am',
        },
      ],
    },
    {
      label: 'Growing stage 2',
      stat: 'pending',
      status: 'Stage completed',
      timeAgo: '5 ago',
      type: 'Germination',
    },
    {
      label: 'Growing stage 3',
      stat: 'pending',
      status: 'Stage completed',
      timeAgo: '3 ago',
      type: 'Germination',
    },
    {
      label: 'Growing stage 4',
      stat: 'pending',
      status: 'Stage completed',
      timeAgo: '2 ago',
      type: 'Germination',
    },
  ]

  const handleStepClick = (index: React.SetStateAction<number>) => {
    setExpandedStep(expandedStep === index ? -1 : index)
  }

  return (
    <Box className="max-w-xl bg-white relative">
      {steps.map((step, index) => (
        <div key={step.label} className="relative">
          {/* Vertical line connector */}
          {index !== steps.length - 1 && (
            <div
              className="absolute left-[28px] top-[40px] w-[2px] bg-gradient-to-b from-green-500 to-gray-200"
              style={{
                height: 'calc(100% - 40px)',
                opacity: step.stat === 'completed' ? 1 : 0.3,
              }}
            />
          )}

          {/* Step container */}
          <div className="relative">
            <button onClick={() => handleStepClick(index)} className="w-full px-4 py-3 flex items-start space-x-4  transition-colors">
              {/* Status circle */}
              <div
                className={`mt-1 w-6 h-6 rounded-full flex items-center justify-center shrink-0
                ${step.stat === 'completed' ? 'bg-green-500' : 'bg-gray-200'}`}
              >
                {step.stat === 'completed' ? (
                  <FaCheckCircle className="w-4 h-4 text-white" />
                ) : (
                  <div className="w-2 h-2 bg-white rounded-full" />
                )}
              </div>

              {/* Content */}
              <Box width="100%" display="flex" flexDirection="column" alignItems="flex-start">
                <Box width={'100%'} display="flex" justifyContent="space-between" alignItems="center">
                  <Typography variant="subtitle1" className="font-medium" color="textPrimary">
                    {step.label}
                  </Typography>
                  <IconButton>
                    {expandedStep === index ? (
                      <IoChevronUpSharp style={{ fontSize: 20, color: '#6B7280' }} />
                    ) : (
                      <IoChevronDownSharp style={{ fontSize: 20, color: '#6B7280' }} />
                    )}
                  </IconButton>
                </Box>
                <Typography variant="caption" color="#6B7280" align="left">
                  Stage Complete: {step.timeAgo}
                </Typography>
              </Box>
            </button>

            {/* Collapsible content */}
            <Collapse in={expandedStep === index}>
              <div className="ml-14 mr-4 mb-4">
                {step.comments?.map((comment, i) => (
                  <Stack spacing={2} marginY={3}>
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
                      // value={stepState.comments[index]}
                      // onChange={(e) => handleCommentChange(index, e.target.value)}
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
                ))}
              </div>
            </Collapse>
          </div>
        </div>
      ))}
    </Box>
  )
}

export default CustomStepper
