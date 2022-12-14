import { BsChat, BsHeart, BsHeartFill, BsThreeDots } from 'react-icons/bs'
import { CommentResponse, PhotoResponse } from '../../../types/photo'
import { useLikeAndComment } from '../../../hooks/like-comment'
import { useClickOutside } from '../../../hooks/click-outside'
import { useAuth } from '../../../contexts/auth-context'
import { PhotoService } from '../../../service/photo'
import image from '../../../assets/images/image'
import { Link } from 'react-router-dom'
import env from '../../../utils/env'
import * as S from './style'
import React from 'react'

type Props = {
  post: PhotoResponse,
  userAvatar?: string
  userName?: string
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

export const ModalPost = ({ post, userAvatar, userName, setLoading }: Props) => {
  const optionsRef = React.useRef(null)
  const [options, setOptions] = useClickOutside(optionsRef)
  const [comment, setComment] = React.useState('')
  const { handleLike, handleComment } = useLikeAndComment({ setLoading, setComment })
  const { user } = useAuth()

  const handleDelete = async (id: string) => {
    try {
      setLoading(prev => !prev)
      await PhotoService.deletePhoto(id)
      setComment('')
    } catch (error) {
      console.error((error as any).message)
    } finally {
      setLoading(prev => !prev)
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
              <S.UserAvatar src={userAvatar ? `${env.uploads}/users/${userAvatar}` : image.icon} alt={userAvatar} />
              <p>
                <b>{userName}</b>  {post.subtitle}
              </p>
            </S.ContainerSubtitle>
          )}
          {post.comments?.map((item: CommentResponse, key) => (
            <S.ContainerSubtitle key={key}>
              <S.UserAvatar src={item.avatar ? `${env.uploads}/users/${item.avatar}` : image.icon} alt={item.name} />
              <p>
                <b>{item.name}</b>  {item.comment}
              </p>
            </S.ContainerSubtitle>

          ))}
        </S.CommentsList>
        <S.ContainerActions>
          <S.BtnLike onClick={() => handleLike(post._id)}>
              {post.likes?.includes(user!._id) ? <BsHeartFill className='red'/> : <BsHeart/>}
          </S.BtnLike>
          <S.BtnBallon htmlFor='comment'>
            <BsChat/>
          </S.BtnBallon>
          {post.likes?.length
            ? (
            <S.UsersLikeds>
              {post.likes.length} {post.likes.length === 1 ? 'curtida' : 'curtidas'}
            </S.UsersLikeds>
              )
            : <S.UsersLikeds>nenhuma curtida</S.UsersLikeds>}
          <S.ContainerComments onSubmit={e => handleComment(e, post._id, comment)}>
              <S.CommentField
                placeholder='Adicionar coment??rio...'
                id='comment'
                onChange={e => setComment(e.target.value)}
                value={comment}
              />
              <S.BtnSubmit type='submit'>
                Publicar
              </S.BtnSubmit>
          </S.ContainerComments>
        </S.ContainerActions>
      </S.ContainerInfo>
    </S.Div>
  )
}
