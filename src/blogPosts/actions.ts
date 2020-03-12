import { IsLoadingField } from '../common'

export interface BlogPostExpandedUserItem extends IsLoadingField {
  detail: BlogPostExpandedUser | null
}
export type BlogPostExpandedUserItems = {
  [key: number]: BlogPostExpandedUserItem;
}

// Actions
// List
export const BLOG_POST_LIST_FETCH_REQUESTED = 'BLOG_POST_LIST_FETCH_REQUESTED'
export const BLOG_POST_LIST_FETCH_SUCCEEDED = 'BLOG_POST_LIST_FETCH_SUCCEEDED'
export const BLOG_POST_LIST_FETCH_FAILED = 'BLOG_POST_LIST_FETCH_FAILED'

// Single
export const BLOG_POST_FETCH_REQUESTED = 'BLOG_POST_FETCH_REQUESTED'
export const BLOG_POST_FETCH_SUCCEEDED = 'BLOG_POST_FETCH_SUCCEEDED'
export const BLOG_POST_FETCH_FAILED = 'BLOG_POST_FETCH_FAILED'

// Action Creators
// List
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

// Single
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

export type BlogPostsActionTypes =
  | FetchBlogPostListRequestedAction
  | FetchBlogPostListFailedAction
  | FetchBlogPostListSucceededAction
  | FetchBlogPostRequestedAction
  | FetchBlogPostFailedAction
  | FetchBlogPostSucceededAction
