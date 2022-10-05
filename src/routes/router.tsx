import { BrowserRouter } from 'react-router-dom'
import { PrivateRoutes } from './private'
import { PublicRoutes } from './public'
import React from 'react'

export const AppRouter = () => {
  const [auth] = React.useState(false)

  return (
    <BrowserRouter>
      <React.Suspense fallback={<p>Carregando...</p>}>
        {auth ? <PrivateRoutes/> : <PublicRoutes/>}
      </React.Suspense>
    </BrowserRouter>
  )
}
