import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Routes,Route } from 'react-router-dom';
import App from './App'
import Login from './Login';
import Register from './Register';
import Cadastro from './Cadastro';
import Alterar from './Alterar';





ReactDOM.render(
  <BrowserRouter>
    <Routes >
      <Route exact path='/' element={<App />}/>
      <Route exact path="/Cadastro" element={ <Cadastro/> }/>
      <Route exact path="/Login" element={<Login/>} />
      <Route exact path="/Register" element={ <Register/> }/>
      <Route path="/Alterar" element={ <Alterar/> }/>
    </Routes >
  </BrowserRouter>
  ,
  document.getElementById('root'));
