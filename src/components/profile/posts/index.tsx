import { useClickOutside } from '../../../hooks/click-outside'
import { BsChatFill, BsHeartFill } from 'react-icons/bs'
import { PhotoResponse } from '../../../types/photo'
import { ModalPortal } from '../../modal'
import { ModalPost } from './modal-post'
import { Loader } from '../../ui/loader'
import env from '../../../utils/env'
import * as S from './style'
import React from 'react'

type Props = {
  post: PhotoResponse
  loading: boolean
  userAvatar: string
  userName: string
}

export const ProfilePosts = ({ userAvatar, loading, post, userName }: Props) => {
  const ref = React.useRef(null)
  const [toggle, setToggle] = useClickOutside(ref)

  if (loading) {
    return (
      <div>
        <Loader/>
      </div>
    )
  }

  return (
    <>
    <S.ContainerImage onClick={setToggle}>
      <S.Image src={`${env.uploads}/photos/${post.image}`} />
      <S.LikesAndComments>
        <S.Info>
          {post.likes?.length} <BsHeartFill/>
        </S.Info>
        <S.Info>
          {post.comments?.length} <BsChatFill/>
        </S.Info>
      </S.LikesAndComments>
    </S.ContainerImage>
    <ModalPortal isOpen={toggle}>
      <div ref={ref}>
        <ModalPost
          userAvatar={userAvatar}
          post={post}
          userName={userName}
        />
      </div>
    </ModalPortal>
    </>
  )
}
