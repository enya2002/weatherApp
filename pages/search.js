// pages/search.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Search = ({ query }) => {
  const [forecastData, setForecastData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchForecastData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${query}&appid=39845e845f397c903699e046a2b1626b&units=metric`
        );
        // Filter the forecast data to get the weather for the next 5 days
        const nextFiveDaysData = response.data.list.filter((forecast, index) => index % 8 === 0);
        setForecastData(nextFiveDaysData);
        setError(null);
      } catch (error) {
        setError('Unable to fetch weather forecast data. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    if (query) {
      fetchForecastData();
    }
  }, [query]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Weather Forecast for {query}</h1>
      {forecastData.map((forecast, index) => (
        <div key={index}>
          <h2>{forecast.dt_txt}</h2>
          <div>Temperature: {forecast.main.temp}°C</div>
          <div>Humidity: {forecast.main.humidity}%</div>
          <div>Wind Speed: {forecast.wind.speed} m/s</div>
          <div>Description: {forecast.weather[0].description}</div>
        </div>
      ))}
    </div>
  );
};

export default Search;

export async function getServerSideProps({ query }) {
  return {
    props: {
      query: query.q || '',
    },
  };
}
