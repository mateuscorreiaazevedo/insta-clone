import { NotFoundComponent } from '../../../components/not-found'
import { useAuth } from '../../../contexts/auth-context'
import { Loader } from '../../../components/ui/loader'
import { Profile } from '../../../components/profile'
import { UserService } from '../../../service/user'
import { Main } from '../../../components/ui/main'
import { UserResponse } from '../../../types/user'
import { useParams } from 'react-router-dom'
import { useApi } from '../../../hooks/api'
import React from 'react'

export const ProfilePage = () => {
  const [profile, loading, call] = useApi<UserResponse | null>({
    service: UserService.getByUserName,
    initialValue: null
  })
  const { userName } = useParams()
  const { user } = useAuth()

  React.useEffect(() => {
    call(userName)
  }, [userName])

  if (loading) {
    return (
      <Main
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Loader />
      </Main>
    )
  }

  if (!profile) {
    return <NotFoundComponent />
  }

  return (
    <Main>
      <Profile profileUser={profile === user ? user : profile} />
    </Main>
  )
}
