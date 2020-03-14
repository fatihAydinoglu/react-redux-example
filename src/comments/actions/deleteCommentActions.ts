export const DELETE_COMMENT_REQUESTED = 'DELETE_COMMENT_REQUESTED'
export const DELETE_COMMENT_SUCCEEDED = 'DELETE_COMMENT_SUCCEEDED'
export const DELETE_COMMENT_FAILED = 'DELETE_COMMENT_FAILED'

export interface DeleteCommentRequestedAction {
  type: typeof DELETE_COMMENT_REQUESTED
  postId: number
  id: number
}

interface DeleteCommentSucceededAction {
  type: typeof DELETE_COMMENT_SUCCEEDED
  postId: number
  id: number
}

interface DeleteCommentFailedAction {
  type: typeof DELETE_COMMENT_FAILED
  postId: number
  id: number
}

export const deleteComment = (
  id: number,
  postId: number
): DeleteCommentRequestedAction => ({
  type: DELETE_COMMENT_REQUESTED,
  id,
  postId,
})

export const deleteCommentSucceeded = (
  id: number,
  postId: number
): DeleteCommentSucceededAction => ({
  type: DELETE_COMMENT_SUCCEEDED,
  id,
  postId,
})

export const deleteCommentFailed = (
  id: number,
  postId: number
): DeleteCommentFailedAction => ({
  type: DELETE_COMMENT_FAILED,
  id,
  postId,
})

export type DeleteCommentActionTypes =
  | DeleteCommentRequestedAction
  | DeleteCommentFailedAction
  | DeleteCommentSucceededAction

export default deleteComment
