import { useAuth } from '../contexts/auth-context'
import { BrowserRouter } from 'react-router-dom'
import { PrivateRoutes } from './private'
import { PublicRoutes } from './public'
import React from 'react'

export const AppRouter = () => {
  const { auth, loader } = useAuth()

  if (loader) return <p>carregando...</p>

  return (
    <BrowserRouter>
      <React.Suspense fallback={<p>Carregando...</p>}>
        {auth ? <PrivateRoutes/> : <PublicRoutes/>}
      </React.Suspense>
    </BrowserRouter>
  )
}
