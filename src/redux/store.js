import { configureStore } from '@reduxjs/toolkit'
import userReducer from './features/userSlice'
import thunk from 'redux-thunk'
import productsReducer from './features/productSlice'
const store = configureStore({
  reducer: {
    user: userReducer,
    products: productsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
})

export default store
