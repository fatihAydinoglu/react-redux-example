import { API_URL_BASE } from '../config'
import apiRequest, { API_METHODS } from './apiRequest'

export interface GetServerTokenResponse {
  id: number
  username: string
  name: string
}

const getCurrentUser = () =>
  apiRequest<any, GetServerTokenResponse>(API_METHODS.GET)(
    `${API_URL_BASE}/auth/me`
  )()

export default getCurrentUser
