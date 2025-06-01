export function getWeatherCondition(weatherCode: number, isDay: number): string {
  // WMO Weather interpretation codes
  // https://open-meteo.com/en/docs
  
  if (weatherCode === 0) {
    return isDay ? 'clear-day' : 'clear-night';
  }
  
  if (weatherCode >= 1 && weatherCode <= 3) {
    return isDay ? 'clear-day' : 'clear-night';
  }
  
  if (weatherCode >= 45 && weatherCode <= 48) {
    return 'foggy';
  }
  
  if (weatherCode >= 51 && weatherCode <= 67) {
    return 'rainy';
  }
  
  if (weatherCode >= 71 && weatherCode <= 77) {
    return 'snowy';
  }
  
  if (weatherCode >= 80 && weatherCode <= 82) {
    return 'rainy';
  }
  
  if (weatherCode >= 85 && weatherCode <= 86) {
    return 'snowy';
  }
  
  if (weatherCode >= 95 && weatherCode <= 99) {
    return 'rainy';
  }
  
  return 'cloudy';
}