import React, {useState, useEffect} from 'react';
import './AppContainer.css';
import AppHeader from "../AppHeader/AppHeader";
import Background from "../Background/Background";

function AppContainer() {
  return (
    <div className="container">
      <AppHeader/>
      <Background />
    </div>
  );
}

export default AppContainer;