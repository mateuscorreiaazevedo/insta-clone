import { useClickOutside } from '../../../hooks/click-outside'
import { debounceHelper } from '../../../utils/debounce'
import { UserService } from '../../../service/user'
import { UserResponse } from '../../../types/user'
import image from '../../../assets/images/image'
import { useApi } from '../../../hooks/api'
import { BsSearch } from 'react-icons/bs'
import { Loader } from '../../ui/loader'
import { Input } from '../../ui/input'
import env from '../../../utils/env'
import * as S from './style'
import React from 'react'

export const SearchUser = () => {
  const [query, setQuery] = React.useState('')
  const searchRef = React.useRef(null)
  const [search, setSearch] = useClickOutside(searchRef)
  const { debounced } = debounceHelper(UserService.searchUsers)
  const [users, loading, callback] = useApi<UserResponse[]>({ service: debounced, initialValue: [] })

  React.useEffect(() => {
    if (search) {
      callback(query)
    }
  }, [query, search])

  return (
    <S.ContainerSearch>
      <Input
        style={{ height: '30px' }}
        placeholder="Pesquisar"
        onChange={e => setQuery(e.target.value)}
        onFocus={setSearch}
      />
      <BsSearch className='icon'/>
      <div ref={searchRef}>
        {loading && (
          <S.ContainerResults className={`center ${search ? 'active' : ''}`}>
              <Loader/>
          </S.ContainerResults>
        )}
        {!loading && (
        <S.ContainerResults className={search ? 'active' : ''}>
          {users.map((user: UserResponse, key) => (
            <S.ContainerProfile to={`/${user.userName}`} key={key} onClick={setSearch}>
              <S.ImageProfile
                src={user.userAvatar ? `${env.uploads}/users/${user.userAvatar}` : image.icon}
              />
              <b>
                {user.userName}
              </b>
            </S.ContainerProfile>
          ))}
        </S.ContainerResults>
        )}
      </div>
    </S.ContainerSearch>
  )
}

export function searchUsers (searchUsers: (q: string) => Promise<any>): { debounced: any } {
  throw new Error('Function not implemented.')
}
