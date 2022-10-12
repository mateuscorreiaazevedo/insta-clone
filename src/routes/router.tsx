import { useAuth } from '../contexts/auth-context'
import { BrowserRouter } from 'react-router-dom'
import { PrivateRoutes } from './private'
import { PublicRoutes } from './public'
import React from 'react'
import { Loader } from '../components/ui/loader'

export const AppRouter = () => {
  const { auth, loader } = useAuth()

  if (loader) {
    return (
    <div style={{ width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Loader/>
    </div>
    )
  }

  return (
    <BrowserRouter>
      <React.Suspense fallback={<p>Carregando...</p>}>
        {auth ? <PrivateRoutes/> : <PublicRoutes/>}
      </React.Suspense>
    </BrowserRouter>
  )
}
