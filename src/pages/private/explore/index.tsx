import { ExploreCard } from '../../../components/explore-card'
import { Container } from '../../../components/ui/container'
import { Loader } from '../../../components/ui/loader'
import { PhotoService } from '../../../service/photo'
import { PhotoResponse } from '../../../types/photo'
import { Main } from '../../../components/ui/main'
import { useApi } from '../../../hooks/api'
import React from 'react'

export const ExplorePage = () => {
  const [posts, load, call,, setLoading] = useApi<PhotoResponse[]>({ service: PhotoService.getAll })

  React.useEffect(() => {
    call()
  }, [load])

  if (load && posts === undefined) {
    return (
      <Main
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Loader/>
      </Main>
    )
  }

  return (
    <Main>
      <Container
        style={{
          display: 'grid',
          gridTemplateColumns: '33% 33% 33%',
          gridGap: '15px',
          padding: '15px 0'
        }}
      >
        {posts.length
          ? posts.map((post: PhotoResponse, key) => (
          <ExploreCard
            key={key}
            post={post}
            setLoading={setLoading}
          />

          ))
          : <p>Nenhum resultado encontrado</p>}
      </Container>
    </Main>
  )
}
