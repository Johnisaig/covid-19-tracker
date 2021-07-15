import { handleActions } from 'redux-actions'

import update from 'immutability-helper'

import types from './summary.constants'

const initialState = {
  isLoading: false,
  isLoaded: false,
  resource: {},
}

export default handleActions(
  {
    [types.FETCH_SUMMARY.REQUEST]: (state) => {
      return update(state, {
        isLoading: {
          $set: true,
        },
      })
    },
    [types.FETCH_SUMMARY.SUCCESS]: (state, { payload: { data } }) => {
      return update(state, {
        isLoaded: {
          $set: true,
        },
        isLoading: {
          $set: false,
        },
        resource: {
          $set: data,
        },
      })
    },
  },
  initialState,
)
