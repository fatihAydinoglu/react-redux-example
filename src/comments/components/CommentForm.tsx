import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import DoneIcon from '@material-ui/icons/Done'
import CloseIcon from '@material-ui/icons/Close'
import IconButton from '@material-ui/core/IconButton'

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
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    marginTop: theme.spacing(),
    marginBottom: theme.spacing(),
    backgroundColor: '#fff',
  },
  button: {
    marginLeft: 3,
  },
  iconButton: {
    padding: 4,
  },
  doneIcon: {
    color: '#00EE00',
  },
  cancelIcon: {
    color: '#fc1414',
  },
}))

interface Props {
  onSubmit: (commentText: string, id?: number | null) => void
  onCancel?: () => void
  isEditing?: boolean
  initialValues?: ValueState
}

const CommentForm: React.FC<Props> = props => {
  const classes = useStyles()

  const { initialValues, onSubmit, isEditing, onCancel } = props

  const initialFormValues = initialValues
    ? { ...initialValueState, ...initialValues }
    : initialValueState

  const [values, errorMessages, handleInputChange, handleSubmit] = useForm<
    ValueState
  >(initialFormValues, validationRules, ({ commentText }) =>
    onSubmit(commentText)
  )

  const textLabel = isEditing ? 'Update your comment' : 'Add your comment'

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <div className={classes.root}>
        <TextField
          {...createInputProps('commentText', values, errorMessages)}
          label={textLabel}
          className={classes.textInput}
          variant="outlined"
          fullWidth
          onChange={handleInputChange}
          multiline
        />
        {!isEditing ? (
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            type="submit"
          >
            Save
          </Button>
        ) : (
          <>
            <IconButton className={classes.iconButton} onClick={handleSubmit}>
              <DoneIcon className={classes.doneIcon} />
            </IconButton>
            <IconButton
              className={classes.iconButton}
              onClick={() => onCancel && onCancel()}
            >
              <CloseIcon className={classes.cancelIcon} />
            </IconButton>
          </>
        )}
      </div>
    </form>
  )
}

export default CommentForm
