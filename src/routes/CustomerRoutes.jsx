import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from '../pages/cart'
import OrderView from '../pages/orderViewUser/OrderView'
import OrderSeller from '../pages/orderSeller/OrderSeller'
import Delivery from '../pages/delivery/Delivery'

const CustomerRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/cart" element={<Cart />} />
        <Route path="/orderview" element={<OrderView />} />
        <Route path="/orderseller" element={<OrderSeller />} />
        <Route path="/delivery" element={<Delivery />} />
      </Routes>
    </>
  )
}

export default CustomerRoutes
