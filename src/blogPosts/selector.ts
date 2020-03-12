import { createSelector } from 'reselect'

import { LoadingStatus } from '../common'
import { RootState } from '../store/rootReducer'
import { STATE_KEY } from './reducer'

type BlogIdSelectorParams = { id: string | undefined | null }

const getStateSelector = (state: RootState) => state[STATE_KEY]

export const getBlogPostListSelector = createSelector(
  getStateSelector,
  ({ isListLoading, items }) => ({
    isListLoading,
    list: Object.keys(items)
      .map(id => {
        const { isLoading, detail } = items[Number(id)]
        if (isLoading !== LoadingStatus.LOADED || !(detail && detail.id)) {
          return null
        }
        return detail
      })
      .filter(item => !!item)
      .sort((item1, item2) => {
        if (item1 && item2) {
          return item2.id - item1.id
        }
        return 1
      }),
  })
)

const getPostIdSelector = (_state: RootState, params: BlogIdSelectorParams) =>
  params.id

export const makeBlogPostSelector = () =>
  createSelector(getStateSelector, getPostIdSelector, (state, postId) => {
    if (postId) {
      const post = state.items[Number(postId)]
      return post
    }
    return null
  })
