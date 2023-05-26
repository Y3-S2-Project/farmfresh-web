import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home'

import { ViewProductPage } from '../pages/product/ViewProductPage'
import OrderAdmin from '../pages/orderAdmin/OrderAdmin'

const CommonRoutes = () => {
  return (
    <>
      {/* <FFNavBar /> */}
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/view-product/:product_id" element={<ViewProductPage />} />

        <Route path="/order" element={<OrderAdmin />} />

      </Routes>
    </>
  )
}

export default CommonRoutes
