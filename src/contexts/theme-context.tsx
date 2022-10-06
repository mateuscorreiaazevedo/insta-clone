import { DefaultTheme, ThemeProvider as Theme } from 'styled-components'
import light from '../assets/styles/themes/light'
import { ChildrenType } from '../types/children'
import React from 'react'
import dark from '../assets/styles/themes/dark'
import { useLocalStorage } from '../hooks/local-storage'

type PropsContext = {
  theme: DefaultTheme,
  handleTheme: () => void
}

const Context = React.createContext<PropsContext | null>(null)

export const ThemeProvider = ({ children }: ChildrenType) => {
  const [theme, setTheme] = useLocalStorage<DefaultTheme>('theme', light)

  const handleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <Context.Provider value={{ theme, handleTheme }}>
      <Theme theme={theme}>
        {children}
      </Theme>
    </Context.Provider>
  )
}

export const useTheme = () => {
  const contextTheme = React.useContext(Context)

  if (!contextTheme) throw new Error('Error on ThemeProvider, please, verify the theme-context file')

  return { ...contextTheme }
}
