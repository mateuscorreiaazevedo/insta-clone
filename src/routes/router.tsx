import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom'
import { useAuth } from '../contexts/auth-context'
import { Loader } from '../components/ui/loader'
import { createBrowserHistory } from 'history'
import { PrivateRoutes } from './private'
import { PublicRoutes } from './public'
import React from 'react'

export const AppRouter = () => {
  const { auth, loader } = useAuth()

  if (loader) {
    return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Loader/>
    </div>
    )
  }

  return (
    <HistoryRouter history={createBrowserHistory()}>
      <React.Suspense fallback={<p>Carregando...</p>}>
        {auth ? <PrivateRoutes/> : <PublicRoutes/>}
      </React.Suspense>
    </HistoryRouter>
  )
}
