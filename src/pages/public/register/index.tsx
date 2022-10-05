import { AuthForm } from '../../../components/forms/auth-forms'
import { useTheme } from '../../../contexts/theme-context'
import { useAuth } from '../../../contexts/auth-context'
import { BsSun, BsMoon } from 'react-icons/bs'
import * as S from './style'
import React from 'react'
import { useSetValue } from '../../../hooks/set-value'
import { UserRequest } from '../../../types/user'

const initialValue: UserRequest = {
  userName: '',
  email: '',
  confirmPassword: '',
  password: ''
}

export const RegisterPage = () => {
  const { setValue, values } = useSetValue<UserRequest>(initialValue)
  const { handleRegister, error, loading } = useAuth()
  const { handleTheme, theme } = useTheme()

  console.log(values)

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
          <AuthForm
            type='register'
            submit={(e) => handleRegister(e, values)}
            error={error}
            loading={loading}
            setValue={setValue}
          />
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
