import React from 'react';
import favoritemoviecover from './blood-diamond-2.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={favoritemoviecover} className="App-logo" alt="cover" />
        <br></br>
        <div className='container'>
          <div className='item' style={{flex: 1}}><h1>Black Mirror</h1></div>
          <div className='item' style={{flex: 1}}><h1>Breaking Bad</h1></div>
          <div className='item' style={{flex: 1}}><h1>Death Note</h1></div>
        </div>
        <div className='container'>  
          <div className='item' style={{flex: 1}}><h1>Game of Thrones</h1></div>
          <div className='item' style={{flex: 1}}><h1>The Walking Dead</h1></div>
          <div className='item' style={{flex: 1}}><h1>The Wire</h1></div>
        </div>
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
