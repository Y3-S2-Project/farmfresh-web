import React from 'react'
import { Route, Routes } from 'react-router-dom'
import FarmerProductPage from '../pages/product/FarmerProductPage'
const FarmerRoutes = () => {
  return (
    <>
      <Routes>
        {' '}
        <Route path="/farmer/products" element={<FarmerProductPage />} />{' '}
      </Routes>
    </>
  )
}

export default FarmerRoutes
