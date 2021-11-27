import React from 'react'
import Location from './Location'
import Current from './Current'
import Forecast from './Forecast'

const Data = ({data}) => {
  return (
    <div>
      <Location location={data.location} />
      <Current current={data.current} />
      <Forecast forecast={data.forecast} />
    </div>
  )
}

export default Data
