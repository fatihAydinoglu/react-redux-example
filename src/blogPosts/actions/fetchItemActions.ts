export const BLOG_POST_FETCH_REQUESTED = 'BLOG_POST_FETCH_REQUESTED'
export const BLOG_POST_FETCH_SUCCEEDED = 'BLOG_POST_FETCH_SUCCEEDED'
export const BLOG_POST_FETCH_FAILED = 'BLOG_POST_FETCH_FAILED'

export interface FetchBlogPostRequestedAction {
  type: typeof BLOG_POST_FETCH_REQUESTED
  id: number
}

interface FetchBlogPostSucceededAction {
  type: typeof BLOG_POST_FETCH_SUCCEEDED
  item: BlogPostExpandedUser
}

interface FetchBlogPostFailedAction {
  type: typeof BLOG_POST_FETCH_FAILED
  id: number
}

export const fetchBlogPost = (id: number): FetchBlogPostRequestedAction => ({
  type: BLOG_POST_FETCH_REQUESTED,
  id,
})

export const fetchBlogPostSucceeded = (
  item: BlogPostExpandedUser
): FetchBlogPostSucceededAction => ({
  type: BLOG_POST_FETCH_SUCCEEDED,
  item,
})

export const fetchBlogPostFailed = (id: number): FetchBlogPostFailedAction => ({
  type: BLOG_POST_FETCH_FAILED,
  id,
})

export type FetchBlogPostActionTypes =
  | FetchBlogPostRequestedAction
  | FetchBlogPostFailedAction
  | FetchBlogPostSucceededAction

export default fetchBlogPost
