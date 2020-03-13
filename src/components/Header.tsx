import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import HomeIcon from '@material-ui/icons/Home'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import { Link, useHistory } from 'react-router-dom'

import { removeLocalToken } from '../auth/token'
import { getCurrentUser } from '../auth/selector'
import { resetCurrentUser } from '../auth/actions'
import { routes } from '../router'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    width: '100%',
    padding: theme.spacing(),
    borderBottom: `1px solid ${theme.palette.divider}`,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  homeWrapper: {
    flex: 1,
  },
  titleWrapper: {
    flex: 4,
  },
  userWrapper: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  button: {
    padding: 0,
  },
}))

const Header = () => {
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
      <div className={classes.homeWrapper}>
        <Link to={routes.blogPosts()}>
          <HomeIcon color="primary" />
        </Link>
      </div>
      <div
        className={classes.titleWrapper}
        onClick={() => history.replace('/')}
      >
        <Typography variant="h2" align="center" color="textSecondary">
          RRE Blog
        </Typography>
        <Typography variant="subtitle2" align="center" color="textSecondary">
          React Redux Example
        </Typography>
      </div>
      <div className={classes.userWrapper}>
        {currentUser && <span>{currentUser.name}</span>}
        <Button
          color="primary"
          className={classes.button}
          startIcon={<ButtonIcon />}
          onClick={handleButtonClick}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  )
}

export default Header
