import createActionType from '../../../helpers/create-action-type'

export const FETCH_SUMMARY = createActionType('FETCH_SUMMARY', [
  'REQUEST',
  'SUCCESS',
  'FAILED',
])

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  FETCH_SUMMARY,
}
