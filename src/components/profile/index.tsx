import { useClickOutside } from '../../hooks/click-outside'
import { useAuth } from '../../contexts/auth-context'
import { UserResponse } from '../../types/user'
import image from '../../assets/images/image'
import { Container } from '../ui/container'
import { ModalPortal } from '../modal'
import { EditProfile } from './edit'
import env from '../../utils/env'
import * as S from './style'
import React from 'react'
import { useApi } from '../../hooks/api'
import { PhotoResponse } from '../../types/photo'
import { PhotoService } from '../../service/photo'
import { ProfilePosts } from './posts'

type Props = {
  profileUser: UserResponse
}

export const Profile = ({ profileUser }: Props) => {
  const { _id, userName, bio, link, userAvatar } = profileUser
  const { user } = useAuth()
  const editRef = React.useRef(null)
  const [edit, setEdit] = useClickOutside(editRef)

  const [posts, loading, call] = useApi<PhotoResponse[]>({ service: PhotoService.getByUser })

  React.useEffect(() => {
    call(_id)
  }, [profileUser])

  return (
    <Container>
      <ModalPortal isOpen={edit}>
        <div ref={editRef}>
          <EditProfile data={profileUser}/>
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
      <S.Publications>
        Publicações
        <div className="divider"/>
      </S.Publications>
      <S.SectionPosts>
        {posts?.map((post: PhotoResponse, key) => (
            <ProfilePosts
              key={key}
              post={post}
              userAvatar={userAvatar!}
              loading={loading}
              userName={userName}
            />
        ))}
      </S.SectionPosts>
      {!posts?.length && <S.Publications>Nenhuma publicação</S.Publications>}
    </Container>
  )
}
