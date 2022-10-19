import { useClickOutside } from '../../../../hooks/click-outside'
import { PhotoService } from '../../../../service/photo'
import { PhotoResponse } from '../../../../types/photo'
import { BsHeart, BsHeartFill, BsThreeDots } from 'react-icons/bs'
import env from '../../../../utils/env'
import * as S from './style'
import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../../../contexts/auth-context'
import image from '../../../../assets/images/image'
import { useApi } from '../../../../hooks/api'
import { UserResponse } from '../../../../types/user'
import { UserService } from '../../../../service/user'

type Props = {
  post: PhotoResponse,
  userAvatar?: string
  userName?: string
  likes: string[] | undefined
  handleLike: (id: string) => Promise<void>
}

export const ModalPost = ({ post, userAvatar, userName, handleLike, likes }: Props) => {
  const optionsRef = React.useRef(null)
  const [options, setOptions] = useClickOutside(optionsRef)
  const { user } = useAuth()
  const [profile,, call] = useApi<UserResponse>({ service: UserService.getUserById })

  if (likes) {
    React.useEffect(() => {
      likes.forEach(id => call(id as string))
    }, [likes])
  }

  const handleDelete = async (id: string) => {
    try {
      await PhotoService.deletePhoto(id)
      window.location.reload()
    } catch (error) {
      console.error((error as any).message)
    }
  }

  return (
    <S.Div>
      <S.Image src={env.uploads + '/photos/' + post.image} alt={post.subtitle || post.userName} />
      <S.ContainerInfo>
        <S.Nav>
          <S.LinkTo to={`/${post.userName}`}>
            <S.UserAvatar
              src={userAvatar ? `${env.uploads}/users/${userAvatar}` : image.icon}
              alt={userAvatar}
            />
            <h3>
              {userName}
            </h3>
          </S.LinkTo>
          {userName === user?.userName && (
          <div>
            <BsThreeDots onClick={setOptions} className='btn-options'/>
              <S.OptionsNav className={options ? 'active' : ''}>
                <div ref={optionsRef}>
                  <S.Options>
                    <Link to={`/edit/post/${post._id}`}>
                      Editar
                    </Link>
                  </S.Options>
                  <S.Options className='delete' onClick={() => handleDelete(post._id)}>
                    Excluir
                  </S.Options>
                </div>
              </S.OptionsNav>
          </div>
          )}
        </S.Nav>
        <S.CommentsList>
          {post?.subtitle && (
            <S.ContainerSubtitle>
              <S.UserAvatar src={`${env.uploads}/users/${userAvatar}`} alt={userAvatar} />
              <p>
              <b>{userName}</b>  {post.subtitle}
              </p>
          </S.ContainerSubtitle>
          )}
        </S.CommentsList>
        <div>
          <S.BtnLike onClick={() => handleLike(post._id)}>
              {likes?.includes(user!._id) ? <BsHeartFill className='red'/> : <BsHeart/>}
          </S.BtnLike>
          {likes?.length
            ? (
            <p>
              curtido por <b>{profile?.userName}</b>
              {likes?.length === 2 && ` e mais ${likes.length - 1} pessoa`}
              {likes?.length > 2 && ` e mais ${likes.length - 1} pessoas`}
            </p>
              )
            : <p>nenhuma curtida</p>}
        </div>
      </S.ContainerInfo>
    </S.Div>
  )
}
