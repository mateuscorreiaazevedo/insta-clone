import { ThemeProvider } from '../../contexts/theme-context'
import { GlobalStyle } from '../../assets/styles/global'
import React from 'react'
import { AppRouter } from '../../routes/router'

function App () {
  return (
    <ThemeProvider>
    <AppRouter/>
    <GlobalStyle/>
    </ThemeProvider>
  )
}

export default App
