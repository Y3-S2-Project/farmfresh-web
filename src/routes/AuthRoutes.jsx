import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from '../pages/auth/Login'
import { useSelector } from 'react-redux'
import { getAccessToken } from '../redux/features/userSlice'

const AuthRoutes = () => {
  const currentUser = useSelector(getAccessToken)
  return (
    <Routes>
      {!currentUser ? (
        <Route path="/login" element={<Login />} />
      ) : (
        <Navigate to="/" replace={true} />
      )}
    </Routes>
  )
}

export default AuthRoutes
