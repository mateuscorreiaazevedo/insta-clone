import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Header = styled.header`
  position: sticky;
  top: 0;
  height: 60px;
  width: 100%;
  background: ${({ theme }) => theme.colors.primary};
  border-bottom: 1px solid #777;
`

export const Content = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 25px;
  height: 100%;
`
export const Title = styled(Link)`
  font-size: 4rem;
  text-decoration: none;
  
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;
`

export const Nav = styled.ul`
  list-style: none;
  padding: 0 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 25px;

  li {
    font-size: 2.6rem;
    cursor: pointer;
    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.text};
    }
  }
`

export const ContainerSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px 16px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.secondary};
  svg {
    font-size: 2.4rem;
    color: #777;
  }
`

export const IconNav = styled.img`
  cursor: pointer;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  object-fit: cover;
`
