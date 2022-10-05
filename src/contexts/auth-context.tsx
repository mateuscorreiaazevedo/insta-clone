import { ChildrenType } from '../types/children'
import React from 'react'
import { tokenUtil } from '../utils/token'

type AuthProps = {
  user: any | null
  auth: boolean
  loading: boolean
  error: string
  handleLogin: () => void
  handleRegister: () => void
  handleLogOut: () => void

}

const Context = React.createContext<AuthProps | null>(null)

export const AuthProvider = ({ children }: ChildrenType) => {
  const [user, setUser] = React.useState<any | null>(null)
  const [auth, setAuth] = React.useState(false)
  const [error, setError] = React.useState('')
  const [loading, setLoading] = React.useState(false)
  const token = tokenUtil.get()

  const getUser = async () => {
    try {
      setLoading(true)
      setUser('')
    } catch (error) {
      setError((error as any).message)
    } finally {
      setLoading(false)
    }
  }

  React.useEffect(() => {
    if (token) {
      setAuth(true)
      getUser()
    }
  }, [])

  const handleLogin = async () => {

  }

  const handleRegister = async () => {

  }

  const handleLogOut = () => {
    tokenUtil.clear()
    setUser(null)
    window.location.reload()
  }

  return (
    <Context.Provider value={{ user, auth, loading, error, handleLogin, handleLogOut, handleRegister }}>
      {children}
    </Context.Provider>
  )
}

export const useAuth = () => {
  const context = React.useContext(Context)

  if (!context) throw new Error('Error on authProvider, please verify the app')

  return { ...context }
}
