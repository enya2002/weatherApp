// pages/details.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './details.module.css';
import TemperatureToggle from '../components/TemperatureToggle';

const Details = ({ query }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [unit, setUnit] = useState('C');

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${query}&appid=39845e845f397c903699e046a2b1626b&units=${unit}`
        );
        setWeatherData(response.data);
        setError(null);
      } catch (error) {
        setError('Unable to fetch weather data. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    if (query) {
      fetchWeatherData();
    }
  }, [query, unit]);

  const toggleUnit = (newUnit) => {
    setUnit(newUnit);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!weatherData) {
    return null;
  }

  return (
    <div>
      <h1>Weather Details for {weatherData.city.name}</h1>
      <TemperatureToggle unit={unit} onToggle={toggleUnit} />
      <div className={styles.forecastList}>
        {weatherData.list.map((forecast, index) => (
          <div className={styles.forecastItem} key={index}>
            <h2>{forecast.dt_txt}</h2>
            <div>Temperature: {forecast.main.temp}°{unit === 'C' ? 'C' : 'F'}</div>
            <div>Humidity: {forecast.main.humidity}%</div>
            <div>Wind Speed: {forecast.wind.speed} m/s</div>
            <div>Description: {forecast.weather[0].description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Details;

export async function getServerSideProps({ query }) {
  return {
    props: {
      query: query.q || '',
    },
  };
}
