import * as S from './style'
import React from 'react'

type Props = {
  size?: 30 | 40 | 50 | 60 | 80
}

export const Loader = ({ size = 80 }: Props) => {
  return (
    <S.Spinner size={size}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </S.Spinner>
  )
}
