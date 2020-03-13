import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Divider from '@material-ui/core/Divider'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import CircularProgress from '@material-ui/core/CircularProgress'

import { LoadingStatus } from '../../common'
import { RootState } from '../../store/rootReducer'
import { fetchCommentList } from '../actions'
import { makeCommentListSelector, SelectorResult } from '../selector'

const useStyles = makeStyles(theme => ({
  card: {
    margin: theme.spacing(2),
    minWidth: '60vh',
    backgroundColor: '#f5f5f5',
  },
  list: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}))

interface Props {
  blogPostId: number
}

const Comments: React.FC<Props> = props => {
  const { blogPostId } = props

  const commentListSelector = useMemo(makeCommentListSelector, [])
  const result = useSelector<RootState, SelectorResult | null>(state =>
    commentListSelector(state, { blogPostId })
  )
  const classes = useStyles()
  const dispatch = useDispatch()

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

  if (!result || result.isLoading === LoadingStatus.LOADING) {
    return <CircularProgress />
  }

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h6">
          Comments ({result.commentList.length})
        </Typography>
        {result.commentList.length > 0 && (
          <List className={classes.list}>
            {result.commentList.map((item, index) => (
              <div key={item.id}>
                <ListItem key={item.id} alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar alt={item.user.name}>{item.user.name[0]}</Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={item.user.name}
                    secondary={item.body}
                  />
                </ListItem>
                {index !== result.commentList.length - 1 && (
                  <Divider variant="inset" component="li" />
                )}
              </div>
            ))}
          </List>
        )}
      </CardContent>
    </Card>
  )
}

export default Comments
