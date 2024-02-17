// pages/index.js
import React from 'react';
import Layout from '../components/Layout';
import SearchBar from '../components/SearchBar';

const Home = () => {
  return (
    <Layout>
      <h1>Welcome to the Weather App</h1>
      <SearchBar />
    </Layout>
  );
};

export default Home;
