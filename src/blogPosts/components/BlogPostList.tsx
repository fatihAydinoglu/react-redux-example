import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'
import Paper from '@material-ui/core/Paper'

import { LoadingStatus } from '../../common'
import { fetchBlogPostList } from '../actions'
import { getBlogPostListSelector } from '../selector'
import { routes } from '../../router'
import BlogPostCard from './BlogPostCard'

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#D3D3D3',
    marginTop: theme.spacing(),
    flex: 0.75,
  },
}))

const BlogPostList: React.FC = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const { isListLoading, list } = useSelector(getBlogPostListSelector)
  const classes = useStyles()

  useEffect(() => {
    if (isListLoading !== LoadingStatus.LOADED) {
      dispatch(fetchBlogPostList())
    }
  }, [isListLoading, dispatch])

  if (isListLoading === LoadingStatus.LOADING) {
    return <CircularProgress />
  }
  return (
    <Paper className={classes.root} elevation={3}>
      {list.map(
        blogPost =>
          blogPost && (
            <BlogPostCard
              key={blogPost.id}
              blogPost={blogPost}
              onClickReadMore={() =>
                history.push(routes.post(blogPost.id, blogPost.title))
              }
            />
          )
      )}
    </Paper>
  )
}

export default BlogPostList
