import { handleActions } from 'redux-actions'

import update from 'immutability-helper'

import types from './specific-country.constants'

const initialState = {
  isLoading: false,
  isLoaded: false,
  resource: {
    Date: '',
    NewConfirmed: 0,
    NewDeaths: '0',
    NewRecovered: 0,
    TotalConfirmed: 0,
    TotalDeaths: 0,
    TotalRecovered: 0,
  },
}

export default handleActions(
  {
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
