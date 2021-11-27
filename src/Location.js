import React from 'react'
import Moment from 'moment'

const Location = ({location}) => {
  return (
    <div className="p-2 bg-rose-50 border-2 border-rose-500 rounded">
      <h1 className="font-bold text-lg">{location.name}</h1>
      <p>{Moment(location.localtime, 'Y-M-D H:m:s').format('LT')}
      </p>
    </div>
  )
}

export default Location
