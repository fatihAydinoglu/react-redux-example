// Actions
export const CURRENT_USER_FETCH_REQUESTED = 'CURRENT_USER_FETCH_REQUESTED'
export const CURRENT_USER_FETCH_SUCCEEDED = 'CURRENT_USER_FETCH_SUCCEEDED'
export const CURRENT_USER_FETCH_FAILED = 'CURRENT_USER_FETCH_FAILED'

export const CREATE_USER_REQUESTED = 'CREATE_USER_REQUESTED'
export const CREATE_USER_SUCCEEDED = 'CREATE_USER_SUCCEEDED'
export const CREATE_USER_FAILED = 'CREATE_USER_FAILED'

export const CURRENT_USER_RESET = 'CURRENT_USER_RESET'

// Action Creators

// Fetch Current User
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

// Create User
export interface CreateUserAction {
  type: typeof CREATE_USER_REQUESTED
  user: UserBase
}

interface CreateUserSucceededAction {
  type: typeof CREATE_USER_SUCCEEDED
  user: User
}

interface CreateUserFailedAction {
  type: typeof CREATE_USER_FAILED
}

export const createUser = (user: UserBase): CreateUserAction => ({
  type: CREATE_USER_REQUESTED,
  user,
})

export const createUserSucceeded = (user: User): CreateUserSucceededAction => ({
  type: CREATE_USER_SUCCEEDED,
  user,
})

export const createUserFailed = (): CreateUserFailedAction => ({
  type: CREATE_USER_FAILED,
})

// Reset logged in user
interface CurrentUserReset {
  type: typeof CURRENT_USER_RESET
}

export const resetCurrentUser = (): CurrentUserReset => ({
  type: CURRENT_USER_RESET,
})

export type CurrentUserActionTypes =
  | CurrentUserRequestedAction
  | CurrentUserFailedAction
  | CurrentUserSucceededAction
  | CurrentUserReset
  | CreateUserAction
