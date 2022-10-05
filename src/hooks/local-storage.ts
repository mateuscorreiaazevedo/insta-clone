import { localStorageUtil } from '../utils/local-storage'
import React from 'react'

type Response<T> = [
  T,
  (value: T) => void
]

export function useLocalStorage<T> (key: string, initialValue: T): Response<T> {
  const [state, setState] = React.useState(() => {
    const storageTheme = localStorageUtil.get(key)

    if (storageTheme) {
      return JSON.parse(storageTheme)
    } else {
      return initialValue
    }
  })

  const setValue = React.useCallback((value: T) => {
    try {
      setState(value)
      localStorageUtil.set(key, value)
    } catch (error) {
      throw new Error((error as any).message)
    }
  }, [key])

  return [
    state,
    setValue
  ]
}
