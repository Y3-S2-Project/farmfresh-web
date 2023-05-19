import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
  addProduct,
  editProduct,
  fetchProduct,
  fetchProducts,
  fetchFarmerProducts,
  fetchOnSaleProducts,
  deleteProduct,
  chageVisiblity,
} from '../../services/product'

const initialState = {
  products: [],
  loading: false,
  success: false,
  error: false,
  message: '',
}

export const getAllProducts = createAsyncThunk(
  'products/fetchProducts',
  fetchProducts,
)
export const getProduct = createAsyncThunk(
  'products/fetchProduct',
  fetchProduct,
)
export const getFarmerProducts = createAsyncThunk(
  'products/fetchFarmerProducts',
  fetchFarmerProducts,
)
export const getOnSaleProducst = createAsyncThunk(
  'products/fetchOnSaleProducts',
  fetchOnSaleProducts,
)

export const postProduct = createAsyncThunk(
  'products/addProduct',
  async (product) => await addProduct(product),
)
export const updateProduct = createAsyncThunk(
  'products/editProduct',
  async (updatedProduct) => await editProduct(updatedProduct),
)

export const removeProduct = createAsyncThunk(
  'products/deleteProduct',
  async (product_id) => await deleteProduct(product_id),
)
export const updateProductVisiblity = createAsyncThunk(
  'products/chageVisiblity ',
  async (product_id) => await chageVisiblity(product_id),
)

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(login.fulfilled, (state, action) => {
      state.loading = false
      state.user = action.payload
    })
    builder.addCase(login.rejected, (state, action) => {
      state.loading = false
      state.error = action.error.message
    })
  },
})
export const selectAllProducts = (state) => state.products.products
export const isLoading = (state) => state.products.loading
export const isSuccess = (state) => state.products.success
export const isError = (state) => state.products.error
export const message = (state) => state.products.message

export default productsSlice.reducer
