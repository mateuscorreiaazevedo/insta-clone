import { useTheme } from '../../../contexts/theme-context'
import { BsSun, BsMoon } from 'react-icons/bs'
import * as S from './style'
import React from 'react'

export const RegisterPage = () => {
  const { handleTheme, theme } = useTheme()
  return (
    <S.Main>
      <S.Container>
        <S.Section>
          <S.Title>Bem-vindo</S.Title>
          <S.SubTitle>
            Registre-se aqui!
            <div className="line"/>
          </S.SubTitle>
        </S.Section>
        <S.Section>
          formulário
        </S.Section>
        <S.Section>
          <p>
            Já possui uma conta? <S.LinkTo to='/login'>Entre aqui</S.LinkTo>
          </p>
          <S.SwitchTheme onClick={handleTheme}>
            {theme.title === 'light' ? <BsSun/> : <BsMoon/>} tema {theme.title}
          </S.SwitchTheme>
        </S.Section>
      </S.Container>
    </S.Main>
  )
}
