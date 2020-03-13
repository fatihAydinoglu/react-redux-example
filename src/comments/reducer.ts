import { LoadingStatus } from '../common'
import {
  COMMENT_LIST_FETCH_REQUESTED,
  COMMENT_LIST_FETCH_SUCCEEDED,
  COMMENT_LIST_FETCH_FAILED,
  CommentListActionTypes
} from './actions'

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
  action: CommentListActionTypes
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
    default:
      return state
  }
}

export default commentsReducer
