import React from 'react'

const Current = ({current}) => {
  return (
    <div className="p-2 bg-rose-50 border-2 border-rose-500 rounded">
      <img src={current.condition.icon} alt={current.condition.text} 
          className="mx-auto pb-2" />
      <h1 className="font-bold text-lg">Current</h1>
      <p>Temperature: {current.temp_f}&deg;</p>
      <p>Feels like: {current.feelslike_f}&deg;</p>
      <p>Condition: {current.condition.text}</p>
      <p>Wind MPH: {current.wind_mph} mph</p>
      <p>Wind Dir: {current.wind_dir}</p>
      <p>Precipitation: {current.precip_in}"</p>
      <p>Humidity: {current.humidity}%</p>
    </div>
  )
}

export default Current
