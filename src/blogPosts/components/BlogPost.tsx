import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'
import Paper from '@material-ui/core/Paper'

import { LoadingStatus } from '../../common'
import { RootState } from '../../store/rootReducer'
import { fetchBlogPost } from '../actions'
import { BlogPostExpandedUserItem } from '../actions/fetchListActions'
import { makeBlogPostSelector } from '../selector'

import BlogPostCard from './BlogPostCard'
import { Comments } from '../../comments'

const useStyles = makeStyles(theme => ({
  cardWrapper: {
    backgroundColor: '#D3D3D3',
    marginTop: theme.spacing(),
    flex: 0.75,
  },
  card: {
    margin: theme.spacing(2),
    minWidth: '60vh',
  },
}))

const BlogPost: React.FC = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const blogPostSelector = useMemo(makeBlogPostSelector, [])
  const post = useSelector<RootState, BlogPostExpandedUserItem | null>(state =>
    blogPostSelector(state, { id })
  )
  const classes = useStyles()

  useEffect(() => {
    if (!post || post.isLoading === LoadingStatus.NOT_INITIALIZED) {
      dispatch(fetchBlogPost(Number(id)))
    }
  }, [post, id, dispatch])
  if (!(post && post.detail) || post.isLoading === LoadingStatus.LOADING) {
    return <CircularProgress />
  }
  return (
    <>
      <Paper className={classes.cardWrapper} elevation={3}>
        <BlogPostCard blogPost={post.detail} />
        <Comments blogPostId={post.detail.id} />
      </Paper>
    </>
  )
}

export default BlogPost
