import {
  CurrentUserActionTypes,
  CURRENT_USER_FETCH_REQUESTED,
  CURRENT_USER_FETCH_SUCCEEDED,
  CURRENT_USER_FETCH_FAILED,
  CURRENT_USER_RESET,
  CREATE_USER_REQUESTED
} from './actions'

export const STATE_KEY = 'auth'

export interface State {
  currentUser: User | null
}

const initialState: State = {
  currentUser: null,
}

const authReducer = (
  state: Immutable<State> = initialState,
  action: CurrentUserActionTypes
): Immutable<State> => {
  switch (action.type) {
    case CURRENT_USER_FETCH_SUCCEEDED:
      return { ...state, currentUser: { ...action.user } }
    case CREATE_USER_REQUESTED:
    case CURRENT_USER_FETCH_FAILED:
    case CURRENT_USER_FETCH_REQUESTED:
    case CURRENT_USER_RESET:
      return { ...state, currentUser: null }
    default:
      return state
  }
}

export default authReducer
