import React from 'react'
import Moment from 'moment'

const Forecast = ({forecast}) => {
  return (
    <div>
      <h1 className="font-bold text-lg">Forecast</h1>
      <p>Forecast Date: {Moment(forecast.date, 'Y-M-D').format('ddd')}</p>
    </div>
  )
}

export default Forecast
