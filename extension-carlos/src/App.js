import React from 'react';
import './App.css';
import Location from './components/geolocate'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Location />
      </header>
    </div>
  );
}

export default App;
