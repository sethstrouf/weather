import React from 'react'
import Input from './Input'
import Footer from './Footer'

function App() {
  
  const axios = require('axios')
  const regex = /^[0-9]{5}$/
  const [zipcode, setZipcode] = React.useState('')
  const [data, setData] = React.useState(null)

  const handleChange = event => {
    setZipcode(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault();
    const errorDiv = document.getElementById('error')

    /* Input Validation */
    if(zipcode === '') {
      errorDiv.textContent = "Cannot be blank"
      return
    }
    if(!regex.test(zipcode)) {
      errorDiv.textContent = "Must be 5 numbers"
      return
    }
    /* Get request from Weather API */
    console.log(`${zipcode}`);
    axios(`http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${zipcode}&days=7&aqi=no&alerts=no`)
      .then(response => {
        setData(response.data)
      })
      .catch(error => {
        errorDiv.textContent = error.response.data.error.message
      })
  }

  return (
    <div className="min-h-screen mx-auto text-center typography">

      <h1 className="serif font-bold">Weather App</h1>

      {/* Input Zip Code */}
      <Input handleChange={handleChange} handleSubmit={handleSubmit} />

      {/* Toggle for Imperial and Metric */}

      {/* Mobile - tabs for CURRENT | FORECAST */}
      {/* http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${zipcode}&days=7&aqi=no&alerts=no */}

      {/* CURRENT WEATHER */}
      <p>{data === null ? '' : data.location.name }</p>

      {/* 7-DAY FORECAST WEATHER */}

      <Footer />

    </div>
  );
}

export default App;
