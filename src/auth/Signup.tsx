import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import useForm, { ValidationRules, State } from '../lib/hooks/useForm'
import { routes } from '../router'
import { createUser } from './actions'
import UserForm from './UserForm'

const required = (val: string) => (!val ? 'Required' : '')

const validationRules: ValidationRules = {
  username: required,
  name: required,
  password: required,
}

interface ValueState extends State {
  username: string
  name: string
  password: string
}

const initialValueState: ValueState = {
  username: '',
  name: '',
  password: '',
}

const Signup: React.FC = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const onSubmit = (submittedValues: ValueState) => {
    const { name, username } = submittedValues
    dispatch(createUser({ name, username }))
    history.replace(routes.login)
  }
  const [values, errorMessages, handleInputChange, handleSubmit] = useForm<
    ValueState
  >(initialValueState, validationRules, onSubmit)

  return (
    <UserForm
      buttonText="Signup"
      values={values}
      errorMessages={errorMessages}
      onInputChange={handleInputChange}
      onSubmit={handleSubmit}
      showNameField
    />
  )
}

export default Signup
