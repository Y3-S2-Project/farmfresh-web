import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home'
import { useSelector } from 'react-redux'
import { getCurrentUser } from '../redux/features/userSlice'
import { ROLES } from '../utils/constants'

const CommonRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

export default CommonRoutes
