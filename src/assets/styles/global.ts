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
  &:has(.modal-open) {
    overflow-y: hidden;
  }
  &::-webkit-scrollbar {
  width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background: ${({ theme }) => theme.colors.secondary};
    box-shadow: inset 0 0 15px rgba(0,0,0,0.2);
  }
  overflow-x: hidden;
  width: 100%;
  min-height: 100vh;
  font-size: 1.6rem;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  }
`
