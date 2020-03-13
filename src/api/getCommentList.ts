import { API_URL_BASE } from '../config'
import apiRequest, { API_METHODS } from './apiRequest'

const getCommentList = (blogPostId: number | string) =>
  apiRequest<any, CommentExpandedUser[]>(API_METHODS.GET)(
    `${API_URL_BASE}/posts/${blogPostId}/comments?_expand=user`
  )()

export default getCommentList
