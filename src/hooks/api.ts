import React from 'react'

type Response<T> = [
  T,
  boolean,
  any,
  string
]

type Props = {
  initialValue?: any
  service: any
}

export function useApi<T> ({ initialValue, service }: Props): Response<T> {
  const [value, setValue] = React.useState(initialValue)
  const [loading, setLoading] = React.useState(false)
  const [errors, setErrors] = React.useState('')

  const callback = React.useCallback(async (params: any) => {
    try {
      setLoading(true)
      const response = await service(params)
      setValue(response)
    } catch (error) {
      setErrors((error as any).message)
    } finally {
      setLoading(false)
    }
  }, [])

  return [
    value,
    loading,
    callback,
    errors
  ]
}
