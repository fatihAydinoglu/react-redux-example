import { createSelector } from 'reselect'

import { RootState } from '../store/rootReducer'
import { STATE_KEY } from './reducer'

export const getStateSelector = (state: RootState) => state[STATE_KEY]

export const getCurrentUser = createSelector(
  getStateSelector,
  state => state.currentUser
)
