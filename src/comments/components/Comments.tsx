import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import CircularProgress from '@material-ui/core/CircularProgress'

import { LoadingStatus } from '../../common'
import { getCurrentUser } from '../../auth/selector'
import { RootState } from '../../store/rootReducer'
import { fetchCommentList, saveComment, deleteComment } from '../actions'
import { makeCommentListSelector, SelectorResult } from '../selector'
import CommentForm from './CommentForm'
import CommentItem from './CommentItem'

const useStyles = makeStyles(theme => ({
  card: {
    margin: theme.spacing(2),
    minWidth: '60vh',
    backgroundColor: '#f5f5f5',
  },
  list: {
    width: '100%',
    marginTop: theme.spacing(2),
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
  loaderIcon: {
    position: 'absolute',
    zIndex: 2,
    left: 'calc(50% - 20px)',
    marginTop: 10,
  },
}))

interface Props {
  blogPostId: number
}

type SaveCommentForm = (commentText: string, id?: number | null) => void

const Comments: React.FC<Props> = props => {
  const { blogPostId } = props
  const [editingCommentId, setEditingCommentId] = useState<number | null>()

  const commentListSelector = useMemo(makeCommentListSelector, [])
  const result = useSelector<RootState, SelectorResult | null>(state =>
    commentListSelector(state, { blogPostId })
  )
  const classes = useStyles()
  const dispatch = useDispatch()
  const currentUser = useSelector(getCurrentUser)

  useEffect(() => {
    const shouldFetch =
      !result ||
      [
        LoadingStatus.LOADING,
        LoadingStatus.LOADED,
        LoadingStatus.HAS_ERROR,
      ].indexOf(result.isLoading) < 0
    if (shouldFetch) {
      dispatch(fetchCommentList(blogPostId))
    }
  }, [blogPostId, result, dispatch])

  const handleCommentFormSubmit: SaveCommentForm = (commentText, id) => {
    if (currentUser) {
      dispatch(
        saveComment(
          {
            body: commentText,
            postId: blogPostId,
            userId: currentUser.id,
            user: currentUser,
          },
          id
        )
      )
      setEditingCommentId(null)
    }
  }

  const handleDeleteComment = (id: number) => {
    dispatch(deleteComment(id, blogPostId))
    setEditingCommentId(null)
  }

  const isLoading = !result || result.isLoading === LoadingStatus.LOADING
  const commentCount = result ? result.commentList.length : 0

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h6">Comments ({commentCount})</Typography>
        <CommentForm onSubmit={handleCommentFormSubmit} />
        {isLoading && <CircularProgress className={classes.loaderIcon} />}
        {currentUser && commentCount > 0 && (
          <List className={classes.list}>
            {result &&
              result.commentList.map((comment, index) => (
                <CommentItem
                  key={comment.id}
                  isEditing={editingCommentId === comment.id}
                  setIsEditing={setEditingCommentId}
                  isLastItem={index === result.commentList.length - 1}
                  comment={comment}
                  currentUser={currentUser}
                  onDeleteComment={handleDeleteComment}
                  onUpdateComment={handleCommentFormSubmit}
                />
              ))}
          </List>
        )}
      </CardContent>
    </Card>
  )
}

export default Comments
