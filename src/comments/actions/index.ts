import { CommentListActionTypes } from './commentListActions'
import { SaveCommentActionTypes } from './saveCommentActions'
import { DeleteCommentActionTypes } from './deleteCommentActions'

export { default as fetchCommentList } from './commentListActions'
export { default as saveComment } from './saveCommentActions'
export { default as deleteComment } from './deleteCommentActions'

export type CommentsActionTypes =
  | CommentListActionTypes // fetch list
  | SaveCommentActionTypes // save comment
  | DeleteCommentActionTypes // delete comment
