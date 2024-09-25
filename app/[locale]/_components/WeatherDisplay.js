"use client";
import React, { useState, useEffect } from "react";

const WeatherDisplay = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [icon, setIcon] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const apiKey = "92c9352ee3153f6e206c4baf06c91c25"; // replace with your API key

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=Dubai&units=metric&appid=${apiKey}`
        );
        const data = await response.json();

        if (response.ok) {
          setWeatherData(data);

          // Map weather to icon
          if (data.weather[0].main === "Clear") {
            setIcon("☀️");
          } else if (data.weather[0].main === "Clouds") {
            setIcon("☁️");
          } else if (data.weather[0].main === "Rain") {
            setIcon("🌧️");
          }
        } else {
          setErrorMessage(data.message); // Handle invalid API key or other issues
        }
      } catch (error) {
        console.error("Error fetching weather data", error);
        setErrorMessage("Failed to fetch weather data");
      }
    };

    fetchWeather();
  }, []);

  if (errorMessage) return <div>Error: {errorMessage}</div>;

  if (!weatherData) return <div>Loading weather...</div>;

  return (
    <div className="flex items-center space-x-2">
      <span className="text-xl font-semibold">{icon}</span>
      <span className="text-xl font-semibold">{weatherData.main.temp}°C</span>
    </div>
  );
};

export default WeatherDisplay;
