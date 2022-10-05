import React from 'react'

type Response<T> = {
  values: T,
  setValue: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export function useSetValue<T> (initialValue: T): Response<T> {
  const [values, setValues] = React.useState<T>(initialValue)

  const setValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setValues(prev => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  return {
    values,
    setValue
  }
}
