import ReactDOM from 'react-dom'
import * as S from './style'
import React from 'react'

type Props = {
  isOpen: boolean
  children: React.ReactNode
};

export const ModalPortal = ({ isOpen = false, children }: Props) => {
  if (!isOpen) return null

  return ReactDOM.createPortal(
    <S.Overlay>
      {children}
    </S.Overlay>,
    document.getElementById('modal') as HTMLElement
  )
}
