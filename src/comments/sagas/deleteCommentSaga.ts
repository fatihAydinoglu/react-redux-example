import { call, put, takeLatest } from 'redux-saga/effects'

import deleteCommentApiCall from '../../api/deleteComment'

import {
  DELETE_COMMENT_REQUESTED,
  DeleteCommentRequestedAction,
  deleteCommentSucceeded,
  deleteCommentFailed
} from '../actions/deleteCommentActions'
import { showErrorNotification } from '../../notification'

function* deleteComment(action: DeleteCommentRequestedAction) {
  const { id, postId } = action
  try {
    yield call(deleteCommentApiCall, id)
    yield put(deleteCommentSucceeded(id, postId))
  } catch (e) {
    yield put(
      showErrorNotification('Unexpected error while removing the comment')
    )
    yield put(deleteCommentFailed(id, postId))
  }
}

export default function* deleteCommentSaga() {
  yield takeLatest(DELETE_COMMENT_REQUESTED, deleteComment)
}
