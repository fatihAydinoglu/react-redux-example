import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'

import Menu from '../components/Menu'
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
    <BrowserRouter>
      <Menu />
      <Container className={classes.root}>
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
      </Container>
    </BrowserRouter>
  )
}

export default Router
