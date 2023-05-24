import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AdminProductPage from '../pages/product/AdminProductPage'
import AdminCategoryPage from '../pages/category/AdminCategoryPage'
export const AdminRoutes = () => {
  return (
    <>
      <Routes>
        {' '}
        <Route path="/admin/products" element={<AdminProductPage />} />{' '}
        <Route path="/admin/categories" element={<AdminCategoryPage />} />{' '}
      </Routes>
    </>
  )
}
