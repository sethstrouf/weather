import React from 'react'
import Moment from 'moment'

const Forecast = ({forecast}) => {
  return (
    <div>
      <p>Forecast Date: {Moment(forecast.date, 'Y-M-D').format('ddd')}</p>
    </div>
  )
}

export default Forecast
