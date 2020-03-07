import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import PrivateRoute from './PrivateRoute'
import NotFound from './NotFound'

import { Login, Singup } from '../auth'
import { BlogPosts } from '../blogPosts'

const Router: React.FC = props => (
  <BrowserRouter>
    {props.children}
    <Switch>
      <PrivateRoute exact path="/">
        <BlogPosts />
      </PrivateRoute>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/singup">
        <Singup />
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  </BrowserRouter>
)

export default Router
