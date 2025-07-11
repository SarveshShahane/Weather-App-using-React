import React from 'react'
import { useState } from 'react'

const Data = ({ fun }) => {
  const [city, setCity] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    fun(city);

  }
  const handleChange = (e) => {
    setCity(e.target.value)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="city" id="city" value={city} placeholder='Enter city...' onChange={handleChange} className='flex-1 bg-gray-800 text-white border border-gray-700 rounded-lg p-3 
                    focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent
                    placeholder:text-gray-500'
        />
        <button type='submit' className='bg-cyan-600 hover:bg-cyan-700 text-white font-medium py-3 px-6 rounded-lg 
                    transition-colors duration-200 shadow-lg hover:shadow-cyan-800/30'
        >Submit</button>
      </form>
    </div>
  )
}

export default Data