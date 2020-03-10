import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import { ValidationResult, State } from '../lib/hooks/useForm'

interface Props {
  values: State
  errorMessages: ValidationResult
  buttonText: string
  onInputChange: (event: any) => void
  onSubmit: (event: React.SyntheticEvent) => void
  showNameField?: boolean
}

const UserForm: React.FC<Props> = props => {
  const {
    values,
    onSubmit,
    errorMessages,
    buttonText,
    onInputChange,
    showNameField,
  } = props
  return (
    <form autoComplete="off" onSubmit={onSubmit}>
      <TextField
        id="username"
        label="User name"
        fullWidth
        margin="dense"
        value={values.username}
        error={!!errorMessages.username}
        helperText={errorMessages.username}
        onChange={onInputChange}
      />
      {showNameField && (
        <TextField
          id="name"
          label="Name"
          fullWidth
          margin="dense"
          value={values.name}
          error={!!errorMessages.name}
          helperText={errorMessages.name}
          onChange={onInputChange}
        />
      )}
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
        onChange={onInputChange}
      />
      <Button variant="contained" color="primary" fullWidth type="submit">
        {buttonText}
      </Button>
    </form>
  )
}

export default UserForm
