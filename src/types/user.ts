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
  userName: string
  email: string,
  bio?: string,
  link?: string,
  userAvatar?: string,
}