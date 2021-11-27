import React from 'react'
import Moment from 'moment'

const Location = ({location}) => {
  return (
    <div>
      <p>City: {location.name}</p>
      <p>Current Time: {Moment(location.localtime).format('h:mm:ss a')}
      </p>
    </div>
  )
}

export default Location
