import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.default,
    width: '100%',
    position: 'fixed',
    left: 0,
    bottom: 0,
    textAlign: 'center',
  },
}))

const Footer = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Typography variant="caption" gutterBottom align="center">
        Copyright &copy; {new Date().getFullYear()}, RRE Blog
      </Typography>
    </div>
  )
}

export default Footer
