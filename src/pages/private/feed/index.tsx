import { Container } from '../../../components/ui/container'
import { Main } from '../../../components/ui/main'
import React from 'react'
import { AsideFeed } from '../../../components/feed-aside'

export const FeedPage = () => {
  return (
    <Main>
      <Container style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '100px' }}>
        <article>
          feed
        </article>
        <AsideFeed/>
      </Container>
      </Main>
  )
}
