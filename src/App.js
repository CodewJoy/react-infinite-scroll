import React, { useState } from 'react';
import Topbar from './compoents/Topbar';
import Main from './compoents/Main';
import './App.scss'

function App() {
  return (
    <div className="app">
      <Topbar />
      <Main />
    </div>
  );
}

export default App;
