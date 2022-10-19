import React from 'react'
import { PhotoService } from '../service/photo'

type Props = {
  initialLike: string[] | undefined
}

export const useLikeAndComment = ({ initialLike }: Props) => {
  const [likes, setLikes] = React.useState<string[] | undefined>(initialLike)

  const handleLike = async (id: string) => {
    try {
      const { like } = await PhotoService.likedPhoto(id)
      setLikes(like)
    } catch (error) {
      console.error((error as any).message)
    }
  }

  return {
    likes,
    handleLike
  }
}
