import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home'
import FFNavBar from '../components/molecules/FFNavBar/FFNavBar'
import OrderAdmin from '../pages/orderAdmin/OrderAdmin'

const CommonRoutes = () => {
  return (
    <>
      {/* <FFNavBar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<OrderAdmin/>} />
      </Routes>
    </>
  )
}

export default CommonRoutes
