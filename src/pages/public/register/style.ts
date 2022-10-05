import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  transition: color 600ms;
`

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.primary};
  width: 460px;
  height: 680px;
  padding: 50px 0;
  border-radius: 15px;

  @media (max-width: 425px) {
    width: 100%;
    height: 100vh;
    border-radius: 0;
    padding: 12vh 0;
  }
`

export const SwitchTheme = styled.span`
  cursor: pointer;
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin: 15px 0;
  transition: letter-spacing 400ms;
  &:hover {
    letter-spacing: 2px;
  }
  svg {
    font-size: 2rem;
    animation: switch-theme 400ms;
    @keyframes switch-theme {
      from {
        transform: scale(0);
      }
    }
  }
`

export const LinkTo = styled(Link)`
  text-decoration: none;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.blue};
  transition: letter-spacing 600ms;
  &:hover {
    letter-spacing: 2px;
  }
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
  font-size: 1.8rem;
  position: relative;
  .line {
    position: absolute;
    right: 0;
    width: 0;
    height: 2px;
    background: ${({ theme }) => theme.colors.text};
    transition: width 600ms;
  }
  &:hover {
    .line {
      width: 100%;
    }
  }
  
`

export const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
