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
    axios(`https://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${zipcode}&days=2&aqi=no&alerts=no`)
      .then(response => {
        setData(response.data)
        errorDiv.innerText = '\u00A0'
        document.getElementById('zip').value = ''
      })
      .catch(error => {
        errorDiv.textContent = error.response.data.error.message
        console.log(error);
      })
  }

  return (
    <div className="text-center typography text-gray-800 bg-gray-50
                    sm:text-lg lg:text-xl 2xl:text-2xl">
      <div className="min-h-screen relative mx-auto 
                      px-4 sm:px-8 lg:px-12 xl:px-24 2xl:px-48
">

        <h1 className="serif font-bold pt-4 text-rose-700
                      text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
                        Weather App
        </h1>

        {/* Input Zip Code */}
        <Input handleChange={handleChange} handleSubmit={handleSubmit} />

          {/* Display data once it's been submitted */}
          {data === null ? null : <Data data={data} />}

        <Footer />
      </div>
    </div>
  );
}

export default App;
