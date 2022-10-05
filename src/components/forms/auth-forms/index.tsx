import { BsEye, BsEyeSlash } from 'react-icons/bs'
import { Input } from '../../ui/input'
import * as S from './style'
import React from 'react'

type Props = {
  type: 'login' | 'register';
  submit?: (e: React.FormEvent<HTMLFormElement>) => void;
};

export const AuthForm = ({ type, submit }: Props) => {
  const [passwordView, setPasswordView] = React.useState(false)
  const [confirmPasswordView, setConfirmPasswordView] = React.useState(false)

  if (type === 'login') {
    return (
      <S.Form onSubmit={submit}>
        <S.ContainerMsg>

        </S.ContainerMsg>
        <Input
          placeholder="Nome de usuário"

        />
        <Input
          placeholder="Email"
        />
        <S.ContainerPass>
          <Input
            type={passwordView ? 'text' : 'password'}
            placeholder="Confirmação de senha"
          />
          <S.BtnView onClick={() => setPasswordView((prev) => !prev)}>
            {passwordView ? <BsEyeSlash /> : <BsEye />}
          </S.BtnView>
          <S.Warning>
            *A senha deve conter no mínimo 6 caracteres.
          </S.Warning>
        </S.ContainerPass>
      </S.Form>
    )
  }

  return (
    <S.Form onSubmit={submit}>
      <S.ContainerMsg >
        teste
      </S.ContainerMsg>
      <Input
        placeholder="Nome de usuário"
        name='userName'
      />
      <Input
        placeholder="Email"
        name='email'
      />
      <S.ContainerPass>
        <Input
          type={passwordView ? 'text' : 'password'}
          placeholder="Confirmação de senha"
          name='password'
        />
        <S.BtnView onClick={() => setPasswordView((prev) => !prev)}>
          {passwordView ? <BsEyeSlash /> : <BsEye />}
        </S.BtnView>
        <S.Warning>
          *A senha deve conter no mínimo 6 caracteres.
        </S.Warning>
      </S.ContainerPass>
      <S.ContainerPass>
        <Input
          type={confirmPasswordView ? 'text' : 'password'}
          placeholder="Confirmação de senha"
          name='confirmPassword'
        />
        <S.BtnView onClick={() => setConfirmPasswordView((prev) => !prev)}>
          {confirmPasswordView ? <BsEyeSlash /> : <BsEye />}
        </S.BtnView>

      </S.ContainerPass>
    </S.Form>
  )
}
