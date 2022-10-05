import axios, { AxiosInstance, AxiosResponse } from 'axios'
import env from '../utils/env'

const BASE_URL = env.baseUrl

type HttpRequest = {
  url: string,
  method?: 'get' | 'post' | 'put' | 'delete',
  body?: any
  headers?: any
}

type HttpResponse<T = any> = {
  statusCode: number,
  body: T
}

class ApiService {
  private api: AxiosInstance

  constructor () {
    this.api = axios.create({
      baseURL: BASE_URL
    })
  }

  async request<T =any> (props: HttpRequest): Promise<HttpResponse> {
    let axiosResponse: AxiosResponse<T>

    try {
      axiosResponse = await this.api.request<T>({
        url: props.url,
        method: props.method || 'get',
        headers: props.headers || {},
        data: props.body || {}
      })
    } catch (error) {
      axiosResponse = (error as any)?.response
    }

    return {
      statusCode: axiosResponse.status,
      body: axiosResponse.data
    }
  }
}

export const apiService = new ApiService()
