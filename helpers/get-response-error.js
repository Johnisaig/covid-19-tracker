// import get from 'lodash/get'
// eslint-disable-next-line import/no-anonymous-default-export
export default function (err) {
  let message = err.message

  if (err.response && err.response.data && err.response.data.message) {
    message = err.response.data.message
  }

  if (
    err.response &&
    err.response.data &&
    Array.isArray(err.response.data.errors)
  ) {
    message = err.response.data.errors[0].detail
  }

  if (
    err.response &&
    Array.isArray(err.response.data) &&
    err.response.data[0].message
  ) {
    message = err.response.data[0].message
  }

  return message
}
