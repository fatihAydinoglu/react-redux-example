import { createSelector } from 'reselect'

import { RootState } from '../store/rootReducer'

import { STATE_KEY } from './reducer'

const getState = (state: RootState) => state[STATE_KEY]

export const getNotification = createSelector(
  getState,
  ({ message, error }) => ({ message, error })
)
