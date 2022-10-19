import styled from 'styled-components'

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin: 50px;
  height: 70vh;
  gap: 30px;
`
export const H2 = styled.h2`
  font-size: 2.4rem;
`

export const Text = styled.p`
  font-size: 1.4rem;
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.blue};
  }
`
