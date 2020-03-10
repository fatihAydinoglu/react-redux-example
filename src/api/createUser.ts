import { API_URL_BASE } from '../config'
import apiRequest, { API_METHODS } from './apiRequest'

export interface CreateUserRequest {
  name: string
  username: string
}

export interface CreateUserResponse {
  id: number
  name: string
  username: string
}

const createUser = (params: CreateUserRequest) =>
  apiRequest<CreateUserRequest, CreateUserResponse>(API_METHODS.POST)(
    `${API_URL_BASE}/users`
  )(params)

export default createUser
