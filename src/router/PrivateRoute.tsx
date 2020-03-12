import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Redirect, RouteProps } from 'react-router-dom'
import CircularProgress from '@material-ui/core/CircularProgress'

import { getLocalToken } from '../auth'
import { fetchCurrentUser } from '../auth/actions'
import { getCurrentUser } from '../auth/selector'
import routes from './routes'

const PrivateRoute: React.FC<RouteProps> = ({ children, ...rest }) => {
  const token = getLocalToken()
  const currentUser = useSelector(getCurrentUser)
  const dispatch = useDispatch()

  useEffect(() => {
    if (token && !currentUser) {
      dispatch(fetchCurrentUser())
    }
  }, [token, currentUser, dispatch])

  return (
    <Route
      {...rest}
      render={({ location }) =>
        token ? (
          currentUser ? (
            children
          ) : (
            <CircularProgress />
          )
        ) : (
          <Redirect
            to={{
              pathname: routes.login(),
              state: { from: location },
            }}
          />
        )
      }
    />
  )
}

export default PrivateRoute
