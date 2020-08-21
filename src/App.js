import React from 'react';
import Items from './components/Items';
import styles from './App.module.css'

function App() {
  return (
    <>
      <h2 className={styles.header}>
        My Recipe App
      </h2>
      <Items />
    </>
  );
}

export default App;
