import React from 'react'
import Moment from 'moment'

const Forecast = ({forecast}) => {

  const currentDate = Moment().format('Y-M-D')

  return (
    <div className="pb-2 bg-rose-50 border-2 border-rose-500 rounded">
      <h1 className="serif font-bold pb-1 bg-rose-600 text-gray-50
                     text-xl sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
        {/* Either say "Today" or the forecast's day */}
        {Moment(currentDate).isSame(forecast.date) 
          ? 'Today' 
          : 'Tomorrow'
        }
      </h1>
      <p>Max Temp: {forecast.day.maxtemp_f}&deg;</p>
      <p>Min Temp: {forecast.day.mintemp_f}&deg;</p>
      <p>Max Wind: {forecast.day.maxwind_mph} mph</p>
      <p>Total Precipitation: {forecast.day.totalprecip_in}"</p>
      <p>Chance of Rain: {forecast.day.daily_chance_of_rain}%</p>
      <p>Chance of Snow: {forecast.day.daily_chance_of_snow}%</p>

      <h1 className="font-bold serif pt-4
                    text-xl sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
        Sun & Moon
      </h1>
      <p>Sunrise: {forecast.astro.sunrise}</p>
      <p>Sunset: {forecast.astro.sunset}</p>
      <p>Moon Phase: {forecast.astro.moon_phase}</p>
    </div>
  )
}

export default Forecast
