import React from 'react'

const Input = ({handleChange, handleSubmit}) => {

  return (
    <form onSubmit={handleSubmit}>
      <p id="error" className="text-red-600 font-bold">&nbsp;</p>
      <label htmlFor="zip" value="Zip Code" className="hidden">
        Enter a 5-digit Zip Code
      </label>
      <input type="text" id="zip" placeholder="Enter Zip Code"
             onChange={handleChange}
             title="Must be 5 numbers"
             className="text-center border-b border-rose-600
                        focus:bg-transparent focus:border-transparent
                        focus:outline-none focus:ring focus:ring-rose-600" />
    </form>
  )
}

export default Input
