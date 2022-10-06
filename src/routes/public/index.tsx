import { PublicLayout } from '../../components/layouts/public'
import { RegisterPage } from '../../pages/public/register'
import { Routes, Route, Navigate } from 'react-router-dom'
import { LoginPage } from '../../pages/public/login'
import React from 'react'

export const PublicRoutes = () => {
  return (
    <PublicLayout>
      <Routes>
        <Route index element={<Navigate to='/login'/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='*' element={<Navigate to='/login'/>}/>
      </Routes>
    </PublicLayout>
  )
}
