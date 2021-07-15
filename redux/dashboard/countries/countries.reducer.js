import { handleActions } from 'redux-actions'

import update from 'immutability-helper'

import types from './countries.constants'

const initialState = {
  isLoading: false,
  isLoaded: false,
  resource: {},
}

export default handleActions(
  {
    [types.FETCH_COUNTRIES.REQUEST]: (state) => {
      return update(state, {
        isLoading: {
          $set: true,
        },
      })
    },
    [types.FETCH_COUNTRIES.SUCCESS]: (state, { payload: { data } }) => {
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
