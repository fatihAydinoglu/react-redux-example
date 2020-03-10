import { combineReducers } from 'redux'
import blogPostsReducer, {
  STATE_KEY as BLOG_POSTS
} from '../blogPosts/reducer'
import authReducer, { STATE_KEY as AUTH } from '../auth/reducer'

const rootReducer = combineReducers({
  [BLOG_POSTS]: blogPostsReducer,
  [AUTH]: authReducer,
})

export default rootReducer
