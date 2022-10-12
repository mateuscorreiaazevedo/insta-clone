import { BsSearch } from 'react-icons/bs'
import { Input } from '../../ui/input'
import * as S from './style'
import React from 'react'

export const SearchUser = () => {
  const [query, setQuery] = React.useState('')

  console.log(query)

  return (
    <S.ContainerSearch>
      <BsSearch />
      <Input
        style={{ height: '30px' }}
        placeholder="Pesquisar"
        onChange={e => setQuery(e.target.value)}
      />
      <S.ContainerResults>
        teste
      </S.ContainerResults>
    </S.ContainerSearch>
  )
}
