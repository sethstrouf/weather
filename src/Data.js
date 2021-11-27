import React from 'react'
import Location from './Location'
import Current from './Current'

const Data = ({data}) => {
  return (
    <div>
      <Location location={data.location} />
      <Current current={data.current} />
    </div>
  )
}

export default Data
