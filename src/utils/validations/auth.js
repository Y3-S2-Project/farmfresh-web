import * as Yup from 'yup'

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .email('Please enter a valid email')
    .required('Please enter the email'),
  password: Yup.string().required('Please enter the password'),
})
