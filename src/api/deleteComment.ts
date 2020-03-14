import { API_URL_BASE } from '../config'
import apiRequest, { API_METHODS } from './apiRequest'

const deleteComment = (id: number) => {
  return apiRequest<any, any>(API_METHODS.DELETE)(
    `${API_URL_BASE}/comments/${id}`
  )()
}

export default deleteComment
