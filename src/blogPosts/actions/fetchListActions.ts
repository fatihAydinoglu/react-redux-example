import { IsLoadingField } from '../../common'

export const BLOG_POST_LIST_FETCH_REQUESTED = 'BLOG_POST_LIST_FETCH_REQUESTED'
export const BLOG_POST_LIST_FETCH_SUCCEEDED = 'BLOG_POST_LIST_FETCH_SUCCEEDED'
export const BLOG_POST_LIST_FETCH_FAILED = 'BLOG_POST_LIST_FETCH_FAILED'

export interface BlogPostExpandedUserItem extends IsLoadingField {
  detail: BlogPostExpandedUser | null
}
export type BlogPostExpandedUserItems = {
  [key: number]: BlogPostExpandedUserItem;
}

interface FetchBlogPostListRequestedAction {
  type: typeof BLOG_POST_LIST_FETCH_REQUESTED
}

interface FetchBlogPostListSucceededAction {
  type: typeof BLOG_POST_LIST_FETCH_SUCCEEDED
  items: BlogPostExpandedUserItems
}

interface FetchBlogPostListFailedAction {
  type: typeof BLOG_POST_LIST_FETCH_FAILED
}

export const fetchBlogPostList = (): FetchBlogPostListRequestedAction => ({
  type: BLOG_POST_LIST_FETCH_REQUESTED,
})

export const fetchBlogPostListSucceeded = (
  items: BlogPostExpandedUserItems
): FetchBlogPostListSucceededAction => ({
  type: BLOG_POST_LIST_FETCH_SUCCEEDED,
  items,
})

export const fetchBlogPostListFailed = (): FetchBlogPostListFailedAction => ({
  type: BLOG_POST_LIST_FETCH_FAILED,
})

export type FetchBlogPostListActionTypes =
  | FetchBlogPostListRequestedAction
  | FetchBlogPostListFailedAction
  | FetchBlogPostListSucceededAction

export default fetchBlogPostList
