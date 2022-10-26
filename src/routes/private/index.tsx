import { SearchMobilePage } from '../../pages/private/search-mobile'
import { PrivateLayout } from '../../components/layouts/private'
import { EditPostPage } from '../../pages/private/edit-post'
import { ProfilePage } from '../../pages/private/profile'
import { ExplorePage } from '../../pages/private/explore'
import { FeedPage } from '../../pages/private/feed'
import { Routes, Route } from 'react-router-dom'
import React from 'react'

export const PrivateRoutes = () => {
  return (
    <PrivateLayout>
      <Routes>
        <Route index element={<FeedPage/>} />
        <Route path='/:userName' element={<ProfilePage/>} />
        <Route path='/explore' element={<ExplorePage/>} />
        <Route path='/edit/post/:id' element={<EditPostPage/>}/>
        <Route path='/s' element={<SearchMobilePage/>}/>
      </Routes>
    </PrivateLayout>
  )
}
