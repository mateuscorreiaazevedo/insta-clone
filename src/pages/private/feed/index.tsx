import { Container } from '../../../components/ui/container'
import { AsideFeed } from '../../../components/feed-aside'
import { PostsList } from '../../../components/posts'
import { PhotoService } from '../../../service/photo'
import { PhotoResponse } from '../../../types/photo'
import { Main } from '../../../components/ui/main'
import { useApi } from '../../../hooks/api'
import * as S from './style'
import React from 'react'

export const FeedPage = () => {
  const [posts,, callback,, setLoading] = useApi<PhotoResponse[]>({
    service: PhotoService.getAll,
    initialValue: []
  })

  React.useEffect(() => {
    callback()
  }, [posts])

  return (
    <Main>
      <Container style={{
        display: 'flex',
        justifyContent: 'space-between',
        paddingTop: '100px',
        paddingBottom: '100px'
      }}>
        <S.Article>
          {posts.map((post: PhotoResponse, key) => (
            <PostsList
              key={key}
              post={post}
              setLoading={setLoading}
            />
          ))}
        </S.Article>
        <AsideFeed/>
      </Container>
      </Main>
  )
}
