import { UserRequisition, UserResponse } from '../../../types/user'
import { useSetValue } from '../../../hooks/set-value'
import { BsEye, BsEyeSlash, BsCamera } from 'react-icons/bs'
import { ButtonSubmit } from '../../ui/button'
import { Input } from '../../ui/input'
import * as S from './style'
import React from 'react'
import env from '../../../utils/env'
import image from '../../../assets/images/image'

type Props ={
  data: UserResponse
}

export const EditProfile = ({ data }: Props) => {
  const initialValue: UserRequisition = {
    bio: data.bio,
    link: data.link,
    userName: data.userName,
    password: ''
  }
  const { setValue, values } = useSetValue<UserRequisition>(initialValue)
  const [viewPass, setViewPass] = React.useState(false)
  const [userAvatar, setUserAvatar] = React.useState<any>(`${env.uploads}/users/${data.userAvatar}`)
  const [preview, setPreview] = React.useState<any>(userAvatar)
  const [error] = React.useState('')

  const setAvatar = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target

    setUserAvatar(files![0])
    setPreview(URL.createObjectURL(files![0]))
  }

  return (
    <S.Container>

      <S.Form>
        <S.ContainerAvatar>
          <S.UserAvatar
            src={preview.includes('undefined') ? image.icon : preview}
          />
          <S.HoverCamera>
            <BsCamera/>
          </S.HoverCamera>
          <input
            type="file"
            accept='image/*'
            onChange={setAvatar}
          />
          <p>*Clique no ícone para adicionar ou alterar a foto de perfil</p>
        </S.ContainerAvatar>
        <div className="divider"></div>
        <label>
          <Input
            placeholder='Nome de usuário'
            name='userName'
            onChange={setValue}
            defaultValue={values?.userName ?? ''}
          />
        </label>
        <Input
          placeholder='Biografia'
          name='bio'
          onChange={setValue}
          defaultValue={values?.bio ?? ''}
        />
        <Input
          placeholder='Site ou Link'
          name='link'
          onChange={setValue}
          defaultValue={values?.link ?? ''}
        />
        <div className="divider"></div>
        <S.LabelPassword>
          <Input
            type={viewPass ? 'text' : 'password'}
            placeholder='Insira uma nova senha...'
            name='password'
            onChange={setValue}
          />
          <S.BtnViewPass onClick={() => setViewPass(prev => !prev)}>
            {!viewPass ? <BsEyeSlash/> : <BsEye/>}
          </S.BtnViewPass>
        </S.LabelPassword>
        <div className="divider"></div>
        {error && (
        <S.ErrorMsg>
          {error}
        </S.ErrorMsg>
        )}
        <ButtonSubmit>Salvar</ButtonSubmit>
      </S.Form>

    </S.Container>
  )
}
