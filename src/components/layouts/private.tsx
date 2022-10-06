import { ChildrenType } from '../../types/children'
import { Header } from '../header'
import { Footer } from '../footer'
import React from 'react'

export const PrivateLayout = ({ children }: ChildrenType) => {
  return (
    <>
      <Header/>
      {children}
      <Footer/>
    </>
  )
}
