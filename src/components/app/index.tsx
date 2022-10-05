import { ThemeProvider } from '../../contexts/theme-context'
import { GlobalStyle } from '../../assets/styles/global'
import React from 'react'
import { AppRouter } from '../../routes/router'
import { AuthProvider } from '../../contexts/auth-context'

function App () {
  return (
    <AuthProvider>
      <ThemeProvider>
        <AppRouter/>
        <GlobalStyle/>
      </ThemeProvider>
    </AuthProvider>
  )
}

export default App
