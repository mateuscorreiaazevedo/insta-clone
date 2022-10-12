import { useAuth } from '../../contexts/auth-context'
import { UserResponse } from '../../types/user'
import image from '../../assets/images/image'
import { Container } from '../ui/container'
import env from '../../utils/env'
import * as S from './style'
import React from 'react'
import { useClickOutside } from '../../hooks/click-outside'
import { ModalPortal } from '../modal'

type Props = {
  profileUser: UserResponse
}

export const Profile = ({ profileUser }: Props) => {
  const { userName, bio, link, userAvatar } = profileUser
  const { user } = useAuth()
  const editRef = React.useRef(null)
  const [edit, setEdit] = useClickOutside(editRef)

  return (
    <Container>
      <ModalPortal isOpen={edit}>
        <div ref={editRef}>

        </div>
      </ModalPortal>
      <S.SectionProfile>
        <S.UserAvatar
          src={userAvatar ? `${env.uploads}/users/${userAvatar}` : image.icon}
          alt={`Foto de perfil de ${userName}`}
        />
        <div>
          <S.Head>
            <S.UserName>{profileUser.userName}</S.UserName>
            {user?.userName === userName && <S.EditBtn onClick={setEdit}>Editar</S.EditBtn>}
          </S.Head>
          <div>
            <S.Bio>
              {bio}
            </S.Bio>
            <S.Link href={'https://' + link} target='_blank' rel="noreferrer">
              {link}
            </S.Link>
          </div>
        </div>
      </S.SectionProfile>
    </Container>
  )
}
