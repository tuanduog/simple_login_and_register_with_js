import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home/Home';
import Login from './Login/Login';
import Register from './Register/Register';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="Login" element={<Login/>}></Route>
          <Route path="Register" element={<Register/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;