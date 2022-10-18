import { Main } from '../../../components/ui/main'
import React from 'react'
import { PostForm } from '../../../components/forms/post'
import { useParams } from 'react-router-dom'
import { useApi } from '../../../hooks/api'
import { PhotoResponse } from '../../../types/photo'
import { PhotoService } from '../../../service/photo'

export const EditPostPage = () => {
  const { id } = useParams()
  const [photo, loading, callback] = useApi<PhotoResponse>({ service: PhotoService.getById })

  React.useEffect(() => {
    callback(id)
  }, [id])

  if (loading) return <p>carregando...</p>

  return (
    <Main>
      <PostForm editPost={photo} />
    </Main>
  )
}
