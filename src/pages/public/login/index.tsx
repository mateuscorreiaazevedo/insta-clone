import { AuthForm } from '../../../components/forms/auth-forms'
import { ThemeSwitcher } from '../../../components/ui/theme'
import { useAuth } from '../../../contexts/auth-context'
import { useSetValue } from '../../../hooks/set-value'
import { Main } from '../../../components/ui/main'
import { UserLogin } from '../../../types/user'
import * as S from './style'
import React from 'react'

const initialValue: UserLogin = {
  email: '',
  password: ''
}

export const LoginPage = () => {
  const { error, loading, handleLogin } = useAuth()
  const { setValue, values } = useSetValue<UserLogin>(initialValue)

  return (
    <Main style={{ justifyContent: 'center', alignItems: 'center' }}>
      <S.Content>
        <S.Section>
          <S.Title>Olá novamente!</S.Title>
          <S.SubTitle>
            Entre aqui para acessar ao que seus amigos estão publicando
          </S.SubTitle>
        </S.Section>
        <S.Section>
          <AuthForm
            type='login'
            error={error}
            loading={loading}
            submit={(e) => handleLogin(e, values)}
            setValue={setValue}
          />
        </S.Section>
        <S.Section>
          <p>
            Ainda não é cadastrado? <S.LinkTo to='/register'>Cadastre-se</S.LinkTo>
          </p>
          <ThemeSwitcher/>
        </S.Section>
      </S.Content>
    </Main>
  )
}
