import { Link } from 'react-router-dom'
import * as S from './style'
import React from 'react'

export const NotFoundComponent = () => {
  return (
    <S.Main>
      <S.H2>Esta página não está disponível</S.H2>
      <S.Text>
        O link em que você clicou pode não estar funcionando, ou a página pode ter sido removida. <Link to='/'>Voltar para o feed</Link>
      </S.Text>
    </S.Main>
  )
}
