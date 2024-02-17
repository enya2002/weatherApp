// components/WeatherCard.js
import React, { useState } from 'react';
import styles from './WeatherCard.module.css';

const WeatherCard = ({ weather }) => {
  const [unit, setUnit] = useState('C');

  const handleToggle = () => {
    setUnit(unit === 'C' ? 'F' : 'C');
  };

  const getTemperature = (temp) => {
    if (unit === 'C') {
      return temp;
    } else {
      return (temp * 9) / 5 + 32;
    }
  };

  return (
    <div className={styles.weatherCard}>
      <h2>{weather.name}</h2>
      <div>Temperature: {getTemperature(weather.main.temp)}°{unit}</div>
      <div>Humidity: {weather.main.humidity}%</div>
      <div>Wind Speed: {weather.wind.speed} m/s</div>
      <button onClick={handleToggle}>Toggle Temperature Unit</button>
    </div>
  );
};

export default WeatherCard;
