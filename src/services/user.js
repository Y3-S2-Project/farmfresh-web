import axios from '../lib/axios'

export const loginUser = async (credentials) => {
  return await axios.patch('/auth/login', credentials)
}

export const logoutUser = async () => {
  return await axios.patch('/auth/logout').data
}
