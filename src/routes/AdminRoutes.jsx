import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AdminProductPage from '../pages/product/AdminProductPage'
export const AdminRoutes = () => {
  return (
    <>
      <Routes>
        {' '}
        <Route path="/admin/products" element={<AdminProductPage />} />{' '}
      </Routes>
    </>
  )
}
