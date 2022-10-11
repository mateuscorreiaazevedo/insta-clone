import { tokenUtil } from '../utils/token'
import { apiService } from './api'

const token = tokenUtil.get()

export namespace PhotoService {
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
}
