import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  height: 160px;
  align-items: flex-end;
  justify-content: space-between;
`

export const UserAvatar = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
`

export const UserLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
`

export const ContainerLink = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: flex-end;

  a {
    text-decoration: none;
    color: #777;
    text-transform: capitalize;
    transition: letter-spacing 400ms;
    &:hover {
      letter-spacing: 2px;
    }
  }
`
