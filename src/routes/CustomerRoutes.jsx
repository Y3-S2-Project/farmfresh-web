import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from '../pages/cart'
import OrderView from '../pages/orderViewUser/OrderView'
import OrderSeller from '../pages/orderSeller/OrderSeller'

const CustomerRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/cart" element={<Cart />} />
        <Route path="/orderview" element={<OrderView />} />
        <Route path="/orderseller" element={<OrderSeller />} />
      </Routes>
    </>
  )
}

export default CustomerRoutes
