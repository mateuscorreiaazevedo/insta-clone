import React from 'react'

type Response = [
  boolean,
  () => void
]

export function useClickOutside (innerRef: React.RefObject<HTMLDivElement>): Response {
  const [toggle, setToggle] = React.useState(false)

  const setValue = React.useCallback(() => {
    setToggle(prev => !prev)
  }, [])

  const handleClickOutside = (e: MouseEvent) => {
    if (innerRef.current?.contains(e.target as Node)) {
      return
    }

    setToggle(false)
  }

  React.useEffect(() => {
    if (toggle) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [toggle])

  return [
    toggle,
    setValue
  ]
}
