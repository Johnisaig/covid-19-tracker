import covidApi from '../../../pages/api/covid.api'

import types from './country.constants'

import getResponseError from '../../../helpers/get-response-error'

export const getCountry = (params) => async (dispatch) => {
  try {
    dispatch({
      type: types.GET_COUNTRY.REQUEST,
    })

    const response = await covidApi.getCountry(params)

    dispatch({
      type: types.GET_COUNTRY.SUCCESS,
      payload: { data: response.data },
    })
  } catch (err) {
    console.error(err.message)
    dispatch({
      type: types.GET_COUNTRY.FAILED,
      notification: {
        type: 'error',
        text: getResponseError(err),
      },
    })
  }
}

export const getSelectedCountry = (data) => (dispatch) => {
  dispatch({
    type: types.SELECTED_COUNTRY.SELECTED,
    payload: { data: data },
  })
}

export const getSelectedByCountry = (response) => (dispatch) => {
  dispatch({
    type: types.SELECTED_BY_COUNTRY.COUNTRY,
    payload: { data: response },
  })
}
