import { Routes, Route } from 'react-router-dom'
import React from 'react'
import { PublicLayout } from '../../components/layouts/public'

export const PublicRoutes = () => {
  return (
    <PublicLayout>
      <Routes>
        <Route index element={<p>public</p>} />
      </Routes>
    </PublicLayout>
  )
}
