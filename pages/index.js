import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSummary } from '../redux/dashboard/summary/summary.actions'
import { fetchCountries } from '../redux/dashboard/countries/countries.actions'

import moment from 'moment'
import CountrySelect from '../components/Select/CountrySelect'
import CardCases from '../components/Cards/Cards'
import numberWithCommas from '../helpers/number-format'

import styled from 'styled-components'

export default function Home() {
  const dispatch = useDispatch()

  const options = {
    Date: new Date(),
    NewConfirmed: 0,
    NewDeaths: 0,
    NewRecovered: 0,
    TotalConfirmed: 0,
    TotalDeaths: 0,
    TotalRecovered: 0,
  }

  const [covidCases, setCovidCases] = useState(options)

  const globalCase = useSelector(
    (state) => state.dashboard.summary.resource.Global,
  )

  const byCountry = useSelector((state) => state.dashboard.country.resource)
  const specificCountry = useSelector(
    (state) => state.dashboard.specificCountry.resource,
  )

  useEffect(() => {
    dispatch(fetchSummary())
    dispatch(fetchCountries())

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (!specificCountry) {
      setCovidCases(globalCase)
    } else {
      setCovidCases(specificCountry)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [globalCase, byCountry])

  return (
    <MainContainer>
      <TitleContainer>
        <h1 className="title">COVID19 INFORMATION TRACKER</h1>
      </TitleContainer>
      <SearchContainer>
        <div className="dropdown-select">
          <CountrySelect
            defaultValue="Wolrd Wide"
            label="SELECT COUNTRY"
            name="Country"
          />
        </div>
        <div className="date-container">
          <div className="dates">DATE</div>
          <div className="date-output">
            {moment(covidCases.Date).format('MMMM Do, YYYY')}
          </div>
        </div>
      </SearchContainer>
      <ContentContainer>
        <CardCases
          backgroundColor="#FF983C"
          title="NEW CONFIRMED"
          content={numberWithCommas(covidCases.NewConfirmed)}
        />
        <CardCases
          backgroundColor="#556A7A"
          title="TOTAL CONFIRMED"
          content={numberWithCommas(covidCases.TotalConfirmed)}
        />
        <CardCases
          backgroundColor="#FF3B3C"
          title="NEW DEATHS"
          content={numberWithCommas(covidCases.NewDeaths)}
        />
        <CardCases
          backgroundColor="#9C2D2D"
          title="TOTAL DEATHS"
          content={numberWithCommas(covidCases.TotalDeaths)}
        />
        <CardCases
          backgroundColor="#31C95C"
          title="NEW RECOVERED"
          content={numberWithCommas(covidCases.NewRecovered)}
        />
        <CardCases
          backgroundColor="#309AFE"
          title="TOTAL RECOVERED"
          content={numberWithCommas(covidCases.TotalRecovered)}
        />
      </ContentContainer>
    </MainContainer>
  )
}

const MainContainer = styled.div`
  font-size: 20px;
  heigth: 100%;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
  position: fixed;
`

const TitleContainer = styled.div`
  position: relative;
  padding: 50px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;

  > .title {
    font-size: 60px;
    color: #838383;
    font-family: Ubuntu, 'times new roman', times, roman, serif;
  }
`

const SearchContainer = styled.div`
  align-items: center;
  justify-content: space-between;
  padding: 25px;
  margin: 50px;
  display: flex;

  .dropdown-select {
    width: 300px;
    color: #838383;
    font-weight: bold;
  }

  .date-container {
    color: #838383;
    font-weight: bold;
    justify-content: center;
    text-align: center;
    flex-direction: columns;
    font-size: 25px;

    .dates {
      margin-bottom: 5px;
    }

    .date-output {
      font-size: 35px;
    }
  }
`

const ContentContainer = styled.div`
  width: 100%;
  overflow: auto;
  height: 60vh;
  padding: 20px;
  justify-content: center;
  align-items: center;
  position: relative;
  display: flex;
  border-radius: 30px 30px 0px 0px;
  background-color: #201f28;
  flex-direction: row;
  flex-wrap: wrap;
`
