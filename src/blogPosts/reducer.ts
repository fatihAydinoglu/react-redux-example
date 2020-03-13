import { BlogPostsActionTypes } from './actions'

import {
  BLOG_POST_LIST_FETCH_REQUESTED,
  BLOG_POST_LIST_FETCH_SUCCEEDED,
  BLOG_POST_LIST_FETCH_FAILED,
  BlogPostExpandedUserItems
} from './actions/fetchListActions'

import {
  BLOG_POST_FETCH_REQUESTED,
  BLOG_POST_FETCH_SUCCEEDED,
  BLOG_POST_FETCH_FAILED
} from './actions/fetchItemActions'

import { LoadingStatus } from '../common'

export const STATE_KEY = 'blogPosts'

export interface State {
  isListLoading: LoadingStatus
  items: BlogPostExpandedUserItems
}

const initialState: State = {
  isListLoading: LoadingStatus.NOT_INITIALIZED,
  items: {},
}

const blogPostsReducer = (
  state: Immutable<State> = initialState,
  action: BlogPostsActionTypes
): Immutable<State> => {
  switch (action.type) {
    // List
    case BLOG_POST_LIST_FETCH_REQUESTED:
      return { ...state, isListLoading: LoadingStatus.LOADING, items: {} }
    case BLOG_POST_LIST_FETCH_SUCCEEDED:
      return {
        ...state,
        isListLoading: LoadingStatus.LOADED,
        items: { ...action.items },
      }
    case BLOG_POST_LIST_FETCH_FAILED:
      return { ...state, isListLoading: LoadingStatus.HAS_ERROR, items: {} }

    // Single
    case BLOG_POST_FETCH_REQUESTED:
      return {
        ...state,
        items: {
          ...state.items,
          [action.id]: { isLoading: LoadingStatus.LOADING, detail: null },
        },
      }
    case BLOG_POST_FETCH_SUCCEEDED:
      return {
        ...state,
        items: {
          ...state.items,
          [action.item.id]: {
            isLoading: LoadingStatus.LOADED,
            detail: { ...action.item },
          },
        },
      }
    case BLOG_POST_FETCH_FAILED:
      return {
        ...state,
        items: {
          ...state.items,
          [action.id]: { isLoading: LoadingStatus.HAS_ERROR, detail: null },
        },
      }
    default:
      return state
  }
}

export default blogPostsReducer
