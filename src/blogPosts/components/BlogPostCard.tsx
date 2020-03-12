import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  card: {
    margin: theme.spacing(2),
    minWidth: '60vh',
  },
  body: {
    paddingTop: theme.spacing(),
  },
}))

interface Props {
  blogPost: BlogPostExpandedUser
  onClickReadMore?: () => void
}

const BlogPostCard: React.FC<Props> = props => {
  const classes = useStyles()

  const { blogPost, onClickReadMore } = props
  const bodyText = onClickReadMore
    ? `${blogPost.body.substr(0, 10)}...`
    : blogPost.body
  return (
    <Card key={blogPost.id} className={classes.card}>
      <CardContent>
        <Typography color="textPrimary" variant="h4">
          {blogPost.title}
        </Typography>
        <Typography color="textSecondary">by {blogPost.user.name}</Typography>
        <Typography
          className={classes.body}
          variant={onClickReadMore ? 'caption' : 'body1'}
        >
          {bodyText}
        </Typography>
        {onClickReadMore && (
          <Button color="primary" onClick={onClickReadMore}>
            Read More
          </Button>
        )}
      </CardContent>
    </Card>
  )
}

export default BlogPostCard
