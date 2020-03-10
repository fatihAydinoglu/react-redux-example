import { getLocalToken } from '../auth'

export enum API_METHODS {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
  PATCH = 'PATCH',
}

const apiRequest = <P, R>(method: API_METHODS) => (url: string) => (
  params?: P
) => {
  const token = getLocalToken()
  return fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    ...(params ? { body: JSON.stringify(params) } : {}),
  })
    .then(response => {
      if (response.status >= 400) {
        throw new Error(`Request failed. Status Code: ${response.status}`)
      }
      return response
    })
    .then(response => response.json())
    .then(jsonResponse => jsonResponse as R)
}

export default apiRequest
