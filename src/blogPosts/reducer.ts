import {
  BlogPostsActionTypes,
  BLOG_POSTS_FETCH_REQUESTED,
  BLOG_POSTS_FETCH_SUCCEEDED,
  BLOG_POSTS_FETCH_FAILED
} from './actions'

export const STATE_KEY = 'blogPosts'

export interface State {
  isLoading: boolean
  list: BlogPostExpandedUser[]
}

const initialState: State = {
  isLoading: false,
  list: [],
}

const blogPostsReducer = (
  state: Immutable<State> = initialState,
  action: BlogPostsActionTypes
) => {
  switch (action.type) {
    case BLOG_POSTS_FETCH_REQUESTED:
      return { ...state, isLoading: true, list: [] }
    case BLOG_POSTS_FETCH_SUCCEEDED:
      return { ...state, isLoading: false, list: [...action.list] }
    case BLOG_POSTS_FETCH_FAILED:
      return { ...state, isLoading: false, list: [] }
    default:
      return state
  }
}

export default blogPostsReducer
