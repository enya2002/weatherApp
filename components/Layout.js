// components/Layout.js
import React from 'react';
import styles from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Weather App</h1>
      </header>
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default Layout;
