import { API_URL_BASE } from '../config'
import apiRequest, { API_METHODS } from './apiRequest'

const getBlogPost = (id: number | string) =>
  apiRequest<any, BlogPostExpandedUser[]>(API_METHODS.GET)(
    `${API_URL_BASE}/posts/${id.toString()}/?_expand=user`
  )()

export default getBlogPost
