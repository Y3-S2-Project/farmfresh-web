import axios from '../lib/axios'

export const addProduct = async (product) => {
  return await axios.post('/products', product)
}
export const editProduct = async (product, product_id) => {
  return await axios.patch(`/products/${product_id}`, product)
}
//export fetched products using api call
export const fetchProducts = async () => {
  return await axios.get('/products')
}

export const fetchProduct = async (product_id) => {
  return await axios.get(`/products/${product_id}`)
}

export const fetchFarmerProducts = async () => {
  return await axios.delete('/products/farmer-products')
}

export const fetchOnSaleProducts = async () => {
  return await axios.get('/products/on-sale')
}

export const deleteProduct = async (product_id) => {
  return await axios.delete(`/products/${product_id}`)
}

export const chageVisiblity = async (product_id) => {
  return await axios.patch(`//products/${product_id}`)
}
