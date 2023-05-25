import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home'
import FFNavBar from '../components/molecules/FFNavBar/FFNavBar'
import { ViewProductPage } from '../pages/product/ViewProductPage'

const CommonRoutes = () => {
  return (
    <>
      {/* <FFNavBar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/view-product' element={ <ViewProductPage/>} />
      </Routes>
    </>
  )
}

export default CommonRoutes
