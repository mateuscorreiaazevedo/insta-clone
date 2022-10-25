import { useClickOutside } from '../../hooks/click-outside'
import { PhotoResponse } from '../../types/photo'
import { UserService } from '../../service/user'
import { ModalPost } from '../modal/modal-post'
import { UserResponse } from '../../types/user'
import { useApi } from '../../hooks/api'
import { ModalPortal } from '../modal'
import env from '../../utils/env'
import * as S from './style'
import React from 'react'
import { BsChatFill, BsHeartFill } from 'react-icons/bs'

type Props = {
  post: PhotoResponse
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

export const ExploreCard = ({ post, setLoading }: Props) => {
  const [user,, call] = useApi<UserResponse>({ service: UserService.getUserById })
  const ref = React.useRef(null)
  const [toggle, setToggle] = useClickOutside(ref)

  React.useEffect(() => {
    call(post.userId)
  }, [])

  return (
    <>
    <S.ContainerImage onClick={setToggle}>
      <S.Image
        src={`${env.uploads}/photos/${post.image}`}
        alt={post.subtitle || post.userName}
      />
      <S.Preview>
        <p>
          {post.likes?.length} <BsHeartFill/>
        </p>
        <p>
          {post.comments?.length} <BsChatFill/>
        </p>
      </S.Preview>
    </S.ContainerImage>
    <ModalPortal isOpen={toggle}>
      <div ref={ref}>
        <ModalPost
          post={post}
          setLoading={setLoading}
          userAvatar={user?.userAvatar}
          userName={user?.userName}
        />
      </div>
    </ModalPortal>
    </>
  )
}
