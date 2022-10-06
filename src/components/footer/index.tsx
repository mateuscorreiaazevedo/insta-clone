import { Container } from '../ui/container'
import * as S from './style'
import React from 'react'

export const Footer = () => {
  return (
    <S.Footer>
      <Container>
          <S.Copy>
            &copy; 2022 - <a href="https://www.mateusdev.com.br" target='_blank' rel="noreferrer">mateusdev</a>
          </S.Copy>
      </Container>
    </S.Footer>
  )
}
