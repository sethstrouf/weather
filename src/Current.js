import React from 'react'

const Current = ({current, today}) => {
  return (
    <div>
      <h1 className="font-bold text-lg">Current</h1>
      <img src={current.condition.icon} alt={current.condition.text} 
           className="m-auto" />
      <p>Temperature: {current.temp_f}</p>
      <p>Feels like: {current.feelslike_f}</p>
      <p>Condition: {current.condition.text}</p>
      <p>Wind MPH: {current.wind_mph}</p>
      <p>Wind Dir: {current.wind_dir}</p>
      <p>Precipitation: {current.precip_in}</p>
      <p>Humidity: {current.humidity}</p>

      <h1 className="font-bold text-lg">Today</h1>
      <p>Max Temp: {today.day.maxtemp_f}</p>
    </div>
  )
}

export default Current
