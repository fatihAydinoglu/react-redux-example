import { FetchBlogPostListActionTypes } from './fetchListActions'
import { FetchBlogPostActionTypes } from './fetchItemActions'

export { default as fetchBlogPost } from './fetchItemActions'
export { default as fetchBlogPostList } from './fetchListActions'

export type BlogPostsActionTypes =
  | FetchBlogPostListActionTypes // fetch list
  | FetchBlogPostActionTypes // fetch single
