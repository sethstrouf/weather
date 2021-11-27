import React from 'react'

const Input = ({handleChange, handleSubmit}) => {

  return (
    <form onSubmit={handleSubmit} className="py-4">
      <p id="error" className="text-red-700 font-bold pb-2">&nbsp;</p>
      <label htmlFor="zip" value="Zip Code" className="hidden">
        Enter a 5-digit Zip Code
      </label>
      <input type="text" id="zip" placeholder="Enter Zip Code"
             onChange={handleChange}
             title="Must be 5 numbers"
             className="text-center border-b border-rose-500 bg-transparent
                        focus:bg-transparent focus:border-transparent w-full
                        focus:outline-none focus:ring focus:ring-rose-500" />
    </form>
  )
}

export default Input
