import { ChildrenType } from '../../types/children'
import { Header } from '../header'
import React from 'react'

export const PrivateLayout = ({ children }: ChildrenType) => {
  return (
    <>
      <Header/>
      {children}
      <p>footer</p>
    </>
  )
}
