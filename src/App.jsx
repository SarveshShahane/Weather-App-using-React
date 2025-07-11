import {React,useEffect,useState} from 'react'
import './App.css'
import Data from "./components/Data"
import FetchWeather from './components/FetchWeather'
const App = () => {
  const [city,setCity]=useState("")
  function changeCity(val){
setCity(val);
  }
  return (
   <div className='min-h-screen bg-gray-900 flex flex-col items-center py-12 px-4 text-gray-100'>
      <h1 className='text-3xl font-bold mb-8 text-cyan-400'>Weather Forecast</h1>
      <div className='w-full max-w-md'>
        <Data fun={changeCity}/>
        <div className='mt-8'>
          <FetchWeather city={city}/>
        </div>
      </div>
    </div>
  )
}

export default App