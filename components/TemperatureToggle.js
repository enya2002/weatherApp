// components/TemperatureToggle.js
import React from 'react';
import styles from './TemperatureToggle.module.css';

const TemperatureToggle = ({ unit, onToggle }) => {
  const handleClick = () => {
    const newUnit = unit === 'C' ? 'F' : 'C';
    onToggle(newUnit);
  };

  return (
    <button className={styles.button} onClick={handleClick}>
      Switch to {unit === 'C' ? 'Fahrenheit' : 'Celsius'}
    </button>
  );
};

export default TemperatureToggle;
