import { BsHouseDoorFill, BsHouseDoor, BsPlusSquare, BsPlusSquareFill, BsSearch } from 'react-icons/bs'
import { MdExplore, MdOutlineExplore } from 'react-icons/md'
import { useClickOutside } from '../../hooks/click-outside'
import { Link, useLocation } from 'react-router-dom'
import { ProfileOptions } from './profile-options'
import image from '../../assets/images/image'
import { Container } from '../ui/container'
import { Input } from '../ui/input'
import * as S from './style'
import React from 'react'
import { ModalPortal } from '../modal'

export const Header = () => {
  const { pathname } = useLocation()
  const openRef = React.useRef(null)
  const [toggle, setToggle] = useClickOutside(openRef)
  const [modal, setModal] = useClickOutside(openRef)

  return (
    <S.Header>
      <Container>
        <S.Content>
            <div>
              <S.Title to='/'>
                Instagram
              </S.Title>
            </div>
            <S.ContainerSearch>
              <BsSearch/>
              <Input
                style={{ height: '30px' }}
                placeholder='Pesquisar'
              />
            </S.ContainerSearch>
            <S.Nav>
              <li>
                <Link to='/'>
                  {pathname === '/' ? <BsHouseDoorFill/> : <BsHouseDoor/>}
                </Link>
              </li>
              <li>
                <div onClick={setModal}>
                  {!modal ? <BsPlusSquare/> : <BsPlusSquareFill/>}
                  <ModalPortal isOpen={modal}>
                    teste
                  </ModalPortal>
                </div>
              </li>
              <li>
                <Link to='/explore'>
                  {pathname === '/explore' ? <MdExplore/> : <MdOutlineExplore/>}
                </Link>
              </li>
              <li>
                <div style={{ position: 'relative' }}>
                  <S.IconNav src={image.icon} onClick={setToggle} />
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
