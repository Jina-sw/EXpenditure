import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage/MainPage';
import SignUp from './Login/SignUp';
import SignIn from './Login/SignIn';
import Program from './MainProgram/Program';
import { LoginContext } from './Contexts/LoginContext';


function App() {

  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const loginInfo = localStorage.getItem('login');
    if (loginInfo == 'true') {
      setLoggedIn(true);
    }
  }, []);

  return (
    <div>
      <LoginContext.Provider value={{ isLoggedIn, setLoggedIn }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<MainPage />} />
            <Route path="/signup" exact element={<SignUp />} />
            <Route path="/signin" exact element={<SignIn />} />
            <Route path="/mainprogram" element={<Program />} />

          </Routes>
        </BrowserRouter>
      </LoginContext.Provider>
    </div >
  );
}

export default App;
