import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Div = styled.div`
  margin: 15px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
`

export const ContainerProfile = styled(Link)`
  width: 100%;
  height: 50px;
  display: flex;
  gap: 15px;
  padding: 5px 10px;
  align-items: center;
  text-decoration: none;
  transition: all 400ms;
  color: ${({ theme }) => theme.colors.text};
`

export const ImageProfile = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`
