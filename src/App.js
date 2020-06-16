import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchMovies from './SearchMovies';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>ZFlix</h1>
      </header>
      <div className="container">
        <h1 className="title">Search your movie</h1>
        <SearchMovies />
      </div>
    </div>
  );
}

export default App;