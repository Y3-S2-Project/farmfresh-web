import { configureStore } from '@reduxjs/toolkit'
import userReducer from './features/userSlice'
import thunk from 'redux-thunk'
import productsReducer from './features/productSlice'
import categoriesReducer from './features/categorySlice'
import alertsReducer from './features/alertSlice'
import mapsReducer from './features/mapSlice'
const store = configureStore({
  reducer: {
    user: userReducer,
    products: productsReducer,
    categories: categoriesReducer,
    alerts: alertsReducer,
    maps: mapsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
})

export default store
