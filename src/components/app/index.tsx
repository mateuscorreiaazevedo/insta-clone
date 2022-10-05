import { ThemeProvider } from '../../contexts/theme-context'
import { GlobalStyle } from '../../assets/styles/global'
import React from 'react'

function App () {
  return (
    <ThemeProvider>
    App
    <GlobalStyle/>
    </ThemeProvider>
  )
}

export default App
