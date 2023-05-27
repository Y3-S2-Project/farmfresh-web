import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrentUser, login } from '../../redux/features/userSlice'
import { loginSchema } from '../../utils/validations/auth'
import { useFormik } from 'formik'
import SEO from '../../components/atoms/SEO/SEO'
import loginImage from '../../assets/images/login.png'
import Logo from '../../assets/Logo'
import { Link } from 'react-router-dom'
import { useTheme } from '@mui/material'
import FFTextField from '../../components/atoms/FFInputField/FFTextField'
import FFButton from '../../components/atoms/FFButton/FFButton'
import RightArrowIcon from '../../assets/icons/RightArrowIcon'
import EyeOpenIcon from '../../assets/icons/EyeOpenIcon'
import FFChangePassword from '../../components/molecules/FFChangePassword/FFChangePassword'

const Login = () => {
  const theme = useTheme()
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
      <SEO
        title="FarmFresh | Login"
        imageMeta={{
          id: 1,
          property: 'og:image',
          image: {
            url: loginImage,
          },
        }}
      />
      <h1 className="hidden">Login</h1>

      <div className="flex w-full h-screen">
        <div className="flex flex-col flex-wrap rounded-l-md bg-white flex-1 py-6 px-16">
          <div className="flex justify-between items-center">
            <div>
              <Logo />
            </div>
            <div className="flex text-center gap-1">
              <span className="text-base font-normal text-gray-400">
                Don't have an account?
              </span>
              <Link
                to="/auth/register"
                style={{
                  color: theme.palette.primary.main,
                }}
                className={``}
              >
                <span className={`text-base font-normal`}>Sign up</span>
              </Link>
            </div>
          </div>
          <div className="w-full flex items-center justify-center flex-1">
            <div className="w-1/2 shadow-md rounded-md p-16">
              <h2 className="text-xl font-semibold">Login</h2>

              <form className="mt-4">
                <div className="mb-3">
                  <FFTextField
                    label="Email"
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    labelClassName="block text-base font-medium text-black"
                    inputClassName="bg-[#F4F4F5] w-full h-12 mb-4 py-1 px-2 rounded-lg focus:outline-none focus:bg-white focus:border-[#DEB225] focus:border-2"
                  />
                </div>

                <div className="mb-3">
                  <FFTextField
                    label={'Password'}
                    type={'password'}
                    labelClassName={'block text-base font-medium text-black'}
                    inputClassName={
                      'bg-[#F4F4F5] w-full h-12 mb-4 py-1 px-2 rounded-lg focus:outline-none focus:bg-white focus:border-[#DEB225] focus:border-2'
                    }
                    endIcon={<EyeOpenIcon />}
                  />
                </div>

                <div className="mb-3 flex flex-wrap content-center">
                  <span
                    style={{ color: theme.palette.primary.main }}
                    className="text-base font-normal cursor-pointer"
                  >
                    Forgot password?
                  </span>
                </div>

                <div className="mb-3">
                  <FFButton
                    name="Login"
                    color="primary"
                    onClick={handleSubmit}
                    className="w-full h-12"
                    endIcon={<RightArrowIcon />}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap content-center justify-center rounded-r-md flex-2">
          <img
            alt=""
            className="w-full h-full bg-center bg-no-repeat bg-cover rounded-r-md"
            src={loginImage}
          />
        </div>
      </div>
    </>
  )
}

export default Login
