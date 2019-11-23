import React, {useState, useEffect} from 'react';
import './AppContainer.css';
import AppHeader from "../AppHeader/AppHeader";

function AppContainer() {
  return (
    <div styleName="container">
      <AppHeader/>
    </div>
  );
}

export default AppContainer;