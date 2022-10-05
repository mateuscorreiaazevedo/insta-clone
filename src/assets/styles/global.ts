import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }
  :root {
    font-size: 62.5%;
  }

  body {
    width: 100vw;
    min-height: 100vh;
    font-size: 1.6rem;
  }
`
