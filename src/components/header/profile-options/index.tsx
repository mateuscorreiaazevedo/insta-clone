import { useTheme } from '../../../contexts/theme-context'
import { BsSun, BsMoon, BsDoorOpen } from 'react-icons/bs'
import { useAuth } from '../../../contexts/auth-context'
import { FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import * as S from './style'
import React from 'react'

type Props = {
  isOpen: boolean
}

export const ProfileOptions = ({ isOpen }: Props) => {
  const { handleTheme, theme } = useTheme()
  const { handleLogout, user } = useAuth()

  return (
    <S.ContainerOptions className={isOpen ? 'active' : ''}>
      <S.Options>
        <span onClick={handleTheme}>
          {theme.title === 'light' ? <BsSun/> : <BsMoon/>} Alternar tema
        </span>
      </S.Options>
      <S.Options>
        <Link to={`/${user?.userName}`}>
          <FaUser/> perfil
        </Link>
      </S.Options>
      <S.Options>
        <span onClick={handleLogout}>
          <BsDoorOpen/> Sair
        </span>
      </S.Options>
    </S.ContainerOptions>
  )
}
