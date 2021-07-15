import covidApi from '../../../pages/api/covid.api'

import types from './countries.constants'

import getResponseError from '../../../helpers/get-response-error'

export const fetchCountries = (params) => async (dispatch) => {
  try {
    dispatch({
      type: types.FETCH_COUNTRIES.REQUEST,
    })

    const response = await covidApi.fetchCountries(params)

    dispatch({
      type: types.FETCH_COUNTRIES.SUCCESS,
      payload: { data: response.data },
    })
  } catch (err) {
    console.error(err.message)
    dispatch({
      type: types.FETCH_COUNTRIES.FAILED,
      notification: {
        type: 'error',
        text: getResponseError(err),
      },
    })
  }
}

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
