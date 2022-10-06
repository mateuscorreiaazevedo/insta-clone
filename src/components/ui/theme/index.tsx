import { useTheme } from '../../../contexts/theme-context'
import { BsSun, BsMoon } from 'react-icons/bs'
import styled from 'styled-components'
import React from 'react'

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

export const ThemeSwitcher = () => {
  const { handleTheme, theme } = useTheme()

  return (
    <SwitchTheme onClick={handleTheme}>
      {theme.title === 'light' ? <BsSun/> : <BsMoon/>} tema {theme.title}
    </SwitchTheme>
  )
}
