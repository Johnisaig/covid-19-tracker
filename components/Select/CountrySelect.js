/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable react/display-name */
import React, { useState, useEffect } from 'react'

import Select from './Select'

import countriesApi from '../../pages/api/covid.api'

export default (props) => {
  const [options, setOptions] = useState([])

  useEffect(() => {
    fetchCountries().then((options) => {
      setOptions(options)
    })
  }, [])

  const fetchCountries = async () => {
    try {
      const response = await countriesApi.fetchCountries()

      return response.data.map((o) => ({
        value: o.ISO2,
        label: o.Country,
      }))
    } catch (err) {
      return []
    }
  }

  return <Select options={options} {...props} />
}
