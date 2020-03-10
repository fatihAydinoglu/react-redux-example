import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Snackbar from '@material-ui/core/Snackbar'
import Alert from '@material-ui/lab/Alert'
import { makeStyles } from '@material-ui/core/styles'

import { getNotification } from './selector'
import { hideNotification } from './actions'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}))

const Notification: React.FC = () => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const notification = useSelector(getNotification)

  const handleClose = (_event: any, reason: string) => {
    if (reason === 'clickaway') {
      return
    }
    dispatch(hideNotification())
  }
  return (
    <div className={classes.root}>
      <Snackbar
        open={!!notification.message}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert
          elevation={6}
          variant="filled"
          onClose={event => handleClose(event, '')}
          severity={notification.error ? 'error' : 'success'}
        >
          {notification.message}
        </Alert>
      </Snackbar>
    </div>
  )
}

export default Notification
