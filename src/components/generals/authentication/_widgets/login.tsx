/* eslint-disable unicorn/no-nested-ternary */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable unicorn/no-negated-condition */
'use client'
import { Grid, Button, Typography, FormHelperText, Stack, InputAdornment, IconButton, InputLabel, OutlinedInput } from '@mui/material'
import Image from 'next/image'
import { Formik } from 'formik'
import { useState } from 'react'
import { ArrowLeft, Eye, EyeSlash } from 'iconsax-react'
// import Link from 'next/link'
import image7 from '../../../../assets/images/image7.png'
import locagri_logo from '../../../../assets/images/locagri_logo.png'
import React from 'react'
import { OTPInput } from 'input-otp'
import { Slot } from './slot'
import { useRouter } from 'next/navigation'
import { initialValues, Schema } from '../../view-details/edit-details/form/schemas'
import * as Yup from 'yup'

const handleMouseDownPassword = (event: React.FormEvent) => {
  event.preventDefault()
}
const LoginScreen = () => {
  const route = useRouter()
  const [capsWarning, setCapsWarning] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [isOtpMode, setIsOtpMode] = useState(false)
  const [isResetPasswordMode, setIsResetPasswordMode] = useState(false)
  const [isResetPassword, setIsResetPassword] = useState(false)

  //   const [otp, setOtp] = useState('')
  //   const handleChange = (newValue: React.SetStateAction<string>) => {
  //     setOtp(newValue)
  //   }

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const onKeyDown = (keyEvent: React.KeyboardEvent) => {
    if (keyEvent.getModifierState('CapsLock')) {
      setCapsWarning(true)
    } else {
      setCapsWarning(false)
    }
  }
  const handleVerifyOtp = () => {
    route.push('/en/admin')
  }

  return (
    <Grid container className="w-full h-full flex  flex-wrap justify-center items-center bg-white pb-5 md:pb-0">
      <Grid
        item
        xs={12}
        md={6}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden', height: '100vh' }}
      >
        <Image
          src={image7}
          alt="Background Image"
          style={{
            width: '100%',
            // maxHeight: '777px',
            height: '100%',
            objectFit: 'cover',
            // borderTopRightRadius: 10,
            // borderBottomRightRadius: 10,
          }}
        />
      </Grid>
      <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingX: 5 }}>
        <Grid style={{ paddingInline: 20 }}>
          <Image src={locagri_logo} alt="locagri_logo" style={{ width: '20%', marginTop: -100, paddingBottom: 30 }} />

          {isOtpMode ? (
            // OTP Form
            <Stack spacing={3} sx={{ marginTop: 5 }} direction="column" justifyContent="flex-start" alignItems="flex-start">
              <Button onClick={() => setIsOtpMode(false)} sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'start' }}>
                <ArrowLeft color="#000" style={{ marginLeft: -10 }} />
              </Button>
              <Typography variant="h4" sx={{ marginTop: 5, marginBottom: 2, fontWeight: 'bold' }} className="text-black">
                Enter Your OTP Code
              </Typography>
              <Typography variant="body1" className="text-gray-400 text-sm">
                We’ve sent a <span style={{ color: '#199675' }}>one-time password (OTP) </span>
                to your email address. Please enter the <span style={{ color: '#199675' }}>6-digit code </span> below to verify your
                account.
              </Typography>

              <OTPInput
                maxLength={6}
                containerClassName="group flex items-center has-[:disabled]:opacity-30"
                render={({ slots }) => (
                  <>
                    <div className="flex flex-1">
                      {slots.slice(0, 3).map((slot, idx) => (
                        <Slot key={idx} {...slot} />
                      ))}
                    </div>

                    {/* <FakeDash /> */}

                    <div className="flex flex-1">
                      {slots.slice(3).map((slot, idx) => (
                        <Slot key={idx} {...slot} />
                      ))}
                    </div>
                  </>
                )}
              />
              {isResetPasswordMode ? (
                <Button
                  fullWidth
                  size="large"
                  variant="contained"
                  style={{ backgroundColor: '#199675', borderRadius: 10, textTransform: 'none', fontFamily: 'Poppins' }}
                  //  onClick={() => setIsResetPassword(true)}
                >
                  Reset Password
                </Button>
              ) : (
                <Button
                  fullWidth
                  size="large"
                  variant="contained"
                  style={{ backgroundColor: '#808080', borderRadius: 10, textTransform: 'none', fontFamily: 'Poppins' }}
                  onClick={handleVerifyOtp}
                >
                  Verify OTP
                </Button>
              )}
              <Button
                fullWidth
                size="large"
                style={{
                  borderColor: '#199675',
                  borderWidth: 1,
                  borderStyle: 'solid',
                  borderRadius: 10,
                  color: '#199675',
                  textTransform: 'none',
                  fontFamily: 'Poppins',
                }}
              >
                Resend OTP
              </Button>
            </Stack>
          ) : isResetPasswordMode ? (
            // Reset Form
            <Stack spacing={3} sx={{ marginTop: 5 }} direction="column" justifyContent="flex-start" alignItems="flex-start">
              {/* <Button
                onClick={() => setIsResetPasswordMode(false)}
                sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'start' }}
              >
                <ArrowLeft color="#000" style={{ marginLeft: -10 }} />
              </Button> */}
              <Typography
                variant="h4"
                sx={{ marginTop: 5, marginBottom: 2, fontWeight: 'bold', fontFamily: 'Poppins' }}
                className="text-black"
              >
                Reset Your Password
              </Typography>
              <Typography variant="body1" className="text-gray-400 text-sm">
                Enter your registered email address, and we’ll send you instructions to reset your password.
              </Typography>

              <Formik
                initialValues={{
                  resetEmail: '',
                  submit: undefined,
                }}
                // validationSchema={Schema}
                validationSchema={Yup.object({
                  resetEmail: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
                })}
                onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                  try {
                    setIsOtpMode(true)
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
                {({ errors, handleBlur, handleChange, handleSubmit, touched, values }) => (
                  <form noValidate onSubmit={handleSubmit} style={{ width: '100%' }}>
                    <Grid item xs={12}>
                      <Stack spacing={1}>
                        <InputLabel htmlFor="reset-email" sx={{ color: '#0E5340', fontWeight: 'bold', fontFamily: 'Poppins' }}>
                          Email Address
                        </InputLabel>
                        <OutlinedInput
                          id="reset-email"
                          type="email"
                          value={values.resetEmail}
                          name="resetEmail"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          placeholder="Enter email address"
                          fullWidth
                          error={Boolean(touched.resetEmail && errors.resetEmail)}
                          style={{ borderRadius: 15 }}
                        />
                        {touched.resetEmail && errors.resetEmail && (
                          <FormHelperText error id="standard-weight-helper-text-reset-email">
                            {errors.resetEmail}
                          </FormHelperText>
                        )}
                      </Stack>
                    </Grid>
                    <Grid item xs={12} sx={{ mt: 10, gap: 3, display: 'flex', flexDirection: 'column', fontFamily: 'Poppins' }}>
                      <Button
                        fullWidth
                        size="large"
                        type="submit"
                        variant="contained"
                        style={{ backgroundColor: '#199675', borderRadius: 10, textTransform: 'none', fontFamily: 'Poppins' }}
                      >
                        Send Reset Link
                      </Button>
                      <Button
                        onClick={() => setIsResetPasswordMode(false)}
                        fullWidth
                        size="large"
                        style={{
                          borderColor: '#199675',
                          borderWidth: 1,
                          borderStyle: 'solid',
                          borderRadius: 10,
                          color: '#199675',
                          textTransform: 'none',
                          gap: 5,
                          fontFamily: 'Poppins',
                        }}
                      >
                        <ArrowLeft /> Return To Login
                      </Button>
                    </Grid>
                  </form>
                )}
              </Formik>
            </Stack>
          ) : isResetPassword ? (
            <p>hell</p>
          ) : (
            <Grid>
              <Typography variant="h4" sx={{ marginTop: 5, marginBottom: 2, fontFamily: 'Poppins' }} className="text-black">
                Admin Portal Login
              </Typography>
              <Typography className="locagri-paragraph text-gray-400">
                Log in to manage users, services, and farm activities securely.
              </Typography>
              <Formik
                initialValues={{
                  email: '',
                  password: '',
                  submit: undefined,
                }}
                validationSchema={Yup.object({
                  email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
                  password: Yup.string().max(255).required('Password is required'),
                })}
                onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                  console.log('🚀 ~ onSubmit={ ~ values:', values)
                  try {
                    setIsOtpMode(true)
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
                    <Grid container spacing={3} sx={{ marginTop: 2 }}>
                      <Grid item xs={12}>
                        <Stack spacing={1}>
                          <InputLabel htmlFor="email-login" sx={{ color: '#0E5340', fontWeight: 'bold', fontFamily: 'Poppins' }}>
                            Email Address
                          </InputLabel>
                          <OutlinedInput
                            id="email-login"
                            type="email"
                            value={values.email}
                            name="email"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            placeholder="Enter email address"
                            fullWidth
                            error={Boolean(touched.email && errors.email)}
                            style={{ borderRadius: 15 }}
                          />
                          {touched.email && errors.email && (
                            <FormHelperText error id="standard-weight-helper-text-email-login">
                              {errors.email}
                            </FormHelperText>
                          )}
                        </Stack>
                      </Grid>
                      <Grid item xs={12}>
                        <Stack spacing={1}>
                          <InputLabel htmlFor="password-login" sx={{ color: '#0E5340', fontWeight: 'bold', fontFamily: 'Poppins' }}>
                            Password
                          </InputLabel>
                          <OutlinedInput
                            fullWidth
                            color={capsWarning ? 'warning' : 'primary'}
                            error={Boolean(touched.password && errors.password)}
                            id="-password-login"
                            type={showPassword ? 'text' : 'password'}
                            value={values.password}
                            name="password"
                            onBlur={(event) => {
                              setCapsWarning(false)
                              handleBlur(event)
                            }}
                            onKeyDown={onKeyDown}
                            onChange={handleChange}
                            endAdornment={
                              <InputAdornment position="end">
                                <IconButton
                                  aria-label="toggle password visibility"
                                  onClick={handleClickShowPassword}
                                  onMouseDown={handleMouseDownPassword}
                                  edge="end"
                                  color="secondary"
                                >
                                  {showPassword ? <Eye color="#199675" /> : <EyeSlash color="#199675" />}
                                </IconButton>
                              </InputAdornment>
                            }
                            placeholder="Enter password"
                            style={{ borderRadius: 15 }}
                          />
                          {capsWarning && (
                            <Typography variant="caption" sx={{ color: 'warning.main' }} id="warning-helper-text-password-login">
                              Caps lock on!
                            </Typography>
                          )}
                          {touched.password && errors.password && (
                            <FormHelperText error id="standard-weight-helper-text-password-login">
                              {errors.password}
                            </FormHelperText>
                          )}
                        </Stack>
                      </Grid>
                      <Grid item xs={12} sx={{ mt: -1 }}>
                        <Stack direction="row" justifyContent="flex-end" alignItems="center" spacing={2}>
                          {/* <Link href="/forgot-password" className="text-gray-400">
                            Forgot Password?
                          </Link> */}
                          <Button
                            onClick={() => setIsResetPasswordMode(true)}
                            style={{ color: '#0E5340', textTransform: 'none', textDecoration: 'underline', fontFamily: 'Poppins' }}
                          >
                            Forgot Password?
                          </Button>
                        </Stack>
                      </Grid>
                      {errors.submit && (
                        <Grid item xs={12}>
                          <FormHelperText error>{errors.submit}</FormHelperText>
                        </Grid>
                      )}
                      <Grid item xs={12}>
                        <Button
                          disableElevation
                          disabled={isSubmitting}
                          fullWidth
                          size="large"
                          type="submit"
                          variant="contained"
                          style={{ backgroundColor: '#199675', borderRadius: 10, fontFamily: 'Poppins', textTransform: 'none' }}
                        >
                          Log In
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                )}
              </Formik>
            </Grid>
          )}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default LoginScreen

// You can emulate a fake textbox caret!

function FakeDash() {
  return (
    <div className="flex w-20 justify-center items-center">
      <div className="w-3 h-1 rounded-full bg-border" />
    </div>
  )
}
