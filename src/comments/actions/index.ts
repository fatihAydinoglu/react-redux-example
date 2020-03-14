import { CommentListActionTypes } from './commentListActions'
import { SaveCommentActionTypes } from './createCommentActions'

export { default as fetchCommentList } from './commentListActions'
export { default as saveComment } from './createCommentActions'

export type CommentsActionTypes =
  | CommentListActionTypes // fetch list
  | SaveCommentActionTypes // save comment
