import { combineReducers } from 'redux'

import blogPostsReducer, {
  STATE_KEY as BLOG_POSTS,
  State as BlogPostsState
} from '../blogPosts/reducer'

import authReducer, {
  STATE_KEY as AUTH,
  State as AuthState
} from '../auth/reducer'

import notificationReducer, {
  STATE_KEY as NOTIFICATION,
  State as NotificationState
} from '../notification/reducer'

import commentsReducer, {
  STATE_KEY as COMMENTS,
  State as CommentsState
} from '../comments/reducer'

export interface RootState {
  [BLOG_POSTS]: BlogPostsState
  [AUTH]: AuthState
  [NOTIFICATION]: NotificationState
  [COMMENTS]: CommentsState
}

const rootReducer = combineReducers({
  [BLOG_POSTS]: blogPostsReducer,
  [AUTH]: authReducer,
  [NOTIFICATION]: notificationReducer,
  [COMMENTS]: commentsReducer,
})

export default rootReducer
