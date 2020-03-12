import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import { useHistory } from 'react-router-dom'

import { removeLocalToken } from '../auth/token'
import { getCurrentUser } from '../auth/selector'
import { resetCurrentUser } from '../auth/actions'
import { routes } from '../router'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    padding: theme.spacing(),
    borderTop: `1px solid ${theme.palette.divider}`,
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
}))

const Menu = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const currentUser = useSelector(getCurrentUser)
  const history = useHistory()

  const buttonText = currentUser ? 'Logout' : 'Login'
  const ButtonIcon = currentUser ? ExitToAppIcon : AccountCircleIcon

  const handleButtonClick = () => {
    if (currentUser) {
      dispatch(resetCurrentUser())
      removeLocalToken()
      history.push('/')
    } else {
      history.push(routes.login())
    }
  }

  return (
    <div className={classes.root}>
      {currentUser && <span>{currentUser.name}</span>}
      <Button
        color="primary"
        startIcon={<ButtonIcon />}
        onClick={handleButtonClick}
      >
        {buttonText}
      </Button>
    </div>
  )
}

export default Menu
