import {
  User,
  CurrentUserActionTypes,
  CURRENT_USER_FETCH_REQUESTED,
  CURRENT_USER_FETCH_SUCCEEDED,
  CURRENT_USER_FETCH_FAILED,
  CURRENT_USER_RESET
} from './actions'

export const STATE_KEY = 'auth'

export interface State {
  currentUser: User | null
}

const initialState: State = {
  currentUser: null,
}

const authReducer = (
  state: State = initialState,
  action: CurrentUserActionTypes
): State => {
  switch (action.type) {
    case CURRENT_USER_FETCH_SUCCEEDED:
      return { ...state, currentUser: { ...action.user } }
    case CURRENT_USER_FETCH_FAILED:
    case CURRENT_USER_FETCH_REQUESTED:
    case CURRENT_USER_RESET:
      return { ...state, currentUser: null }
    default:
      return state
  }
}

export default authReducer
