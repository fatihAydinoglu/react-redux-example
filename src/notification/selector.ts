import { State, STATE_KEY } from './reducer'

export const getNotification = (state: { [STATE_KEY]: State }) =>
  state[STATE_KEY]
