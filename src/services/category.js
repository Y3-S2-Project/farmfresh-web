import axios from 'axios'
import { getAccessToken } from '../redux/features/userSlice'
export const axiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_BACKEND_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
})

axiosInstance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem(
    'access_token',
  )}`
  return config
})

export const addCategory = async (category) => {
  return await axiosInstance.post('/categories', category)
}
export const editCategory = async (category) => {
  return await axiosInstance.patch(`/categories/${category.category_id}`, {
    ...category.category,
  })
}
//export fetched categories using api call
export const fetchCategories = async () => {
  return await axiosInstance.get('/categories')
}

export const fetchCategory = async (category_id) => {
  return await axiosInstance.get(`/categories/${category_id}`)
}

export const deleteCategory = async (category_id) => {
  return await axiosInstance.delete(`/categories/${category_id}`)
}
