import React from 'react'
import Moment from 'moment'

const Current = ({location, current}) => {
  return (
    <div className="pb-2 bg-rose-50 border-2 border-rose-500 rounded">
      <h1 className="hidden">Current</h1>
      <p className="serif font-bold pb-1 bg-rose-600 text-gray-50
                    text-xl sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
        {location.name}
      </p>
      <p>{current.condition.text}, {current.temp_f}&deg;</p>
      <p className="text-sm sm:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
        {Moment(location.localtime, 'Y-M-D H:m:s').format('LT')}
      </p>
      <div className="h-14">
        <img src={current.condition.icon} alt={current.condition.text} 
            className="mx-auto" />
      </div>

      {/* Flex for trio of information */}
      <div className="pt-2 flex justify-center items-center">
        <div className="flex-1 border-r border-rose-500">
          <h2 className="font-bold">Wind</h2>
          <p>{current.wind_mph} mph ({current.wind_dir})</p>
        </div>
        <div className="flex-1 border-r border-rose-500">
          <h2 className="font-bold">Precipitation</h2>
          <p>{current.precip_in}"</p>
        </div>
        <div className="flex-1">
          <h2 className="font-bold">Humidity</h2>
          <p>{current.humidity}%</p>
        </div>
      </div>

    </div>
  )
}

export default Current
