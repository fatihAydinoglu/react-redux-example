import React from 'react'
import { Route, Redirect, RouteProps } from 'react-router-dom'

import { getLocalToken } from '../auth'
import routes from './routes'

const PrivateRoute: React.FC<RouteProps> = ({ children, ...rest }) => {
  const token = getLocalToken()
  return (
    <Route
      {...rest}
      render={({ location }) =>
        token ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: routes.login,
              state: { from: location },
            }}
          />
        )
      }
    />
  )
}

export default PrivateRoute
