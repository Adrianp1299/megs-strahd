import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import CharacterList from './components/characterList';
import characterArray from './arrays/characterArray';
import Map from './components/map';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path ="/" element={ <Map/> } />
      <Route path ="characterList" element={ <CharacterList  info={characterArray} /> } />
      </Routes>
    </div>
  );
}

export default App;
