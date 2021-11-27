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

      {/* Sun and moon information */}
    {/*   <h1 className="font-bold serif
              text-xl sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
        Sun & Moon
      </h1> */}
      <div className="py-2 flex justify-center align-bottom 
                      bg-rose-200">
        <div className="flex-grow border-r border-gray-500">
          <h2 className="font-bold">Sunrise</h2>
          <p>{forecast.astro.sunrise}</p>
        </div>

        <div className="flex-grow">
          <h2 className="font-bold">Sunset</h2>
          <p>{forecast.astro.sunset}</p>
        </div>
      </div>

      <p className="pt-4 font-bold text-red-600">{forecast.day.maxtemp_f}&deg;
        <span className="text-gray-500 font-bold"> | </span>
        <span className="pb-4 font-bold text-blue-600">
          {forecast.day.mintemp_f}&deg;
        </span>
      </p>

      {/* Flex for trio of information */}
      <div className="pt-2 flex justify-center items-center">
        <div className="flex-grow border-r border-rose-500">
          <h2 className="font-bold">Max Wind</h2>
          <p>{forecast.day.maxwind_mph} mph</p>
        </div>
        <div className="flex-grow border-r border-rose-500">
          <h2 className="font-bold">Total Precipitation</h2>
          <p>{forecast.day.totalprecip_in}"</p>
        </div>
        <div className="flex-grow">
          <h2 className="font-bold">Rain/Snow</h2>
          <p>{forecast.day.daily_chance_of_rain}%/{forecast.day.daily_chance_of_snow}%</p>
        </div>
      </div>

    </div>
  )
}

export default Forecast
