import React, {useState} from 'react';
import './App.css';
import AppContainer from '../AppContainer/AppContainer';
import Test from "../Test/Test";

function App() {
  return (
    <div className="App">
      <h1>Flavortown</h1>
      <h2>wee haw</h2>
      <AppContainer/>
      <Test />
    </div>
  );
}

export default App;
