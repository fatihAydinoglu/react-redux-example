import { API_URL_BASE } from '../config'
import apiRequest, { API_METHODS } from './apiRequest'

const getBlogPosts = () =>
  apiRequest<any, BlogPostExpandedUser[]>(API_METHODS.GET)(
    `${API_URL_BASE}/posts?_expand=user`
  )()

export default getBlogPosts
