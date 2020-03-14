import { call, put, takeLatest } from 'redux-saga/effects'

import saveCommentApiCall from '../../api/saveComment'

import {
  SAVE_COMMENT_REQUESTED,
  SaveCommentRequestedAction,
  saveCommentSucceeded,
  saveCommentFailed
} from '../actions/saveCommentActions'
import { showErrorNotification } from '../../notification'

function* saveComment(action: SaveCommentRequestedAction) {
  const { user, ...newComment } = action.comment
  try {
    const comment: CommentType = yield call(saveCommentApiCall, {
      ...newComment,
      ...(action.id ? { id: action.id } : {}),
    })
    yield put(saveCommentSucceeded({ ...comment, user }))
  } catch (e) {
    yield put(
      showErrorNotification('Unexpected error while saving the comment')
    )
    yield put(saveCommentFailed(action.comment))
  }
}

export default function* saveCommentSaga() {
  yield takeLatest(SAVE_COMMENT_REQUESTED, saveComment)
}
