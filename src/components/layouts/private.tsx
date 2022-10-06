import { ChildrenType } from '../../types/children'
import React from 'react'

export const PrivateLayout = ({ children }: ChildrenType) => {
  return (
    <>
      <p>header</p>
      {children}
      <p>footer</p>
    </>
  )
}
