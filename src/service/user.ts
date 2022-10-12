import { UserLogin, UserRequest } from '../types/user'
import { tokenUtil } from '../utils/token'
import { apiService } from './api'

const token = tokenUtil.get()

export namespace UserService {

  // Register service

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

  // Login service

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

  // Get current user loged

  export async function getCurrentUser () {
    const response = await apiService.request({
      url: '/users/user',
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    })
    switch (response.statusCode) {
      case 200: return response.body
      case 401: throw new Error(response.body.errors[0])

      default: throw new Error('Erro inesperado no servidor')
    }
  }

  // Search users

  export async function searchUsers (q: string) {
    const response = await apiService.request({
      url: `/users/search?q=${q}`,
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    })
    switch (response.statusCode) {
      case 200: return response.body
      default: throw new Error('Erro inesperado')
    }
  }

  // Get user by userName

  export async function getByUserName (userName: string) {
    const response = await apiService.request({
      url: `/users/${userName}`,
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    })

    switch (response.statusCode) {
      case 200: return response.body
      case 404: throw new Error(response.body.errors[0])
      default: throw new Error('Erro inesperado na aplicação')
    }
  }
}
