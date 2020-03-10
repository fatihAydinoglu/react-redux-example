import { API_URL_BASE } from '../config'
import apiRequest, { API_METHODS } from './apiRequest'

interface GetServerTokenRequest {
  username: string
  password: string
}

interface GetServerTokenResponse {
  token: string
}

const getServerToken = (params: GetServerTokenRequest) =>
  apiRequest<GetServerTokenRequest, GetServerTokenResponse>(API_METHODS.POST)(
    `${API_URL_BASE}/auth/token`
  )(params)

export default getServerToken
