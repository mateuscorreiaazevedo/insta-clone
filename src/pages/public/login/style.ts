import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const LinkTo = styled(Link)`
  text-decoration: none;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.blue};
  transition: letter-spacing 600ms;
  &:hover {
    letter-spacing: 2px;
  }
`

export const Content = styled.article`
  box-shadow: 0 0 100px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 460px;
  height: 680px;
  padding: 50px 0;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 15px;
  @media (max-width: 425px) {
    width: 100%;
    height: 100vh;
    border-radius: 0;
    padding: 12vh 0;
  }
`

export const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.h1`
  cursor: default;
  font-size: 4rem;
  letter-spacing: 2px;
  transition: color 600ms;
  &:hover {
    color: ${({ theme }) => theme.colors.blue};
  }
`

export const SubTitle = styled.div`
  text-align: center;
  margin: 5px;
`
