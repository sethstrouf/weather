import React from 'react'
import Input from './Input'
import Data from './Data'
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
    axios(`https://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${zipcode}&days=2&aqi=no&alerts=yes`)
      .then(response => {
        setData(response.data)
        errorDiv.innerText = '\u00A0'
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

      {data === null 
        ? null 
        : <Data data={data} />
      }


      <Footer />

    </div>
  );
}

export default App;
