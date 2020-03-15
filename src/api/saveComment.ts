import { API_URL_BASE } from '../config'
import apiRequest, { API_METHODS } from './apiRequest'

export interface SaveCommentRequest extends CommentBase {
  id?: number | null
}

const saveComment = (params: SaveCommentRequest) => {
  const method = params.id ? API_METHODS.PUT : API_METHODS.POST
  const requestUrl = params.id ? `/comments/${params.id}` : '/comments'

  return apiRequest<SaveCommentRequest, CommentType>(method)(
    API_URL_BASE + requestUrl
  )(params)
}

export default saveComment
