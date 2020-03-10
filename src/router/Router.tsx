import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'

import PrivateRoute from './PrivateRoute'
import NotFound from './NotFound'

import { InitialRoute, Login, Singup } from '../auth'
import { BlogPosts } from '../blogPosts'
import routes from './routes'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
  },
})

const Router: React.FC = props => {
  const classes = useStyles()
  return (
    <Container className={classes.root}>
      <BrowserRouter>
        {props.children}
        <Switch>
          <Route exact path="/">
            <InitialRoute />
          </Route>
          <Route path={routes.login}>
            <Login />
          </Route>
          <Route path={routes.signup}>
            <Singup />
          </Route>
          <PrivateRoute path={routes.blogPosts}>
            <BlogPosts />
          </PrivateRoute>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </Container>
  )
}

export default Router
