import React from 'react';
import favoritemoviecover from './blood-diamond-2.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={favoritemoviecover} className="App-logo" alt="cover" />
        <p>
          Welcome to Kodflix!!!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
    </div>
  );
}

export default App;
