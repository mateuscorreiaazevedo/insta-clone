import { PrivateLayout } from '../../components/layouts/private'
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
      </Routes>
    </PrivateLayout>
  )
}
