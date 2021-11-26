import React from 'react'

const Zipcode = ({handleChange, handleSubmit}) => {

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="zip" value="Zip Code">Enter a 5-digit Zip Code</label>
      <input type="text" id="zip" placeholder="Zip Code"
             onChange={handleChange}
             pattern="[0-9]{5}"
             title="Must be 5 numbers"
             className="bg-rose-100 border border-rose-600" />
      <input type="submit" value="submit"
             className="bg-rose-100 border border-rose-600"
       />
    </form>
  )
}

export default Zipcode
