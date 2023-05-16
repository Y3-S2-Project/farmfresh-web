import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrentUser, login } from '../../redux/features/userSlice'
import { loginSchema } from '../../utils/validations/auth'
import { useFormik } from 'formik'
import SEO from '../../components/atoms/SEO'
import { Navigate, useNavigate } from 'react-router-dom'

const Login = () => {
  const currentUser = useSelector(getCurrentUser)
  const dispatch = useDispatch()

  const initialValues = {
    email: '',
    password: '',
  }

  const onSubmit = (values) => {
    dispatch(login(values))
  }

  const formik = useFormik({
    initialValues,
    onSubmit,
    validateOnChange: false,
    validationSchema: loginSchema,
  })
  const { handleSubmit, handleChange, values } = formik

  return (
    <>
      <SEO title="FarmFresh | Login" />
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
        <button type="submit">login</button>
      </form>

      {currentUser && <Navigate to="/" replace={true} />}
    </>
  )
}

export default Login
