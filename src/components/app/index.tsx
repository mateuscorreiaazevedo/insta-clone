import { GlobalStyle } from '../../assets/styles/global'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import dark from '../../assets/styles/themes/dark'

function App () {
  return (
    <ThemeProvider theme={dark}>
      App
      <GlobalStyle/>
    </ThemeProvider>
  )
}

export default App
