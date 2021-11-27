import React from 'react'
import Moment from 'moment'

const Forecast = ({forecast}) => {

  const currentDate = Moment().format('Y-M-D')

  return (
    <div>
      <h1 className="font-bold text-lg">
        {/* Either say "Today" or the forecast's day */}
        {Moment(currentDate).isSame(forecast.date) 
          ? 'Today' 
          : Moment(forecast.date, 'Y-M-D').format('dddd')
        }
      </h1>
      <p>Max Temp: {forecast.day.maxtemp_f}</p>
      <p>Min Temp: {forecast.day.mixtemp_f}</p>
      <p>Max Wind: {forecast.day.maxtemp_f}</p>
      <p>Total Precipitation: {forecast.day.maxtemp_f}</p>
      <p>Chance of Rain: {forecast.day.maxtemp_f}</p>
      <p>Chance of Snow: {forecast.day.maxtemp_f}</p>

      <h1 className="font-bold text-lg">Sun & Moon</h1>
      <p>Sunrise: {forecast.astro.sunrise}</p>
      <p>Sunset: {forecast.astro.sunset}</p>
      <p>Moon Phase: {forecast.astro.moon_phase}</p>
    </div>
  )
}

export default Forecast
