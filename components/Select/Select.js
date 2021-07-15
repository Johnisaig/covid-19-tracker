import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Select from 'react-select'

import { getSelectedCountry } from '../../redux/dashboard/country/country.actions'
import { getSelectedByCountry } from '../../redux/dashboard/specific-country/specific-country.actions'

const BaseSelect = ({ label, name, options = [], defaultValue, ...rest }) => {
  const dispatch = useDispatch()
  const [selected, setSelected] = useState({
    value: 'WorldWide',
    label: 'WorldWide',
  })

  const [byCountryValue, setByCountryValue] = useState([
    {
      Date: '',
      NewConfirmed: 0,
      NewDeaths: '0',
      NewRecovered: 0,
      TotalConfirmed: 0,
      TotalDeaths: 0,
      TotalRecovered: 0,
    },
  ])

  const byCountry = useSelector(
    (state) => state.dashboard.summary.resource.Countries,
  )

  useEffect(() => {
    if (options) {
      const nextSelected = options.find(
        (o) => String(o.value) === String(defaultValue),
      )
      setSelected(nextSelected)
    }

    if (selected) {
      dispatch(getSelectedCountry(selected))

      const response = byCountryValue.find((x) => x.Country === selected.label)
      dispatch(getSelectedByCountry(response))
    }

    setByCountryValue(byCountry)
  }, [options, defaultValue, setSelected, selected])

  const handleChange = (option) => setSelected(option)

  return (
    <>
      <p style={{ marginBottom: '10px' }}>{label}</p>
      <Select
        id={`select_${name}`}
        name={`select_${name}`}
        value={selected}
        options={options}
        onChange={handleChange}
        defaultValue={defaultValue}
        {...rest}
      />
      <input
        type="hidden"
        name={name}
        id={name}
        defaultValue={selected ? selected.value : 'WorldWide'}
      />
    </>
  )
}

export default BaseSelect
