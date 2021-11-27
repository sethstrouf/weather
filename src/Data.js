import React from 'react'
import Location from './Location'

const Data = ({data}) => {
  return (
    <div>
      <Location location={data.location} />
    </div>
  )
}

export default Data
