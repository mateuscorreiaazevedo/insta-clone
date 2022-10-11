import { BsEye, BsEyeSlash } from 'react-icons/bs'
import { ButtonSubmit } from '../../ui/button'
import { Input } from '../../ui/input'
import * as S from './style'
import React from 'react'

type Props = {
  type: 'login' | 'register'
  submit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>
  error: string
  setValue: (e: React.ChangeEvent<HTMLInputElement>) => void
  loading: boolean
};

export const AuthForm = ({ type, submit, error, loading, setValue }: Props) => {
  const [passwordView, setPasswordView] = React.useState(false)
  const [confirmPasswordView, setConfirmPasswordView] = React.useState(false)

  if (type === 'login') {
    return (
      <S.Form onSubmit={submit}>
        <S.ContainerMsg className={error?.length ? 'active' : ''}>
          {error}
        </S.ContainerMsg>
        <Input
          placeholder="Email"
          name='email'
          onChange={setValue}
        />
        <S.ContainerPass>
          <Input
            type={passwordView ? 'text' : 'password'}
            placeholder="Confirmação de senha"
            name='password'
            onChange={setValue}
          />
          <S.BtnView onClick={() => setPasswordView((prev) => !prev)}>
            {passwordView ? <BsEyeSlash /> : <BsEye />}
          </S.BtnView>
        </S.ContainerPass>
        {!loading && (<ButtonSubmit>Entrar</ButtonSubmit>)}
        {loading && (<ButtonSubmit className='disabled'>Aguarde...</ButtonSubmit>)}
      </S.Form>
    )
  }

  return (
    <S.Form onSubmit={submit}>
      <S.ContainerMsg className={error?.length ? 'active' : ''}>
        {error}
      </S.ContainerMsg>
      <Input
        placeholder="Nome de usuário"
        name='userName'
        onChange={setValue}
      />
      <Input
        placeholder="Email"
        name='email'
        onChange={setValue}
      />
      <S.ContainerPass>
        <Input
          type={passwordView ? 'text' : 'password'}
          placeholder="Confirmação de senha"
          name='password'
          onChange={setValue}
        />
        <S.BtnView onClick={() => setPasswordView((prev) => !prev)}>
          {passwordView ? <BsEyeSlash /> : <BsEye />}
        </S.BtnView>
      </S.ContainerPass>
      <S.ContainerPass>
        <Input
          type={confirmPasswordView ? 'text' : 'password'}
          placeholder="Confirmação de senha"
          name='confirmPassword'
          onChange={setValue}
        />
        <S.BtnView onClick={() => setConfirmPasswordView((prev) => !prev)}>
          {confirmPasswordView ? <BsEyeSlash /> : <BsEye />}
        </S.BtnView>
      </S.ContainerPass>
      {!loading && (<ButtonSubmit>Registrar-se</ButtonSubmit>)}
      {loading && (<ButtonSubmit className='disabled'>Aguarde...</ButtonSubmit>)}
    </S.Form>
  )
}
