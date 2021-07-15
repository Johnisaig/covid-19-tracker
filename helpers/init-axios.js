import axios from 'axios'

import config from '../config'

// eslint-disable-next-line import/no-anonymous-default-export
export default (dispatch) => {
  axios.defaults.baseURL = config.COVID_API

  axios.interceptors.request.use((request) => {
    console.log('Starting Request', request)
    return request
  })

  axios.defaults.headers.common['Authorization'] = ``

  axios.interceptors.response.use(
    (response) => {
      return response
    },
    (error) => {
      if (error.response.status === 401) {
        // logout actions
        return
      }
      return Promise.reject(error)
    },
  )
}
