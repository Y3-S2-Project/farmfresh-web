import { Box, Typography } from '@mui/material'
import { useFormik } from 'formik'
import React, { useCallback } from 'react'
import FFForm from '../../molecules/FFForm/FFForm'
import FFTextField from '../../atoms/FFInputField/FFTextField'
import FFButton from '../../atoms/FFButton/FFButton'
import RightArrowIcon from '../../../assets/icons/RightArrowIcon'

const ForgetPWContents = () => {
  const initialValues = {
    email: '',
  }

  const onSubmit = async (values) => {
    Auth.forgotPassword(values.workEmail)
      .then(async (_data) => {
        await router.push({
          pathname: '/resetpassword',
          query: { fpw: 'true' },
        })
        sessionStorage.setItem('fpwWorkEmail', values.workEmail)
      })
      .catch((err) => formik.setFieldError('workEmail', err.message))
  }

  const formik = useFormik({
    initialValues,
    validationSchema: null,
    onSubmit,
    validateOnChange: false,
  })

  const { values, errors, handleChange, handleSubmit } = formik

  const handleInput = useCallback(
    (event) => {
      if (event.target) formik.setFieldError(event.target.name, '')
    },
    [formik],
  )
  return (
    <Box>
      <Typography
        variant="body1"
        component="p"
        sx={{ mb: '16px' }}
        tabIndex={0}
      >
        Enter your email and we’ll send you a verification code to reset your
        password
      </Typography>
      <FFForm onSubmit={handleSubmit}>
        <FFTextField
          label="Current Password"
          type="password"
          value={values.email}
          onChange={handleChange}
          labelClassName="block text-base font-medium text-black"
          inputClassName="bg-[#F4F4F5] w-3/4 h-12 mb-4 py-1 px-2 rounded-lg focus:outline-none focus:bg-white focus:border-[#DEB225] focus:border-2"
        />
        <FFButton
          type="submit"
          text="Send reset link"
          endIcon={<RightArrowIcon />}
          styles={{ mt: '24px' }}
        />
      </FFForm>
    </Box>
  )
}

export default ForgetPWContents
