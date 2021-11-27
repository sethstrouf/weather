import React from 'react'
import Location from './Location'
import Current from './Current'
import Forecast from './Forecast'

const Data = ({data}) => {

  return (
    <div>
      <Location location={data.location} />
      <Current current={data.current} today={data.forecast.forecastday[0]} />
      {/* Today's Forecast (max temp, etc) */}
      <Forecast forecast={data.forecast.forecastday[1]} />
      {/* Tomorrow's Forecast */}

    </div>
  )
}

export default Data
