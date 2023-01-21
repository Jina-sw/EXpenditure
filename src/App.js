import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Main'
import Navi from './Navi'

function App() {
  return (
    <div>
      <Navi/>
      <Main/>
    </div>
  );
}

export default App;
