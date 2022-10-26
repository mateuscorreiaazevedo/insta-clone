import { debounceHelper } from '../../../../utils/debounce'
import { UserService } from '../../../../service/user'
import { UserResponse } from '../../../../types/user'
import image from '../../../../assets/images/image'
import { useApi } from '../../../../hooks/api'
import { Loader } from '../../../ui/loader'
import { Input } from '../../../ui/input'
import env from '../../../../utils/env'
import * as S from './style'
import React from 'react'

export const SearchMobile = () => {
  const [query, setQuery] = React.useState('')
  const { debounced } = debounceHelper(UserService.searchUsers)
  const [users, loading, callback] = useApi<UserResponse[]>({ service: debounced, initialValue: [] })

  React.useEffect(() => {
    callback(query)
  }, [query])

  return (
    <S.Div>
      <Input
        placeholder='Pesquisar'
        onChange={e => setQuery(e.target.value)}
      />
      {loading && (
        <Loader/>
      )}
      {!loading && (
        <>
      {users.length
        ? users.map((user: UserResponse, key) => (
          <S.ContainerProfile to={`/${user.userName}`} key={key}>
            <S.ImageProfile
              src={user.userAvatar ? `${env.uploads}/users/${user.userAvatar}` : image.icon}
            />
            <b>
              {user.userName}
            </b>
        </S.ContainerProfile>
        ))
        : <p>Nenhum usuário encontrado</p>}
        </>
      )}
    </S.Div>
  )
}
