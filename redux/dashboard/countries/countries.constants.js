import createActionType from '../../../helpers/create-action-type'

export const FETCH_COUNTRIES = createActionType('FETCH_COUNTRIES', [
  'REQUEST',
  'SUCCESS',
  'FAILED',
])

export const GET_COUNTRY = createActionType('GET_COUNTRY', [
  'REQUEST',
  'SUCCESS',
  'FAILED',
])

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  FETCH_COUNTRIES,
  GET_COUNTRY,
}
