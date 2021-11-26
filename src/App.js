import React from 'react'
import Zipcode from './Zipcode'
import Footer from './Footer'

function App() {

  const [zipcode, setZipcode] = React.useState("");

  const handleChange = event => {
    setZipcode(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault();
    console.log(`${zipcode}`);
    /* Get request from API */
  }

  return (
    <div className="min-h-screen mx-auto text-center typography">

      <h1 className="serif font-bold">Weather App</h1>

      {/* Input Zip Code */}
      <Zipcode handleChange={handleChange} handleSubmit={handleSubmit} />

      {/* Toggle for Imperial and Metric */}

      {/* Mobile - tabs for CURRENT | FORECAST */}
      {/* http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${zipcode}&days=7&aqi=no&alerts=no */}

      {/* CURRENT WEATHER */}

      {/* 7-DAY FORECAST WEATHER */}

      <Footer />

    </div>
  );
}

export default App;
