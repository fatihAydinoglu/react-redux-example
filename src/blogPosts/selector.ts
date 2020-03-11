import { State, STATE_KEY } from './reducer'

export const getBlogPosts = (state: { [STATE_KEY]: State }) => state[STATE_KEY]
