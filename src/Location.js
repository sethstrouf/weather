import React from 'react'
import Moment from 'moment'

const Location = ({location}) => {
  return (
    <div>
      <p>City: {location.name}</p>
      <p>Current Time: {Moment(location.localtime, 'Y-M-D H:m:s').format('LT')}
      </p>
    </div>
  )
}

export default Location
