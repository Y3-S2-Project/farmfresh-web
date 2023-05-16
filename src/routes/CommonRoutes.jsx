import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home'
import { useSelector } from 'react-redux'
import { getCurrentUser } from '../redux/features/userSlice'
import { ROLES } from '../utils/constants'
import FFNavBar from '../components/molecules/FFNavBar/FFNavBar'

const CommonRoutes = () => {
  return (
    <>
      <FFNavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default CommonRoutes
