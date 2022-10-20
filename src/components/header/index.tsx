import { BsHouseDoorFill, BsHouseDoor, BsPlusSquare, BsPlusSquareFill } from 'react-icons/bs'
import { MdExplore, MdOutlineExplore } from 'react-icons/md'
import { useClickOutside } from '../../hooks/click-outside'
import { Link, useLocation } from 'react-router-dom'
import { ProfileOptions } from './profile-options'
import image from '../../assets/images/image'
import { Container } from '../ui/container'
import { SearchUser } from './search-user'
import { PostForm } from '../forms/post'
import { ModalPortal } from '../modal'
import * as S from './style'
import React from 'react'
import { useAuth } from '../../contexts/auth-context'
import env from '../../utils/env'

export const Header = () => {
  const { user } = useAuth()
  const { pathname } = useLocation()
  const openRef = React.useRef(null)
  const postRef = React.useRef(null)
  const [toggle, setToggle] = useClickOutside(openRef)
  const [modal, setModal] = useClickOutside(postRef)

  return (
    <S.Header>
      <Container>
        <S.Content>
            <div>
              <S.Title to='/'>
                Instagram
              </S.Title>
            </div>
            <SearchUser/>
            <S.Nav>
              <li>
                <Link to='/'>
                  {(pathname === '/' && !modal) ? <BsHouseDoorFill/> : <BsHouseDoor/>}
                </Link>
              </li>
              <li>
                <div onClick={setModal}>
                  {!modal ? <BsPlusSquare/> : <BsPlusSquareFill/>}
                </div>
                <ModalPortal isOpen={modal}>
                  <div ref={postRef}>
                    <PostForm closeModal={setModal}/>
                  </div>
                </ModalPortal>
              </li>
              <li>
                <Link to='/explore'>
                  {pathname === '/explore' ? <MdExplore/> : <MdOutlineExplore/>}
                </Link>
              </li>
              <li>
                <div style={{ position: 'relative' }}>
                  <S.IconNav
                    src={user?.userAvatar ? `${env.uploads}/users/${user.userAvatar}` : image.icon}
                    onClick={setToggle}
                    alt={user?.userName}
                    className={toggle || pathname === `/${user?.userName}` ? 'actived' : ''}
                  />
                  <div ref={openRef}>
                    <ProfileOptions isOpen={toggle}/>
                  </div>
                </div>
              </li>
            </S.Nav>
        </S.Content>
      </Container>
    </S.Header>
  )
}
