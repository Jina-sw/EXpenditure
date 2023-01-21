import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage/MainPage';
import SignUp from './Login/SignUp';
import SignIn from './Login/SignIn';
import Program from './MainProgram/Program';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<MainPage />} />
          <Route path="/signup" exact element={<SignUp/>} />
          <Route path="/signin" exact element={<SignIn/>} />
          <Route path="/mainprogram" element={<Program/>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
