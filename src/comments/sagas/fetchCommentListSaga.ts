import { call, put, takeLatest } from 'redux-saga/effects'

import getCommentListApiCall from '../../api/getCommentList'

import {
  COMMENT_LIST_FETCH_REQUESTED,
  CommentListRequestedAction,
  fetchCommentListSucceeded,
  fetchCommentListFailed
} from '../actions/commentListActions'
import { showErrorNotification } from '../../notification'

function* fetchComment(action: CommentListRequestedAction) {
  try {
    const commentList: CommentExpandedUser[] = yield call(
      getCommentListApiCall,
      action.blogPostId
    )
    yield put(fetchCommentListSucceeded(commentList, action.blogPostId))
  } catch (e) {
    yield put(
      showErrorNotification(
        'Unexpected error while getting comments for the blog post'
      )
    )
    yield put(fetchCommentListFailed(action.blogPostId))
  }
}

export default function* fetchCommentListSaga() {
  yield takeLatest(COMMENT_LIST_FETCH_REQUESTED, fetchComment)
}
