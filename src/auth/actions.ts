// Actions
export const CURRENT_USER_FETCH_REQUESTED = 'CURRENT_USER_FETCH_REQUESTED'
export const CURRENT_USER_FETCH_SUCCEEDED = 'CURRENT_USER_FETCH_SUCCEEDED'
export const CURRENT_USER_FETCH_FAILED = 'CURRENT_USER_FETCH_FAILED'

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

export type CurrentUserActionTypes =
  | CurrentUserRequestedAction
  | CurrentUserFailedAction
  | CurrentUserSucceededAction
