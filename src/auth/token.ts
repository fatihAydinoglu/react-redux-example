import { LOCAL_STORAGE_TOKEN_KEY } from '../config'

const getLocalToken = () => localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY)

const setLocalToken = (token: string) =>
  localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, token)

const removeLocalToken = () => localStorage.removeItem(LOCAL_STORAGE_TOKEN_KEY)

export { getLocalToken, setLocalToken, removeLocalToken }
