import React from 'react';
import favoritemoviecover1 from './black-mirror-cover.jpg';
import favoritemoviecover2 from './breaking_bad_poster.jpg';
import favoritemoviecover3 from './death_note_cover.jpeg';
import favoritemoviecover4 from './game_of_thrones.jpeg';
import favoritemoviecover5 from './the_wire_cover.jpeg';
import favoritemoviecover6 from './walking_dead_cover.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <br></br>
        <div className='container'>
          <div className='item' style={{flex: 1}}><h1><img src={favoritemoviecover1} className="App-logo" alt="cover" /></h1></div>
          <div className='item' style={{flex: 1}}><h1><img src={favoritemoviecover2} className="App-logo" alt="cover" /></h1></div>
          <div className='item' style={{flex: 1}}><h1><img src={favoritemoviecover3} className="App-logo" alt="cover" /></h1></div>
        </div>
        <div className='container'>  
          <div className='item' style={{flex: 1}}><h1><img src={favoritemoviecover4} className="App-logo" alt="cover" /></h1></div>
          <div className='item' style={{flex: 1}}><h1><img src={favoritemoviecover5} className="App-logo" alt="cover" /></h1></div>
          <div className='item' style={{flex: 1}}><h1><img src={favoritemoviecover6} className="App-logo" alt="cover" /></h1></div>
        </div>

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
