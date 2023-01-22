import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage/MainPage';
import SignUp from './Login/SignUp';
import SignIn from './Login/SignIn';
import Program from './MainProgram/Program';
import { LoginContext } from './Contexts/LoginContext';
import { calculateContext } from './Contexts/calculateContext';


function App() {

  const [isLoggedIn, setLoggedIn] = useState(false);
  const [calculate, setCaculate] = useState({
    fAmount: 0,
    aAmount: 0,
    rAmount: 0,
    mAmount: 0,
    total: 0
  });

  useEffect(() => {
    const loginInfo = localStorage.getItem('login');
    if (loginInfo == 'true') {
      setLoggedIn(true);
    }
  }, []);

  return (
    <div>
      <LoginContext.Provider value={{ isLoggedIn, setLoggedIn }}>
        <calculateContext.Provider value={{ calculate, setCaculate }}>
          <BrowserRouter>
            <Routes>
              <Route path="/" exact element={<MainPage />} />
              <Route path="/signup" exact element={<SignUp />} />
              <Route path="/signin" exact element={<SignIn />} />
              <Route path="/mainprogram" element={<Program />} />

            </Routes>
          </BrowserRouter>
        </calculateContext.Provider>
      </LoginContext.Provider>
    </div >
  );
}

export default App;
