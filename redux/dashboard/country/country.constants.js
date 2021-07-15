import createActionType from '../../../helpers/create-action-type'

export const GET_COUNTRY = createActionType('GET_COUNTRY', [
  'REQUEST',
  'SUCCESS',
  'FAILED',
])

export const SELECTED_COUNTRY = createActionType('SELECTED_COUNTRY', [
  'SELECTED',
])

export const SELECTED_BY_COUNTRY = createActionType('SELECTED_BY_COUNTRY', [
  'COUNTRY',
])

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  GET_COUNTRY,
  SELECTED_COUNTRY,
  SELECTED_BY_COUNTRY,
}
