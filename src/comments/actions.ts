export const COMMENT_LIST_FETCH_REQUESTED = 'COMMENT_LIST_FETCH_REQUESTED'
export const COMMENT_LIST_FETCH_SUCCEEDED = 'COMMENT_LIST_FETCH_SUCCEEDED'
export const COMMENT_LIST_FETCH_FAILED = 'COMMENT_LIST_FETCH_FAILED'

export interface CommentListRequestedAction {
  type: typeof COMMENT_LIST_FETCH_REQUESTED
  blogPostId: number
}

interface CommentListSucceededAction {
  type: typeof COMMENT_LIST_FETCH_SUCCEEDED
  blogPostId: number
  commentList: CommentExpandedUser[]
}

interface CommentListFailedAction {
  type: typeof COMMENT_LIST_FETCH_FAILED
  blogPostId: number
}

export const fetchCommentList = (
  blogPostId: number
): CommentListRequestedAction => ({
  type: COMMENT_LIST_FETCH_REQUESTED,
  blogPostId,
})

export const fetchCommentListSucceeded = (
  commentList: CommentExpandedUser[],
  blogPostId: number
): CommentListSucceededAction => ({
  type: COMMENT_LIST_FETCH_SUCCEEDED,
  commentList,
  blogPostId,
})

export const fetchCommentListFailed = (
  blogPostId: number
): CommentListFailedAction => ({
  type: COMMENT_LIST_FETCH_FAILED,
  blogPostId,
})

export type CommentListActionTypes =
  | CommentListRequestedAction
  | CommentListFailedAction
  | CommentListSucceededAction

export default fetchCommentList
