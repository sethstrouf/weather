import React from 'react'
import Moment from 'moment'

const Location = ({location}) => {
  return (
    <div>
      <h1 className="font-bold text-lg">Location</h1>
      <p>City: {location.name}</p>
      <p>Current Time: {Moment(location.localtime, 'Y-M-D H:m:s').format('LT')}
      </p>
    </div>
  )
}

export default Location
