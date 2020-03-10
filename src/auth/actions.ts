// Actions
export const CURRENT_USER_FETCH_REQUESTED = 'CURRENT_USER_FETCH_REQUESTED'
export const CURRENT_USER_FETCH_SUCCEEDED = 'CURRENT_USER_FETCH_SUCCEEDED'
export const CURRENT_USER_FETCH_FAILED = 'CURRENT_USER_FETCH_FAILED'
export const CURRENT_USER_RESET = 'CURRENT_USER_RESET'

// Action Creators
export interface User {
  id: number
  username: string
  name: string
}

interface CurrentUserRequestedAction {
  type: typeof CURRENT_USER_FETCH_REQUESTED
}

interface CurrentUserSucceededAction {
  type: typeof CURRENT_USER_FETCH_SUCCEEDED
  user: User
}

interface CurrentUserFailedAction {
  type: typeof CURRENT_USER_FETCH_FAILED
}

interface CurrentUserReset {
  type: typeof CURRENT_USER_RESET
}

export const fetchCurrentUser = (): CurrentUserRequestedAction => ({
  type: CURRENT_USER_FETCH_REQUESTED,
})

export const fetchCurrentUserSucceeded = (
  user: User
): CurrentUserSucceededAction => ({
  type: CURRENT_USER_FETCH_SUCCEEDED,
  user,
})

export const fetchCurrentUserFailed = (): CurrentUserFailedAction => ({
  type: CURRENT_USER_FETCH_FAILED,
})

export const resetCurrentUser = (): CurrentUserReset => ({
  type: CURRENT_USER_RESET,
})

export type CurrentUserActionTypes =
  | CurrentUserRequestedAction
  | CurrentUserFailedAction
  | CurrentUserSucceededAction
  | CurrentUserReset
