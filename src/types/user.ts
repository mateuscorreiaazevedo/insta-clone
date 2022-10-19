export type UserRequest = {
  userName: string,
  email: string,
  password: string,
  confirmPassword: string
}

export type UserLogin = {
  email: string
  password: string
}

export type UserResponse = {
  _id: string
  userName: string
  email: string,
  bio?: string,
  link?: string,
  userAvatar?: string,
}

export type UserRequisition = {
  userName?: string
  bio?: string
  link?: string
  password?: string
}
