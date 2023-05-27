// import axios from '../lib/axios'
import { Visibility } from '@mui/icons-material'
import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL: `http://localhost:3456/api`,
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

export const addProduct = async (product) => {
  return await axiosInstance.post('/products', product)
}
export const editProduct = async (product) => {
  console.log(product)
  return await axiosInstance.patch(`/products/${product.product_id}`, product)
}
//export fetched products using api call
export const fetchProducts = async () => {
  return await axiosInstance.get('/products')
}

export const fetchProduct = async (product_id) => {
  return await axiosInstance.get(`/products/${product_id}`)
}

export const fetchFarmerProducts = async () => {
  return await axiosInstance.get('/products/farmer-products')
}

export const fetchOnSaleProducts = async () => {
  return await axiosInstance.get('/products/on-sale')
}

export const deleteProduct = async (product_id) => {
  return await axiosInstance.delete(`/products/${product_id}`)
}
export const getNutritions = async (product_name) => {
  const url = `https://api.edamam.com/api/nutrition-data?app_id=804a635f&app_key=fd152f50a65b04daacc90fbf689a74ac%20&ingr=1%20small%20${product_name}` // Replace with the actual API endpoint URL
  const response = await fetch(url)
  const data = await response.json()
  return data
}

export const chageVisiblity = async ({ product_id, visibility }) => {
  console.log(product_id, visibility)
  return await axiosInstance.patch(`/products/${product_id}/visibility`, {
    visibility: visibility,
  })
}
