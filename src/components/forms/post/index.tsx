import { PhotoService } from '../../../service/photo'
import { PhotoResponse } from '../../../types/photo'
import { ButtonSubmit } from '../../ui/button'
import { IoMdImages } from 'react-icons/io'
import { MdClose } from 'react-icons/md'
import * as S from './style'
import React from 'react'
import env from '../../../utils/env'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../../contexts/auth-context'

type Props = {
  closeModal?: () => void
  editPost?: PhotoResponse
}

export const PostForm = ({ closeModal, editPost }: Props) => {
  const [subtitle, setSubtitle] = React.useState(editPost?.subtitle || '')
  const [error, setError] = React.useState<string>('')
  const [image, setImage] = React.useState<any>()
  const [loading, setLoading] = React.useState<boolean>(false)
  const navigate = useNavigate()
  const { user } = useAuth()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData()

    formData.append('image', image)
    formData.append('subtitle', subtitle)

    try {
      setLoading(true)
      await PhotoService.insert(formData)
      window.location.reload()
    } catch (error) {
      setError((error as any).message)
    } finally {
      setLoading(false)
    }
  }

  const updatePhoto = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      setLoading(true)
      await PhotoService.updatePhoto(editPost!._id, subtitle)
      navigate(`/${user?.userName}`)
    } catch (error) {
      setError((error as any).message)
    } finally {
      setLoading(false)
    }
  }

  if (editPost) {
    return (
      <S.Container className='page'>
        {error && (
        <S.ErrorMsg className='page'>
          {error}
        </S.ErrorMsg>
        )}
        <S.Title>Editar publicação</S.Title>
        <S.Form onSubmit={updatePhoto}>
          <S.ImagePreview src={`${env.uploads}/photos/${editPost.image}`} />
          <S.SectionPost>
          <S.InputSubtitle
            placeholder='Escreva um comentário...'
            name="subtitle"
            onChange={e => setSubtitle(e.target.value)}
            defaultValue={subtitle}
          />
          {!loading && (<ButtonSubmit>Concluir</ButtonSubmit>)}
          {loading && (<ButtonSubmit className='disabled'>Aguarde...</ButtonSubmit>)}
        </S.SectionPost>
        </S.Form>
      </S.Container>
    )
  }

  return (
    <S.Container>
      {error && (
        <S.ErrorMsg>
          {error}
        </S.ErrorMsg>
      )}
      <S.closeBtn onClick={closeModal}>
        <MdClose className='icon'/>
      </S.closeBtn>
      <S.Title>Nova publicação</S.Title>
      <S.Form onSubmit={handleSubmit}>
        <S.Label>
          {image && (
            <S.ImagePreview src={URL.createObjectURL(image)}/>
          )}
          {!image && (
            <S.IconPreview>
              <IoMdImages/>
            </S.IconPreview>
          )}
          <S.Input
            type={'file'}
            accept='image/*'
            onChange={e => setImage(e.target.files![0])}
          />
        </S.Label>
        <S.SectionPost>
          <S.InputSubtitle
            placeholder='Escreva um comentário...'
            name="subtitle"
            onChange={e => setSubtitle(e.target.value)}
          />
          {!loading && (<ButtonSubmit>Compartilhar</ButtonSubmit>)}
          {loading && (<ButtonSubmit className='disabled'>Aguarde...</ButtonSubmit>)}
        </S.SectionPost>
      </S.Form>
    </S.Container>
  )
}
