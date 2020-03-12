import React from 'react'
import { Redirect, useHistory, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Button from '@material-ui/core/Button'
import PersonAddIcon from '@material-ui/icons/PersonAdd'
import { makeStyles } from '@material-ui/core/styles'

import { logError } from '../lib/logger'
import useForm, { ValidationRules, State } from '../lib/hooks/useForm'
import { getLocalToken, setLocalToken } from './token'
import getServerToken from '../api/getServerToken'
import { showErrorNotification } from '../notification'
import { routes } from '../router'
import UserForm from './UserForm'

const useStyles = makeStyles(theme => ({
  signup: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    marginTop: theme.spacing(2),
  },
}))

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
  const classes = useStyles()

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
    <div>
      <UserForm
        buttonText="Login"
        values={values}
        errorMessages={errorMessages}
        onInputChange={handleInputChange}
        onSubmit={handleSubmit}
      />
      <div className={classes.signup}>
        <span>Don't have an account?</span>
        <Button
          variant="contained"
          color="default"
          fullWidth
          startIcon={<PersonAddIcon />}
          onClick={() => history.push(routes.signup())}
        >
          Sign up
        </Button>
      </div>
    </div>
  )
}

export default Login
