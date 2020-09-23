import './App.css';
import { Global } from './Global';
import Header from './components/Header';
import React from 'react';

const App = () => {
  return (
    <div className="App">
      <Global />

      <Header />
    </div>
  );
};

export default App;
