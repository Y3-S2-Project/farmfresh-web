import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  category: {
    _id: null,
    category_id: '',
    category_name: '',
    category_status: '',
    category_description: '',
    category_image: '',
  },
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
  alert_modal: false,
  alert_modal_type: '',
  alert_modal_title: '',
  alert_modal_body: '',
}

const alertsSlice = createSlice({
  name: 'alerts',
  initialState,
  reducers: {
    alertModalOpen: (state, action) => {
      state.alert_modal = action.payload.open
      state.alert_modal_type = action.payload?.type || ''
      state.alert_modal_title = action.payload?.title || ''
      state.alert_modal_body = action.payload?.body || ''

      state.category._id = action.payload?.category_id || null
      state.product.product_id = action.payload?.product_id || null
    },
  },
})

export const { alertModalOpen } = alertsSlice.actions

export const alert_modal = (state) => state.alerts.alert_modal
export const alert_modal_type = (state) => state.alerts.alert_modal_type
export const alert_modal_title = (state) => state.alerts.alert_modal_title
export const alert_modal_body = (state) => state.alerts.alert_modal_body

export const product_id = (state) => state.alerts.product?.product_id
export const category_id = (state) => state.alerts.category?._id

export default alertsSlice.reducer
