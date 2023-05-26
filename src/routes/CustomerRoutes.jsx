import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from '../pages/cart'

const CustomerRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  )
}

export default CustomerRoutes
