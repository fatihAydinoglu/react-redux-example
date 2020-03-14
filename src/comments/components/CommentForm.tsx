import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import CommentIcon from '@material-ui/icons/Comment'

import useForm, {
  ValidationRules,
  State,
  createInputProps
} from '../../lib/hooks/useForm'

const required = (val: string) => (!val ? 'Comment cannot be empty' : '')

const validationRules: ValidationRules = {
  commentText: required,
}

interface ValueState extends State {
  commentText: string
}

const initialValueState: ValueState = {
  commentText: '',
}

const useStyles = makeStyles(theme => ({
  textInput: {
    marginTop: theme.spacing(),
    marginBottom: theme.spacing(),
    backgroundColor: '#fff',
  },
}))

interface Props {
  onSubmit: (commentText: string, id?: number | null) => void
}

const CommentForm: React.FC<Props> = props => {
  const classes = useStyles()

  const { onSubmit } = props

  const [values, errorMessages, handleInputChange, handleSubmit] = useForm<
    ValueState
  >(initialValueState, validationRules, ({ commentText }) =>
    onSubmit(commentText)
  )
  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <TextField
        {...createInputProps('commentText', values, errorMessages)}
        label="Add your comment"
        className={classes.textInput}
        variant="outlined"
        fullWidth
        onChange={handleInputChange}
        multiline
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        startIcon={<CommentIcon />}
        type="submit"
      >
        Save Comment
      </Button>
    </form>
  )
}

export default CommentForm
