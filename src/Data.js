import React from 'react'
import Current from './Current'
import Forecast from './Forecast'

const Data = ({data}) => {

  return (
    <div className="pb-12 space-y-4 2xl:space-y-12">
      <div className="font-bold text-xl text-white bg-red-700">
        {data.alerts.alert[0]}
      </div>
      <Current location={data.location} current={data.current} />
      <div className="space-y-4 pb-12 md:space-y-0 md:flex justify-center 
                      items-center gap-4 2xl:gap-12">
        <Forecast forecast={data.forecast.forecastday[0]} />
        <Forecast forecast={data.forecast.forecastday[1]} />
      </div>
    </div>
  )
}

export default Data
