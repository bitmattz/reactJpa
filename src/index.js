import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Routes,Route } from 'react-router-dom';
import App from './App'
import Login from './Login';
import Register from './Register'




ReactDOM.render(
  <BrowserRouter>
    <Routes >
      <Route exact path='/' element={<App />}/>
      <Route exact path="/Login" element={<Login/>} />
      <Route exact path="/Register" element={ <Register/> }/>
    </Routes >
  </BrowserRouter>
  ,
  document.getElementById('root'));
