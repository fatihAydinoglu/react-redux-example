import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import useForm, { ValidationRules } from '../lib/useForm'

const required = (val: string) => (!val ? 'Required' : '')

const fieldNames = ['username', 'password']

const validationRules: ValidationRules = {
  username: required,
  password: required,
}

const initialValueState = fieldNames.reduce<{ [key: string]: string }>(
  (prev, curr) => {
    prev[curr] = ''
    return prev
  },
  {}
)

const Login: React.FC = () => {
  const onSubmit = () => null
  const [values, errorMessages, handleInputChange, handleSubmit] = useForm(
    initialValueState,
    validationRules,
    onSubmit
  )
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
