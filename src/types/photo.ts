export type PhotoResponse = {
  _id: string
  image: string
  subtitle?: string
  likes?: string[]
  comments?: object[]
  userName: string
  userId: string
}

export type CommentResponse = {
  comment: string,
  name: string
  avatar: string
  userId: string
}
