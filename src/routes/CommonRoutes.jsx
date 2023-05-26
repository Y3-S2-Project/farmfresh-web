import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home'

import { ViewProductPage } from '../pages/product/ViewProductPage'

const CommonRoutes = () => {
  return (
    <>
      {/* <FFNavBar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/view-product/:product_id" element={<ViewProductPage />} />
      </Routes>
    </>
  )
}

export default CommonRoutes
