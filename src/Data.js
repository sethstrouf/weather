import React from 'react'
import Location from './Location'
import Current from './Current'
import Forecast from './Forecast'

const Data = ({data}) => {

  return (
    <div>
      <div className="font-bold text-xl text-red-600">
        {data.alerts.alert[0]}
      </div>
      <Location location={data.location} />
      <Current current={data.current} />
      {/* Today's Forecast (max temp, etc) */}
      <Forecast forecast={data.forecast.forecastday[0]} />
      <Forecast forecast={data.forecast.forecastday[1]} />
    </div>
  )
}

export default Data
