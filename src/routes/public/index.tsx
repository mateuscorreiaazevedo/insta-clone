import { Routes, Route, Navigate } from 'react-router-dom'
import React from 'react'
import { PublicLayout } from '../../components/layouts/public'
import { LoginPage } from '../../pages/login'

export const PublicRoutes = () => {
  return (
    <PublicLayout>
      <Routes>
        <Route index element={<Navigate to='/login'/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<LoginPage/>}/>
        <Route path='*' element={<Navigate to='/login'/>}/>
      </Routes>
    </PublicLayout>
  )
}
