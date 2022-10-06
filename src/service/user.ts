import { UserLogin, UserRequest } from '../types/user'
// import { tokenUtil } from '../utils/token'
import { apiService } from './api'

// const token = tokenUtil.get()

export namespace UserService {
  export async function register (user: UserRequest) {
    const response = await apiService.request({
      url: '/users/register',
      method: 'post',
      body: {
        userName: user.userName || null,
        email: user.email || null,
        password: user.password || null,
        confirmPassword: user.confirmPassword || null
      },
      headers: {
        'Content-Type': 'application/json'
      }
    })

    switch (response.statusCode) {
      case 201: return response.body
      case 422: throw new Error(response.body.errors[0])
      default: throw new Error('Erro inesperado no servidor')
    }
  }
  export async function login (user: UserLogin) {
    const response = await apiService.request({
      url: '/users/login',
      method: 'post',
      body: {
        email: user.email || null,
        password: user.password || null
      },
      headers: {
        'Content-Type': 'application/json'
      }
    })

    switch (response.statusCode) {
      case 201: return response.body
      case 422: throw new Error(response.body.errors[0])
      default: throw new Error('Erro inesperado no servidor')
    }
  }
}
