// components/SearchBar.js
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from './SearchBar.module.css';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    router.push(`/search?q=${query}`);
  };

  return (
    <div className="aa">
    <form className={styles.form} onSubmit={handleSearch}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter city or location"
        className={styles.input}
      />
      <button type="submit" className={styles.button}>
        Search
      </button>
    </form>
    </div>
  );
};

export default SearchBar;
