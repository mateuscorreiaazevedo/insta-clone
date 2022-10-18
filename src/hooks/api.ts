import React from 'react'

type Response<T> = [
  T,
  boolean,
  (params?: any) => void,
  string
]

type Props = {
  initialValue?: any
  service: any
}

export function useApi<T> ({ initialValue, service }: Props): Response<T> {
  const [value, setValue] = React.useState<T>(initialValue)
  const [loading, setLoading] = React.useState(true)
  const [errors, setErrors] = React.useState('')

  const callback = React.useCallback((params?: any) => {
    (async () => {
      try {
        const response = await service(params)
        setValue(response)
      } catch (error) {
        setErrors((error as any).message)
        console.error((error as any).message)
      } finally {
        setLoading(false)
      }
    })()
  }, [])

  return [
    value,
    loading,
    callback,
    errors
  ]
}
