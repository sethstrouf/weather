import React from 'react'
import Footer from './Footer';
import Toggle from './Toggle'

function App() {
  return (
    <div className="min-h-screen mx-auto text-center typography">

      <h1 className="serif font-bold">Weather App</h1>

      <Toggle />

      {/* Mobile - tabs for CURRENT | FORECAST */}

      {/* CURRENT WEATHER */}

      {/* FORECAST WEATHER */}

      <Footer />

    </div>
  );
}

export default App;
