import { State, STATE_KEY } from './reducer'

export const getCurrentUser = (state: { [STATE_KEY]: State }) =>
  state[STATE_KEY].currentUser
