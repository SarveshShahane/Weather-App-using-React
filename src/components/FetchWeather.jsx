import React from 'react'
import { useState,useEffect } from 'react'
const FetchWeather = ({city}) => {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_WEATHER_API_KEY}&units=metric`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setWeatherData(data);
            } catch (error) {
                console.error('Error fetching weather data:', error);
            } finally {
                setLoading(false);
            }
        };

        if (city) {
            fetchWeather();
        }
    }
    , [city]);
  return (
  <div className='w-full'>
        {loading && city ? (
            <div className='flex items-center justify-center p-10'>
                <div className='animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-500'></div>
            </div>
        ) : weatherData ? (
            <div className='bg-gray-800 border border-gray-700 rounded-xl p-6 shadow-xl'>
                <div className='flex justify-between items-start'>
                    <h2 className='text-2xl font-bold text-white mb-4'>
                        {weatherData.name}
                        <span className='ml-2 text-sm font-normal text-gray-400'>{weatherData.sys.country}</span>
                    </h2>
                    <div className='text-5xl font-bold text-cyan-400'>
                        {Math.round(weatherData.main.temp)}°C
                    </div>
                </div>
                
                <div className='flex items-center mb-4'>
                    <img 
                        src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} 
                        alt={weatherData.weather[0].description}
                        className='w-16 h-16'
                    />
                    <p className='text-lg capitalize text-gray-300'>{weatherData.weather[0].description}</p>
                </div>
                
                <div className='grid grid-cols-2 gap-4 mt-6'>
                    <div className='bg-gray-700/50 p-3 rounded-lg'>
                        <p className='text-gray-400 text-sm'>Humidity</p>
                        <p className='text-xl font-semibold'>{weatherData.main.humidity}%</p>
                    </div>
                    <div className='bg-gray-700/50 p-3 rounded-lg'>
                        <p className='text-gray-400 text-sm'>Wind Speed</p>
                        <p className='text-xl font-semibold'>{weatherData.wind.speed} m/s</p>
                    </div>
                    <div className='bg-gray-700/50 p-3 rounded-lg'>
                        <p className='text-gray-400 text-sm'>Feels Like</p>
                        <p className='text-xl font-semibold'>{Math.round(weatherData.main.feels_like)}°C</p>
                    </div>
                    <div className='bg-gray-700/50 p-3 rounded-lg'>
                        <p className='text-gray-400 text-sm'>Pressure</p>
                        <p className='text-xl font-semibold'>{weatherData.main.pressure} hPa</p>
                    </div>
                </div>
            </div>
        ) : city ? (
            <div className='bg-gray-800 border border-gray-700 rounded-xl p-6 text-center'>
                <p className='text-red-400'>No data available for the specified city.</p>
            </div>
        ) : (
            <div className='bg-gray-800 border border-gray-700 rounded-xl p-6 text-center'>
                <p className='text-gray-400'>Enter a city name to see the weather forecast.</p>
            </div>
        )}
    </div>
  )
}

export default FetchWeather