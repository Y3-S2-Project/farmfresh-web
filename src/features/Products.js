import { createSlice } from '@reduxjs/toolkit'
import { ADMIN_PRODUCT_TABLE_DATA } from '../util/constant'
export const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: ADMIN_PRODUCT_TABLE_DATA,
    addProductModal: false,
    editProductModal: {
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
      product_sale_status: false
    },
    viewProductModal: {
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
      product_sale_status: false
    }
  },
  reducers: {
    addProductModal: (state, action) => {
      state.addProductModal = action.payload
    }
  }
})

export default productSlice.reducer
