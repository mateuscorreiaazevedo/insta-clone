import React from 'react'

export function debounceHelper<T> (fn: any, delayInMs = 500) {
  const timeoutRef: React.MutableRefObject<number> = React.useRef(0)

  function debounced (params: any) {
    return new Promise((resolve: (value: T) => void, reject) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }

      timeoutRef.current = window.setTimeout(async () => {
        try {
          const response = await fn(params)
          resolve(response)
        } catch (error) {
          reject((error as any).message)
        }
      }, delayInMs)
    })
  }

  return { debounced }
}
