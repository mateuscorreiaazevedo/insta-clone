import { tokenUtil } from '../utils/token'
import { apiService } from './api'

const token = tokenUtil.get()

export namespace PhotoService {

  // Insert a Photo

  export async function insert (data: FormData) {
    const response = await apiService.request({
      url: '/photos',
      method: 'post',
      body: data,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${token}`
      }
    })

    switch (response.statusCode) {
      case 201: return response.body
      case 422: throw new Error(response.body.errors[0])
      default: throw new Error('Erro no servidor')
    }
  }

  // get photo by user

  export async function getByUser (userId: string) {
    const response = await apiService.request({
      url: `/photos/user/${userId}`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    })

    switch (response.statusCode) {
      case 200: return response.body
      case 404: throw new Error(response.body.errors[0])
      default: throw new Error('Erro interno, tente novamente mais tarde')
    }
  }

  // get by id

  export async function getById (id: string) {
    const response = await apiService.request({
      url: `/photos/${id}`,
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    })

    switch (response.statusCode) {
      case 202: return response.body
      case 404: throw new Error(response.body.errors[0])
      default: throw new Error('Erro interno, tente novamente mais tarde')
    }
  }

  // update Photo

  export async function updatePhoto (id: string, subtitle?: string) {
    const response = await apiService.request({
      url: `/photos/${id}`,
      method: 'put',
      body: {
        subtitle
      },
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    })

    switch (response.statusCode) {
      case 200: return response.body
      case 404: throw new Error(response.body.errors[0])
      default: throw new Error('Erro interno, tente novamente mais tarde')
    }
  }

  // delete Photo

  export async function deletePhoto (id: string) {
    const response = await apiService.request({
      url: `/photos/${id}`,
      method: 'delete',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    })

    switch (response.statusCode) {
      case 200: return response.body
      case 404: throw new Error(response.body.errors[0])
      default: throw new Error('Erro interno, tente novamente mais tarde')
    }
  }
}
