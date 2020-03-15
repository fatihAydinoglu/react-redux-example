import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ListItem from '@material-ui/core/ListItem'
import Divider from '@material-ui/core/Divider'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import Typography from '@material-ui/core/Typography'

import CommentForm from './CommentForm'

const useStyles = makeStyles(theme => ({
  commentText: {
    marginRight: 20,
    whiteSpace: 'pre-line',
    wordBreak: 'break-word',
    color: theme.palette.text.secondary,
  },
  commentActions: {
    right: 2,
  },
  iconButton: {
    padding: 4,
  },
  formWrapper: {
    marginLeft: 20,
    marginTop: theme.spacing(),
    marginBottom: theme.spacing(),
  },
}))

interface Props {
  comment: CommentExpandedUser
  currentUser: User
  isEditing: boolean
  setIsEditing: (id: number | null) => void
  isLastItem: boolean
  onDeleteComment: (id: number) => void
  onUpdateComment: (commentText: string, id: number) => void
}

const CommentItem: React.FC<Props> = props => {
  const {
    comment,
    currentUser,
    isEditing,
    setIsEditing,
    isLastItem,
    onDeleteComment,
    onUpdateComment,
  } = props

  const classes = useStyles()

  const handleEditFormSubmit = (commentText: string) => {
    setIsEditing(null)
    onUpdateComment(commentText, comment.id)
  }

  return (
    <div key={comment.id}>
      {isEditing ? (
        <div className={classes.formWrapper}>
          <CommentForm
            onSubmit={handleEditFormSubmit}
            isEditing
            onCancel={() => setIsEditing(null)}
            initialValues={{ commentText: comment.body }}
          />
        </div>
      ) : (
        <ListItem key={comment.id} alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt={comment.user.name}>{comment.user.name[0]}</Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={comment.user.name}
            secondary={
              <Typography className={classes.commentText}>
                {comment.body}
              </Typography>
            }
          />
          {currentUser && currentUser.id && currentUser.id === comment.userId && (
            <ListItemSecondaryAction className={classes.commentActions}>
              <IconButton
                title="Edit"
                className={classes.iconButton}
                onClick={() => setIsEditing(comment.id)}
              >
                <EditIcon />
              </IconButton>
              <IconButton
                title="Delete"
                className={classes.iconButton}
                onClick={() => onDeleteComment(comment.id)}
              >
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          )}
        </ListItem>
      )}

      {!isLastItem && <Divider variant="inset" component="li" />}
    </div>
  )
}

export default CommentItem
