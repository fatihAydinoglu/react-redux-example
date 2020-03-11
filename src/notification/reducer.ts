import {
  SHOW_NOTIFICATION,
  HIDE_NOTIFICATION,
  NotificationActions
} from './actions'

export const STATE_KEY = 'notification'

export interface State {
  message: string
  error?: boolean
}

const initialState = {
  message: '',
}

const notificationReducer = (
  state: Immutable<State> = initialState,
  action: NotificationActions
) => {
  switch (action.type) {
    case SHOW_NOTIFICATION:
      return { message: action.message, error: action.error }
    case HIDE_NOTIFICATION:
      return { ...initialState }
    default:
      return state
  }
}

export default notificationReducer
