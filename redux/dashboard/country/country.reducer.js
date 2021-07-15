import { handleActions } from 'redux-actions'

import update from 'immutability-helper'

import types from './country.constants'

const initialState = {
  isLoading: false,
  isLoaded: false,
  country: {
    value: '',
    label: '',
  },
  resource: {},
}

export default handleActions(
  {
    [types.GET_COUNTRY.REQUEST]: (state) => {
      return update(state, {
        isLoading: {
          $set: true,
        },
      })
    },
    [types.GET_COUNTRY.SUCCESS]: (state, { payload: { data } }) => {
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
    [types.SELECTED_COUNTRY.SELECTED]: (state, { payload: { data } }) => {
      return update(state, {
        isLoaded: {
          $set: true,
        },
        isLoading: {
          $set: false,
        },
        country: {
          $set: data,
        },
      })
    },
    [types.SELECTED_BY_COUNTRY.COUNTRY]: (state, { payload: { data } }) => {
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
