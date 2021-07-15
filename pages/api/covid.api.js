import axios from 'axios'

import getConfig from '../../config'

const config = getConfig()

const fetchSummary = () => {
  return axios.get(config.COVID_API + `/summary`)
}

const fetchCountries = () => {
  return axios.get(config.COVID_API + `/countries`)
}

const getCountry = (params) => {
  return axios.get(config.COVID_API + `/countries/${params}`)
}

const fetchDayOneAllStatus = (params, status) => {
  return axios.get(
    config.COVID_API + `/dayone/country/${params}/status/${status}`,
  )
}

const fetchDayOneTotal = (params, status) => {
  return axios.get(
    config.COVID_API + `/dayone/country/${params}/status/${status}/live`,
  )
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  fetchSummary,
  fetchCountries,
  fetchDayOneAllStatus,
  fetchDayOneTotal,
  getCountry,
}
