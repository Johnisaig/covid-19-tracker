import covidApi from '../../../pages/api/covid.api'

import types from './summary.constants'
import getResponseError from '../../../helpers/get-response-error'

export const fetchSummary = (params) => async (dispatch) => {
  try {
    dispatch({
      type: types.FETCH_SUMMARY.REQUEST,
    })

    const response = await covidApi.fetchSummary(params)

    dispatch({
      type: types.FETCH_SUMMARY.SUCCESS,
      payload: { data: response.data },
    })
  } catch (err) {
    console.error(err.message)
    dispatch({
      type: types.FETCH_SUMMARY.FAILED,
      notification: {
        type: 'error',
        text: getResponseError(err),
      },
    })
  }
}
