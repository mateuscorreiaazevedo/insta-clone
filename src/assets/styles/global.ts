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
    overflow-x: hidden;
    width: 100%;
    min-height: 100vh;
    font-size: 1.6rem;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text}
  }
`
