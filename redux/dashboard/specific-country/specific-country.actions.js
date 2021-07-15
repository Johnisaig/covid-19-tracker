import types from './specific-country.constants'

export const getSelectedByCountry = (response) => (dispatch) => {
  dispatch({
    type: types.SELECTED_BY_COUNTRY.COUNTRY,
    payload: { data: response },
  })
}
