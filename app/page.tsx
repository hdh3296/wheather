'use client';

import { useState } from 'react';
import SearchBar from '@/components/SearchBar';
import WeatherDisplay from '@/components/WeatherDisplay';
import LoadingAnimation from '@/components/LoadingAnimation';

export default function Home() {
  const [location, setLocation] = useState<any>(null);
  const [weather, setWeather] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState('');
  const [error, setError] = useState('');

  const handleSearch = async (query: string) => {
    setLoading(true);
    setError('');
    setLocation(null);
    setWeather(null);
    
    try {
      setLoadingMessage('Looking up place information...');
      const geoResponse = await fetch(`/api/geocode?q=${encodeURIComponent(query)}`);
      const geoData = await geoResponse.json();
      
      if (!geoResponse.ok) {
        throw new Error(geoData.error || 'Failed to find location');
      }
      
      setLocation(geoData);
      
      setLoadingMessage('Fetching weather information...');
      const weatherResponse = await fetch(`/api/weather?lat=${geoData.lat}&lon=${geoData.lon}`);
      const weatherData = await weatherResponse.json();
      
      if (!weatherResponse.ok) {
        throw new Error(weatherData.error || 'Failed to fetch weather');
      }
      
      setWeather(weatherData);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
      setLoadingMessage('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-sky-100 dark:from-gray-900 dark:via-blue-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-2 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Weather Now
          </h1>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
            Search for any city to get current weather conditions
          </p>
          
          <SearchBar onSearch={handleSearch} isLoading={loading} />
          
          {loading && <LoadingAnimation message={loadingMessage} />}
          
          {error && (
            <div className="mt-8 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl text-red-600 dark:text-red-400 text-center">
              {error}
            </div>
          )}
          
          {location && weather && !loading && (
            <WeatherDisplay location={location} weather={weather} />
          )}
        </div>
      </div>
    </div>
  );
}
