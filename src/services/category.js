import axios from '../lib/axios'

export const addCategory = async (category) => {
  return await axios.post('/categories', category)
}
export const editCategory = async (category, category_id) => {
  return await axios.patch(`/categories/${category_id}`, category)
}
//export fetched categories using api call
export const fetchCategories = async () => {
  return await axios.get('/categories')
}

export const fetchCategory = async (category_id) => {
  return await axios.get(`/categories/${category_id}`)
}


export const deleteCategory = async (category_id) => {
  return await axios.delete(`/categories/${category_id}`)
}

