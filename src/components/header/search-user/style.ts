import { darken } from 'polished'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const ContainerSearch = styled.div`
  display: flex;
  width: 306px;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;
  padding: 2px 16px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.secondary};
  svg {
    font-size: 2.4rem;
    color: #777;
  }

  &:has(input:focus) {
    padding: 2px 0;
  }
  
  input:focus ~ .icon {
    display: none;
  }
`

export const ContainerResults = styled.div`
  position: absolute;
  top: 60px;
  right: 430px;
  background: ${({ theme }) => (
    theme.title !== 'dark' ? theme.colors.primary : theme.colors.secondary
  )};
  width: 340px;
  min-height: 350px;
  padding: 15px 0;
  display: none;
  border-radius: 15px;
  box-shadow: 0 0 25px rgba(0,0,0,0.1);
  flex-direction: column;
  &::after {
    content: "";
    width: 0;
    height: 0;
    top: -10px;
    left: 160px;
    position: absolute;

    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid ${({ theme }) => (
      theme.title !== 'dark' ? theme.colors.primary : theme.colors.secondary
    )};
  }
  &.active {
    display: flex;
  }
  &.center {
    align-items: center;
    justify-content: center;
  } 
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
  &:hover {
    background: ${({ theme }) => darken(0.05, theme.colors.secondary)};
  }
`

export const ImageProfile = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`
