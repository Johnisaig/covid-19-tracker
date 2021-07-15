import Noty from 'noty'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (next) => (action) => {
    if (action.notification) {
      new Noty(action.notification).show()
    }

    return next(action)
  }
}
