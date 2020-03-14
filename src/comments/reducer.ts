import { LoadingStatus } from '../common'
import {
  COMMENT_LIST_FETCH_REQUESTED,
  COMMENT_LIST_FETCH_SUCCEEDED,
  COMMENT_LIST_FETCH_FAILED
} from './actions/commentListActions'

import {
  SAVE_COMMENT_REQUESTED,
  SAVE_COMMENT_SUCCEEDED,
  SAVE_COMMENT_FAILED
} from './actions/saveCommentActions'

import {
  DELETE_COMMENT_REQUESTED,
  DELETE_COMMENT_SUCCEEDED,
  DELETE_COMMENT_FAILED
} from './actions/deleteCommentActions'

import { CommentsActionTypes } from './actions'

export const STATE_KEY = 'comments'

export interface State {
  [key: string]: {
    isLoading: LoadingStatus;
    commentList: CommentExpandedUser[];
  }
}

const initialState: State = {}

const commentsReducer = (
  state: Immutable<State> = initialState,
  action: CommentsActionTypes
): Immutable<State> => {
  switch (action.type) {
    case COMMENT_LIST_FETCH_REQUESTED:
      return {
        ...state,
        [action.blogPostId]: {
          isLoading: LoadingStatus.LOADING,
          commentList: [],
        },
      }
    case COMMENT_LIST_FETCH_SUCCEEDED:
      return {
        ...state,
        [action.blogPostId]: {
          isLoading: LoadingStatus.LOADED,
          commentList: [...action.commentList],
        },
      }
    case COMMENT_LIST_FETCH_FAILED:
      return {
        ...state,
        [action.blogPostId]: {
          isLoading: LoadingStatus.HAS_ERROR,
          commentList: [],
        },
      }

    case SAVE_COMMENT_REQUESTED:
      return {
        ...state,
        [action.comment.postId]: {
          ...state[action.comment.postId],
          isLoading: LoadingStatus.LOADING,
        },
      }
    case SAVE_COMMENT_SUCCEEDED:
      return {
        ...state,
        [action.comment.postId]: {
          isLoading: LoadingStatus.LOADED,
          commentList: [
            action.comment,
            ...state[action.comment.postId].commentList,
          ],
        },
      }
    case SAVE_COMMENT_FAILED:
      return {
        ...state,
        [action.comment.postId]: {
          ...state[action.comment.postId],
          isLoading: LoadingStatus.HAS_ERROR,
        },
      }

    case DELETE_COMMENT_REQUESTED:
      return {
        ...state,
        [action.postId]: {
          ...state[action.postId],
          isLoading: LoadingStatus.LOADING,
        },
      }

    case DELETE_COMMENT_SUCCEEDED:
      return {
        ...state,
        [action.postId]: {
          ...state[action.postId],
          isLoading: LoadingStatus.LOADED,
          commentList: state[action.postId].commentList.filter(
            comment => comment.id !== action.id
          ),
        },
      }

    case DELETE_COMMENT_FAILED:
      return {
        ...state,
        [action.postId]: {
          ...state[action.postId],
          isLoading: LoadingStatus.HAS_ERROR,
        },
      }

    default:
      return state
  }
}

export default commentsReducer
