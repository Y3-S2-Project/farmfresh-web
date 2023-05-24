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
  status: 0,
  product: {
    product_id: '',
    product_name: '',
    product_price: 0.0,
    product_status: '',
    product_category: '',
    product_offer: 0.0,
    product_images: [],
    product_quantity: 0,
    product_visible: true,
    product_weight: 0.0,
    product_sale_status: false,
  },

  edit_product_modal: {
    modal: false,
    product_id: '',
    product_name: '',
    product_price: 0.0,
    product_status: '',
    product_category: '',
    product_offer: 0.0,
    product_images: [],
    product_quantity: 0,
    product_visible: true,
    product_weight: 0.0,
    product_sale_status: false,
  },
  view_product_modal: {
    modal: false,
    product_id: '',
    product_name: '',
    product_price: 0.0,
    product_status: '',
    product_category: '',
    product_offer: 0.0,
    product_images: [],
    product_quantity: 0,
    product_visible: true,
    product_weight: 0.0,
    product_sale_status: false,
  },
}

export const getAllProducts = createAsyncThunk(
  'products/fetchProducts',
  fetchProducts,
)
export const getProduct = createAsyncThunk(
  'products/fetchProduct',
  async (product_id) => await fetchProduct(product_id),
)
export const getFarmerProducts = createAsyncThunk(
  'products/fetchFarmerProducts',
  fetchFarmerProducts,
)
export const getOnSaleProducts = createAsyncThunk(
  'products/fetchOnSaleProducts',
  fetchOnSaleProducts,
)

export const postProduct = createAsyncThunk(
  'products/addProduct',
  async (product) => await addProduct(product),
)
export const updateProduct = createAsyncThunk(
  'products/editProduct',
  async (updatedProduct, product_id) =>
    await editProduct(updatedProduct, product_id),
)

export const removeProduct = createAsyncThunk(
  'products/deleteProduct',
  async (product_id) => await deleteProduct(product_id),
)
export const updateProductVisiblity = createAsyncThunk(
  'products/chageVisiblity ',
  async (product_id) => await chageVisiblity(product_id),
)

const handleAsyncAction = (state, action) => {
  if (action.payload) {
    state.loading = false
    state.success = action.payload?.data?.success
    state.message = action.payload?.data?.message
    state.status = action.payload?.data?.status
    state.error = action.payload?.data?.error
  }
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProductModal: (state, action) => {
      state.add_product_modal = action.payload
    },
    editProductModalOpen: (state, action) => {
      state.edit_product_modal = { ...action.payload?.product }
      state.edit_product_modal = {
        ...state.edit_product_modal,
        modal: action.payload.open,
      }
    },
    viewProductModalOpen: (state, action) => {
      state.view_product_modal = { ...action.payload?.product }
      state.view_product_modal.modal = action.payload.open
    },

  },
  extraReducers: (builder) => {
    builder
      // getAllProduct extra reducers
      .addCase(getAllProducts.pending, (state) => {
        state.loading = true
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.products = action?.payload?.data?.data

        handleAsyncAction(state, action)
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        handleAsyncAction(state, action)
      })
      // getProduct extra reducers
      .addCase(getProduct.pending, (state) => {
        state.loading = true
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.product = { ...action.payload?.data?.data }
        handleAsyncAction(state, action)
      })
      .addCase(getProduct.rejected, (state, action) => {
        handleAsyncAction(state, action)
      })
      // getOnSaleProduct extra reducers
      .addCase(getOnSaleProducts.pending, (state) => {
        state.loading = true
      })
      .addCase(getOnSaleProducts.fulfilled, (state, action) => {
        state.products = action?.payload?.data?.data
        handleAsyncAction(state, action)
      })
      .addCase(getOnSaleProducts.rejected, (state, action) => {
        handleAsyncAction(state, action)
      })
      // getFarmerProducts extra reducers
      .addCase(getFarmerProducts.pending, (state) => {
        state.loading = true
      })
      .addCase(getFarmerProducts.fulfilled, (state, action) => {
        state.products = action?.payload?.data?.data
        handleAsyncAction(state, action)
      })
      .addCase(getFarmerProducts.rejected, (state, action) => {
        handleAsyncAction(state, action)
      })
      // postProduct extra reducers
      .addCase(postProduct.fulfilled, (state, action) => {
        state.loading = false
        handleAsyncAction(state, action)
        state.products.push(action?.payload?.data?.data)
      })
      .addCase(postProduct.rejected, (state, action) => {
        handleAsyncAction(state, action)
      })
      // removeProduct extra reducers
      .addCase(removeProduct.fulfilled, (state, action) => {
        state.loading = false
        handleAsyncAction(state, action)
        state.products = state.products.filter(
          (product) =>
            product.product_id !== action?.payload?.data?.data.product_id,
        )
      })
      .addCase(removeProduct.rejected, (state, action) => {
        handleAsyncAction(state, action)
      })
      // updateProduct extra reducers
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.loading = false
        handleAsyncAction(state, action)
        state.products = state.products.map((product) =>
          product.product_id === action?.payload?.data?.data.product_id
            ? action?.payload?.data?.data
            : product,
        )
      })
      .addCase(updateProduct.rejected, (state, action) => {
        handleAsyncAction(state, action)
      })
      // update product visibility extra reducers
      .addCase(updateProductVisiblity.fulfilled, (state, action) => {
        state.loading = false
        handleAsyncAction(state, action)
        state.products = state.products.map((product) =>
          product.product_id === action?.payload?.data?.data.product_id
            ? action?.payload?.data?.data
            : product,
        )
      })
      .addCase(updateProductVisiblity.rejected, (state, action) => {
        handleAsyncAction(state, action)
      })
  },
})

export const {
  addProductModal,
  viewProductModalOpen,
  editProductModalOpen,
  alertModalOpen,
} = productsSlice.actions

export const selectAllProducts = (state) => state.products.products
export const selectProduct = (state) => state.products.product
export const edit_product_modal = (state) => state.products.edit_product_modal
export const view_product_modal = (state) => state.products.view_product_modal
export const add_product_modal = (state) => state.products.add_product_modal



export const product_id = (state) => state.products.product?.product_id

export const isLoading = (state) => state.products.loading
export const isSuccess = (state) => state.products.success
export const isError = (state) => state.products.error
export const message = (state) => state.products.message

export default productsSlice.reducer
