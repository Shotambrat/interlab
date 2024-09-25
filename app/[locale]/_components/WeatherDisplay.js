"use client";
import React, { useState, useEffect } from 'react';

const WeatherDisplay = ({ latitude, longitude }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [icon, setIcon] = useState('');
  const [isDay, setIsDay] = useState(true);

  // Function to map weather codes to icons
  const getWeatherIcon = (weatherCode, isDay) => {
    switch (weatherCode) {
      case 0: // Clear sky
        return isDay ? '🌞' : '🌕';
      case 1: // Partly cloudy
      case 2: // Cloudy
        return '☁️';
      case 3: // Overcast
        return '🌥️';
      case 4: // Light rain
        return isDay ? '🌦️' : '🌧️';
      case 5: // Moderate rain
        return '🌧️';
      case 6: // Heavy rain
        return '🌧️💧';
      case 7: // Thunderstorm
        return '🌩️';
      case 8: // Snow
        return '❄️';
      case 9: // Light snow
        return '🌨️';
      case 10: // Hail
        return '🌨️💧';
      case 11: // Fog
        return '🌫️';
      case 12: // Windy
        return '🌬️';
      case 13: // Tornado
        return '🌪️';
      case 14: // Duststorm/Sandstorm
        return '🌪️';
      case 15: // Mist
        return '🌫️';
      default:
        return '❓'; // Unknown condition
    }
  };

  // Fetch weather data based on location
  useEffect(() => {
    if (latitude && longitude) {
      const fetchWeather = async () => {
        try {
          const response = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
          );
          const data = await response.json();
          setWeatherData(data.current_weather);
          setIsDay(data.current_weather.is_day === 1);

          // Set the appropriate icon based on the weather code and day/night
          const weatherCode = data.current_weather.weathercode;
          const icon = getWeatherIcon(weatherCode, data.current_weather.is_day === 1);
          setIcon(icon);
        } catch (error) {
          console.error('Error fetching weather data:', error);
        }
      };
      fetchWeather();
    }
  }, [latitude, longitude]);

  if (!weatherData) return <div>Loading weather...</div>;

  return (
    <div className="flex items-center space-x-2 text-gray-700">
      <span className="text-3xl pt-1">{icon}</span>
      <span className="text-2xl">{weatherData.temperature}°C</span>
    </div>
  );
};

const WeatherApp = () => {
  // Example latitude and longitude for testing
  const latitude = 41.2995;  // Tashkent
  const longitude = 69.2401;

  return (
    <div className="weather-container">
      <WeatherDisplay latitude={latitude} longitude={longitude} />
    </div>
  );
};

export default WeatherApp;
