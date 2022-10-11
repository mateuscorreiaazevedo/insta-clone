import styled from 'styled-components'

export const Footer = styled.footer`
  height: 60px;
`

export const Copy = styled.h3`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  justify-content: center;
  gap: 8px;
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
    transition: all 600ms;
    &:hover {
    color: ${({ theme }) => theme.colors.blue};
    }
  }
`
