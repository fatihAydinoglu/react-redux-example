import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import CircularProgress from '@material-ui/core/CircularProgress'

import { getLocalToken } from './token'
import routes from '../router/routes'

const DEFAULT_ROUTE = routes.blogPosts()

const InitialRoute = () => {
  const history = useHistory()
  const token = getLocalToken()

  useEffect(() => {
    if (token) {
      history.replace(DEFAULT_ROUTE)
    } else {
      history.replace(routes.login())
    }
  }, [history, token])

  return <CircularProgress />
}

export default InitialRoute
