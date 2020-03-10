import React from 'react'
import { Provider } from 'react-redux'
import CssBaseline from '@material-ui/core/CssBaseline'
import 'whatwg-fetch'

import store from './store'
import Router from './router'
import Header from './components/Header'
import Footer from './components/Footer'
import { Notification } from './notification'

const App = () => (
  <Provider store={store}>
    <CssBaseline />
    <Notification />
    <Header />
    <Router />
    <Footer />
  </Provider>
)

export default App
