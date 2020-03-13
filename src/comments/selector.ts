import { createSelector } from 'reselect'

import { RootState } from '../store/rootReducer'
import { STATE_KEY, State } from './reducer'

const getStateSelector = (state: RootState) => state[STATE_KEY]

type BlogIdSelectorParams = { blogPostId: number }
const getPostIdSelector = (_state: RootState, params: BlogIdSelectorParams) =>
  params.blogPostId

export type SelectorResult = State['posts']

export const makeCommentListSelector = () =>
  createSelector(getStateSelector, getPostIdSelector, (state, postId) => {
    if (state && state[postId]) {
      const { isLoading, commentList } = state[postId]
      return {
        isLoading,
        commentList: commentList
          .slice()
          .sort((item1, item2) => item2.id - item1.id),
      }
    }
    return null
  })
