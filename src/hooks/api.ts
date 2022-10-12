import React from 'react'

type Response<T> = [
  T,
  boolean,
  (params: any) => void
]

export function useApi<T> (initialValue: T, service: any): Response<T> {
  const [value, setValue] = React.useState(initialValue)
  const [loading, setLoading] = React.useState<boolean>(false)

  const callback = React.useCallback(async (params: any) => {
    try {
      setLoading(true)
      const response = await service(params)
      setValue(response)
    } catch (error) {
      console.error((error as any).message)
    } finally {
      setLoading(false)
    }
  }, [])

  return [
    value,
    loading,
    callback
  ]
}
