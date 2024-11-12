import React, { useState } from 'react'
import { Stepper, Step, StepLabel, Button, Typography, CircularProgress, StepIconProps } from '@mui/material'
import { Formik, Form } from 'formik'

import checkoutFormModel from './form-model/preview-form-model'
import formInitialValues from './form-model/initial-values'

import useStyles from './styles'
import TrainingTitleForm from './form/traing-title-form'
import ReviewOrder from './preview'
import validationSchema from './form-model/validation-schema'
import CheckoutSuccess from './program-success'
import LearnForm from './form/what-you-learn'
import RequirementForm from './form/requirement'
import CourseContentForm from './form/course-content'
import { IoIosCheckmark } from 'react-icons/io'
import ButtonTemplate from '../../../button/button'
import { color } from 'framer-motion'
import PaymentDetails from './preview/shipping-details'

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

const steps = ['Training Title', 'What you will learn', 'Requirement', 'Course Content', 'Preview']
const { formId, formField } = checkoutFormModel

function _renderStepContent(step: number) {
  switch (step) {
    case 0:
      return <TrainingTitleForm formField={formField} />
    case 1:
      return <LearnForm formField={formField} />
    case 2:
      return <RequirementForm formField={formField} />
    case 3:
      return <CourseContentForm formField={formField} />
    case 4:
      return <PaymentDetails currentStep={step} />
    default:
      return <div>Not Found</div>
  }
}
interface Props {
  onClick: () => void
  role?: any
}

export default function CheckoutPage({ onClick }: Props) {
  const [activeStep, setActiveStep] = useState(0)
  const currentValidationSchema = validationSchema[activeStep]
  const isLastStep = activeStep === steps.length - 1

  function _sleep(ms: number | undefined) {
    return new Promise((resolve) => setTimeout(resolve, ms))
  }

  async function _submitForm(values: any, actions: { setSubmitting: (arg0: boolean) => void }) {
    await _sleep(1000)
    alert(JSON.stringify(values, null, 2))
    actions.setSubmitting(false)

    setActiveStep(activeStep + 1)
  }

  function _handleSubmit(values: any, actions: { setTouched?: any; setSubmitting: any }) {
    if (isLastStep) {
      _submitForm(values, actions)
    } else {
      setActiveStep(activeStep + 1)
      actions.setTouched({})
      actions.setSubmitting(false)
    }
  }

  function _handleBack() {
    setActiveStep(activeStep - 1)
  }

  return (
    <React.Fragment>
      <Stepper activeStep={activeStep} className="mb-6">
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={CustomStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <React.Fragment>
        {activeStep === steps.length ? (
          <CheckoutSuccess />
        ) : (
          <Formik initialValues={formInitialValues} validationSchema={currentValidationSchema} onSubmit={_handleSubmit}>
            {({ isSubmitting }) => (
              <Form id={formId}>
                {_renderStepContent(activeStep)}

                <div
                  // className={classes.buttons}
                  style={{
                    marginTop: activeStep > 0 && activeStep !== 3 ? 150 : 0,
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    // marginRight: 10
                    paddingInline: 50,
                  }}
                >
                  <ButtonTemplate
                    btnType="text"
                    label={'Cancel'}
                    handleClick={onClick}
                    styles={{ color: '#000', backgroundColor: 'transparent' }}
                  />

                  <div
                    className="flex items-center relative"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    {activeStep !== 0 && (
                      <ButtonTemplate
                        btnType="text"
                        label={'Back'}
                        handleClick={_handleBack}
                        styles={{ backgroundColor: 'transparent', color: '#000' }}
                      />
                      // <Button onClick={_handleBack} variant="text" className={classes.button}>
                      //   Back
                      // </Button>
                    )}
                    {isLastStep ? null : (
                      <ButtonTemplate
                        isDisabled={isSubmitting}
                        label={'save & continue'}
                        // styles={{ backgroundColor: '#199675' }}
                      />
                    )}
                    {/* <Button
                      disabled={isSubmitting}
                      type="submit"
                      variant="contained"
                      // className={classes.button}
                      style={{ backgroundColor: '#199675', textTransform: 'none', color: '#fff', borderRadius: '20px' }}
                    >
                      {isLastStep ? 'Submit' : 'save & continue'}
                    </Button> */}
                    {isSubmitting && <CircularProgress size={24} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />}
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        )}
      </React.Fragment>
    </React.Fragment>
  )
}
