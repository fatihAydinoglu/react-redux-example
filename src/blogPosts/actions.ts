// Actions
export const BLOG_POSTS_FETCH_REQUESTED = 'BLOG_POSTS_FETCH_REQUESTED'
export const BLOG_POSTS_FETCH_SUCCEEDED = 'BLOG_POSTS_FETCH_SUCCEEDED'
export const BLOG_POSTS_FETCH_FAILED = 'BLOG_POSTS_FETCH_FAILED'

// Action Creators
interface BlogPostsRequestedAction {
  type: typeof BLOG_POSTS_FETCH_REQUESTED
}

interface BlogPostsSucceededAction {
  type: typeof BLOG_POSTS_FETCH_SUCCEEDED
  list: BlogPostExpandedUser[]
}

interface BlogPostsFailedAction {
  type: typeof BLOG_POSTS_FETCH_FAILED
}

export const fetchBlogPosts = (): BlogPostsRequestedAction => ({
  type: BLOG_POSTS_FETCH_REQUESTED,
})

export const fetchBlogPostsSucceeded = (
  list: BlogPostExpandedUser[]
): BlogPostsSucceededAction => ({
  type: BLOG_POSTS_FETCH_SUCCEEDED,
  list,
})

export const fetchBlogPostsFailed = (): BlogPostsFailedAction => ({
  type: BLOG_POSTS_FETCH_FAILED,
})

export type BlogPostsActionTypes =
  | BlogPostsRequestedAction
  | BlogPostsFailedAction
  | BlogPostsSucceededAction
