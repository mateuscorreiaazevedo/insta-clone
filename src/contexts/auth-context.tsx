import { ChildrenType } from '../types/children'
import { UserService } from '../service/user'
import { tokenUtil } from '../utils/token'
import React from 'react'

type AuthProps = {
  user: any | null
  auth: boolean
  loading: boolean
  loader: boolean
  error: string
  handleLogin: (e: React.FormEvent<HTMLFormElement>, values: any) => Promise<void>
  handleRegister: (e: React.FormEvent<HTMLFormElement>, values: any) => Promise<void>
  handleLogOut: () => void

}

const Context = React.createContext<AuthProps | null>(null)

export const AuthProvider = ({ children }: ChildrenType) => {
  const [user, setUser] = React.useState<any | null>(null)
  const [auth, setAuth] = React.useState(false)
  const [error, setError] = React.useState('')
  const [loading, setLoading] = React.useState(false)
  const [loader, setLoader] = React.useState(true)
  const token = tokenUtil.get()

  console.log(auth)

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
    setLoader(false)
  }, [])

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>, values: any) => {
    e.preventDefault()

    try {
      setLoading(true)
    } catch (error) {
      setError((error as any).message)
    } finally {
      setLoading(false)
    }
  }

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>, values: any) => {
    e.preventDefault()

    try {
      setLoading(true)
      const response = await UserService.register(values)
      tokenUtil.set(response.token)
      window.location.href = '/'
    } catch (error) {
      setError((error as any).message)
    } finally {
      setLoading(false)
    }
  }

  const handleLogOut = () => {
    tokenUtil.clear()
    setUser(null)
    window.location.reload()
  }

  return (
    <Context.Provider value={{ user, auth, loading, loader, error, handleLogin, handleLogOut, handleRegister }}>
      {children}
    </Context.Provider>
  )
}

export const useAuth = () => {
  const context = React.useContext(Context)

  if (!context) throw new Error('Error on authProvider, please verify the app')

  return { ...context }
}
