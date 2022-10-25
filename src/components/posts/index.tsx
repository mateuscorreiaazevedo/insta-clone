import { BsHeart, BsHeartFill, BsThreeDots } from 'react-icons/bs'
import { useLikeAndComment } from '../../hooks/like-comment'
import { useClickOutside } from '../../hooks/click-outside'
import { useAuth } from '../../contexts/auth-context'
import { PhotoService } from '../../service/photo'
import { PhotoResponse } from '../../types/photo'
import { UserService } from '../../service/user'
import { UserResponse } from '../../types/user'
import { ModalPost } from '../modal/modal-post'
import image from '../../assets/images/image'
import { useApi } from '../../hooks/api'
import { Link } from 'react-router-dom'
import { ModalPortal } from '../modal'
import env from '../../utils/env'
import * as S from './style'
import React from 'react'

type Props = {
  post: PhotoResponse
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

export const PostsList = ({ post, setLoading }: Props) => {
  const { user } = useAuth()
  const [comment, setComment] = React.useState('')
  const { handleLike, handleComment } = useLikeAndComment({ setLoading, setComment })
  const [userPost, load, callback] = useApi<UserResponse | undefined>({ service: UserService.getUserById })
  const optionsRef = React.useRef(null)
  const [activeOptions, setActiveOptions] = useClickOutside(optionsRef)
  const modalRef = React.useRef(null)
  const [modal, setModal] = useClickOutside(modalRef)

  React.useEffect(() => {
    callback(post.userId)
  }, [load])

  const handleDelete = async (id: string) => {
    try {
      await PhotoService.deletePhoto(id)
      window.location.reload()
    } catch (error) {
      console.error((error as any).message)
    }
  }

  return (
    <S.PostSection>
      <ModalPortal isOpen={modal}>
        <div ref={modalRef}>
          <ModalPost
            post={post}
            userName={post.userName}
            setLoading={setLoading}
            userAvatar={userPost?.userAvatar}
          />
        </div>
      </ModalPortal>
      <S.PostNav>
        <S.HeadLine to={`/${userPost?.userName}`}>
          <S.PostUserAvatar
            src={userPost?.userAvatar ? `${env.uploads}/users/${userPost?.userAvatar}` : image.icon}
            alt={userPost?.userName}
          />
          <h2>
            {userPost?.userName}
          </h2>
        </S.HeadLine>
        {post.userId === user?._id && (
        <S.NavOptions>
          <BsThreeDots onClick={setActiveOptions}/>
          <div ref={optionsRef}>
            <ul className={activeOptions ? 'active' : ''}>
              <li>
                <Link to={`/edit/post/${post._id}`}>Editar</Link>
              </li>
              <li className='red' onClick={() => handleDelete(post._id)}>
                Excluir
              </li>
            </ul>
          </div>
        </S.NavOptions>
        )}
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
        <S.CommentList>
          {post.subtitle && (
            <S.Subtitle>
              <Link to={`/${post.userName}`}>{post.userName}</Link> {post.subtitle}
            </S.Subtitle>
          )}
          <S.Subtitle>
            <Link to={`/${post.comments[0]?.name}`}>{post.comments[0]?.name}</Link> {post.comments[0]?.comment}
          </S.Subtitle>
          {post.comments?.length > 1 && (
            <S.More onClick={setModal}>
              Toque para visualizar mais comentários*
            </S.More>
          )}
        </S.CommentList>
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
