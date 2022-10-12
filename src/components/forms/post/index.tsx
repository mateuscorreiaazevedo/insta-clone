import { PhotoService } from '../../../service/photo'
import { ButtonSubmit } from '../../ui/button'
import { IoMdImages } from 'react-icons/io'
import { MdClose } from 'react-icons/md'
import * as S from './style'
import React from 'react'

type Props = {
  closeModal: () => void
}

export const PostForm = ({ closeModal }: Props) => {
  const [subtitle, setSubtitle] = React.useState<string>('')
  const [error, setError] = React.useState<string>('')
  const [image, setImage] = React.useState<any>()
  const [loading, setLoading] = React.useState<boolean>(false)

  const insertPost = async (e: React.FormEvent<HTMLFormElement>) => {
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
      <S.Form onSubmit={insertPost}>
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
