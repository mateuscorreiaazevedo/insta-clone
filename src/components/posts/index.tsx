import { BsHeart, BsHeartFill } from 'react-icons/bs'
import { useAuth } from '../../contexts/auth-context'
import { PhotoResponse } from '../../types/photo'
import { UserService } from '../../service/user'
import { UserResponse } from '../../types/user'
import { useApi } from '../../hooks/api'
import env from '../../utils/env'
import * as S from './style'
import React from 'react'
import { useLikeAndComment } from '../../hooks/like-comment'

type Props = {
  post: PhotoResponse
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

export const PostsList = ({ post, setLoading }: Props) => {
  const { user } = useAuth()
  const [comment, setComment] = React.useState('')
  const { handleLike, handleComment } = useLikeAndComment({ setLoading, setComment })
  const [userPost, load, callback] = useApi<UserResponse | undefined>({
    service: UserService.getUserById
  })

  React.useEffect(() => {
    callback(post.userId)
  }, [load])

  return (
    <S.PostSection>
      <S.PostNav>
        <S.HeadLine to={`/${userPost?.userName}`}>
          <S.PostUserAvatar
            src={`${env.uploads}/users/${userPost?.userAvatar}`}
            alt={userPost?.userName}
          />
          <h2>
            {userPost?.userName}
          </h2>
        </S.HeadLine>
      </S.PostNav>
      <S.PostImage
        src={`${env.uploads}/photos/${post.image}`}
      />
      <S.ContainerActions>
        <S.ContainerBtnActions>
          <S.BtnLike onClick={() => handleLike(post._id)}>
            {post?.likes?.includes(user!._id) ? <BsHeartFill className='red'/> : <BsHeart/>}
          </S.BtnLike>
          {post.likes?.length
            ? (
            <S.PostLikes>
              {post.likes.length} {post.likes.length === 1 ? 'curtida' : 'curtidas'}
            </S.PostLikes>
              )
            : <S.PostLikes>Nenhuma curtida</S.PostLikes>}
        </S.ContainerBtnActions>
        <S.PostForm onSubmit={e => handleComment(e, post._id, comment)}>
          <S.PostComment
            placeholder='Escreva um comentário...'
            onChange={e => setComment(e.target.value)}
            value={comment}
          />
          <S.BtnCommentSubmit type='submit'>
            publicar
          </S.BtnCommentSubmit>
        </S.PostForm>
      </S.ContainerActions>
    </S.PostSection>
  )
}
