export const SAVE_COMMENT_REQUESTED = 'SAVE_COMMENT_REQUESTED'
export const SAVE_COMMENT_SUCCEEDED = 'SAVE_COMMENT_SUCCEEDED'
export const SAVE_COMMENT_FAILED = 'SAVE_COMMENT_FAILED'

export interface SaveCommentRequestedAction {
  type: typeof SAVE_COMMENT_REQUESTED
  id?: number | null
  comment: Omit<CommentExpandedUser, 'id'>
}

interface SaveCommentSucceededAction {
  type: typeof SAVE_COMMENT_SUCCEEDED
  comment: CommentExpandedUser
}

interface SaveCommentFailedAction {
  type: typeof SAVE_COMMENT_FAILED
  comment: Omit<CommentExpandedUser, 'id'>
}

export const saveComment = (
  comment: Omit<CommentExpandedUser, 'id'>,
  id?: number | null
): SaveCommentRequestedAction => ({
  type: SAVE_COMMENT_REQUESTED,
  id,
  comment,
})

export const saveCommentSucceeded = (
  comment: CommentExpandedUser
): SaveCommentSucceededAction => ({
  type: SAVE_COMMENT_SUCCEEDED,
  comment,
})

export const saveCommentFailed = (
  comment: Omit<CommentExpandedUser, 'id'>
): SaveCommentFailedAction => ({
  type: SAVE_COMMENT_FAILED,
  comment,
})

export type SaveCommentActionTypes =
  | SaveCommentRequestedAction
  | SaveCommentFailedAction
  | SaveCommentSucceededAction

export default saveComment
