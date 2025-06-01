'use client';

import WeatherIcon from './WeatherIcon';
import { getWeatherCondition } from '@/lib/weatherUtils';

interface WeatherDisplayProps {
  location: any;
  weather: any;
}

export default function WeatherDisplay({ location, weather }: WeatherDisplayProps) {
  const { current, current_units } = weather;
  const weatherCondition = getWeatherCondition(current.weather_code, current.is_day);
  
  return (
    <div className="mt-8 bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg rounded-3xl p-8 shadow-2xl animate-fadeIn">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
          {location.name}
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          {location.lat.toFixed(4)}°, {location.lon.toFixed(4)}°
        </p>
      </div>
      
      <div className="flex flex-col items-center mb-8">
        <WeatherIcon condition={weatherCondition} size="large" />
        <p className="text-lg font-medium text-gray-700 dark:text-gray-300 mt-4 capitalize">
          {weatherCondition.replace('-', ' ')}
        </p>
      </div>
      
      <div className="grid grid-cols-2 gap-6">
        <div className="text-center">
          <p className="text-5xl font-bold text-gray-800 dark:text-white">
            {Math.round(current.temperature_2m)}°
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Feels like {Math.round(current.apparent_temperature)}°
          </p>
        </div>
        
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-gray-600 dark:text-gray-400">Humidity</span>
            <span className="font-semibold text-gray-800 dark:text-white">
              {current.relative_humidity_2m}%
            </span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-gray-600 dark:text-gray-400">Wind</span>
            <span className="font-semibold text-gray-800 dark:text-white">
              {Math.round(current.wind_speed_10m)} {current_units.wind_speed_10m}
            </span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-gray-600 dark:text-gray-400">Pressure</span>
            <span className="font-semibold text-gray-800 dark:text-white">
              {Math.round(current.pressure_msl)} {current_units.pressure_msl}
            </span>
          </div>
        </div>
      </div>
      
      {(current.rain > 0 || current.snowfall > 0) && (
        <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
          <p className="text-sm text-blue-700 dark:text-blue-300">
            {current.rain > 0 && `Rain: ${current.rain} ${current_units.rain}`}
            {current.snowfall > 0 && `Snow: ${current.snowfall} ${current_units.snowfall}`}
          </p>
        </div>
      )}
    </div>
  );
}