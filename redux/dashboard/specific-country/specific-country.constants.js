import createActionType from '../../../helpers/create-action-type'

export const SELECTED_BY_COUNTRY = createActionType('SELECTED_BY_COUNTRY', [
  'COUNTRY',
])

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  SELECTED_BY_COUNTRY,
}
