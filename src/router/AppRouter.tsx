import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import MarvelPage from '../heroes/pages/MarvelPage'
import DCPage from '../heroes/pages/DCPage'
import Login from '../auth/pages/Login'
import Navbar from '../ui/components/Navbar'
import HereosRoutes from '../heroes/routes/HereosRoutes'

const AppRouter = () => {
  return (
    <>
    
        <Routes>
          
          <Route path="login" element={<Login />} />
          <Route path="/*" element={<HereosRoutes />} />
        </Routes>
    </>
  )
}

export default AppRouter
