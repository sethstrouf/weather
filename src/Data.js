import React from 'react'
import Current from './Current'
import Forecast from './Forecast'

const Data = ({data}) => {

  return (
    <div className="pb-12 space-y-4">
      <div className="font-bold text-xl text-white bg-red-700">
        {data.alerts.alert[0]}
      </div>
      <Current location={data.location} current={data.current} />
      <Forecast forecast={data.forecast.forecastday[0]} />
      <Forecast forecast={data.forecast.forecastday[1]} />
    </div>
  )
}

export default Data
