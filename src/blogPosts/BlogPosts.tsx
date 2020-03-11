import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'
import Paper from '@material-ui/core/Paper'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import { fetchBlogPosts } from './actions'
import { getBlogPosts } from './selector'

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#D3D3D3',
    marginTop: theme.spacing(),
  },
  card: {
    margin: theme.spacing(2),
    minWidth: '60vh',
  },
}))

const BlogPosts: React.FC = () => {
  const dispatch = useDispatch()
  const { isLoading, list } = useSelector(getBlogPosts)
  const classes = useStyles()

  useEffect(() => {
    dispatch(fetchBlogPosts())
  }, [dispatch])

  if (isLoading) {
    return <CircularProgress />
  }
  return (
    <Paper className={classes.root} elevation={3}>
      {list.map(blogPost => (
        <Card key={blogPost.id} className={classes.card}>
          <CardContent>
            <Typography color="textPrimary" variant="h4">
              {blogPost.title}
            </Typography>
            <Typography color="textSecondary">
              by {blogPost.user.name}
            </Typography>
            <Typography variant="caption">
              {blogPost.body.substr(0, 10)}...
            </Typography>
            <Button color="primary">Read More</Button>
          </CardContent>
        </Card>
      ))}
    </Paper>
  )
}

export default BlogPosts
