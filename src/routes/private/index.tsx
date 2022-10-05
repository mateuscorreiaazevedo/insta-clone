import { Routes, Route } from 'react-router-dom'
import React from 'react'
import { PrivateLayout } from '../../components/layouts/private'

export const PrivateRoutes = () => {
  return (
    <PrivateLayout>
      <Routes>
        <Route index element={<p>Teste</p>} />
      </Routes>
    </PrivateLayout>
  )
}
