import { useAuth } from '../../contexts/auth-context'
import image from '../../assets/images/image'
import env from '../../utils/env'
import * as S from './style'
import React from 'react'

export const AsideFeed = () => {
  const { user } = useAuth()

  return (
    <S.Aside>
      <S.UserLink to={`/${user?.userName}`}>
        <S.UserAvatar
          src={user?.userAvatar ? `${env.uploads}/users/${user?.userAvatar}` : image.icon}
          alt={user?.userName}
        />
        <b>
          {user?.userName}
        </b>
      </S.UserLink>
      <S.ContainerLink>
        <li><a href="https://instagram.com/mateuscorreiaazevedo" target='_blank' rel="noreferrer">instagram</a></li>
        <li><a href="https://likendin.com/in/mateuscorreiaazevedo" target='_blank' rel="noreferrer">linkedin</a></li>
        <li><a href="https://github.com/mateuscorreiaazevedo" target='_blank' rel="noreferrer">github</a></li>
        <li><a href="https://mateusdev.com.br" target='_blank' rel="noreferrer">mateusDev</a></li>
      </S.ContainerLink>
    </S.Aside>
  )
}
