import React from 'react'
import { Redirect, useHistory, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import { logError } from '../lib/logger'
import useForm, { ValidationRules, State } from '../lib/hooks/useForm'
import { getLocalToken, setLocalToken } from './token'
import { getServerToken } from '../api'
import { showErrorNotification } from '../notification'

const required = (val: string) => (!val ? 'Required' : '')

const validationRules: ValidationRules = {
  username: required,
  password: required,
}

interface ValueState extends State {
  username: string
  password: string
}

const initialValueState: ValueState = {
  username: '',
  password: '',
}

const Login: React.FC = () => {
  const location = useLocation<{ from: string }>()
  const history = useHistory()
  const dispatch = useDispatch()

  const currentToken = getLocalToken()

  const onSubmit = (submittedValues: ValueState) => {
    getServerToken(submittedValues)
      .then(({ token }) => {
        if (token) {
          setLocalToken(token)
          const { from } = location.state || { from: { pathname: '/' } }
          history.replace(from)
        }
      })
      .catch(err => {
        logError(err)
        dispatch(showErrorNotification('Unable to login!'))
      })
  }
  const [values, errorMessages, handleInputChange, handleSubmit] = useForm<
    ValueState
  >(initialValueState, validationRules, onSubmit)

  if (currentToken) {
    return <Redirect to={{ pathname: '/' }} />
  }

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <TextField
        id="username"
        label="User name"
        fullWidth
        margin="dense"
        value={values.username}
        error={!!errorMessages.username}
        helperText={errorMessages.username}
        onChange={handleInputChange}
      />
      <TextField
        id="password"
        label="Password"
        type="password"
        autoComplete="current-password"
        fullWidth
        margin="dense"
        value={values.password}
        error={!!errorMessages.password}
        helperText={errorMessages.password}
        onChange={handleInputChange}
      />
      <Button variant="contained" color="primary" fullWidth type="submit">
        Login
      </Button>
    </form>
  )
}

export default Login
