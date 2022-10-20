import { PhotoService } from '../service/photo'
import React from 'react'

type Props = {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
  setComment: React.Dispatch<React.SetStateAction<string>>
}

export const useLikeAndComment = ({ setLoading, setComment }: Props) => {
  const handleLike = async (id: string) => {
    try {
      setLoading(prev => !prev)
      await PhotoService.likedPhoto(id)
    } catch (error) {
      console.error((error as any).message)
    } finally {
      setLoading(prev => !prev)
    }
  }

  const handleComment = async (e: React.FormEvent<HTMLFormElement>, id: string, comment: string) => {
    e.preventDefault()

    try {
      setLoading(prev => !prev)
      await PhotoService.commentPhoto(id, comment)
    } catch (error) {
      console.error((error as any).message)
    } finally {
      setComment('')
      setLoading(prev => !prev)
    }
  }

  return {
    handleLike,
    handleComment
  }
}
