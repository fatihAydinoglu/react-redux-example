import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'

import PrivateRoute from './PrivateRoute'
import NotFound from './NotFound'
import Header from '../components/Header'
import Footer from '../components/Footer'

import { InitialRoute, Login, Signup } from '../auth'
import { BlogPostList, BlogPost } from '../blogPosts'
import { routePaths } from './routes'

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
      <Header />
      <Container className={classes.root}>
        <Switch>
          <Route exact path="/">
            <InitialRoute />
          </Route>
          <Route path={routePaths.login}>
            <Login />
          </Route>
          <Route path={routePaths.signup}>
            <Signup />
          </Route>
          <PrivateRoute path={routePaths.blogPosts}>
            <BlogPostList />
          </PrivateRoute>
          <PrivateRoute path={routePaths.post}>
            <BlogPost />
          </PrivateRoute>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Container>
      <Footer />
    </BrowserRouter>
  )
}

export default Router
