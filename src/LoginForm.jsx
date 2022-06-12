import React, {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import './LoginAndRegister.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import axios from 'axios';


const LoginForm = ()=>{
  
  const [login, setLogin] = useState(() => {
    const login = JSON.parse(localStorage.getItem("@Session:login"))? JSON.parse(localStorage.getItem("@Session:login")): {};

    
});
useEffect(()=> {
  localStorage.setItem('@Session:login',JSON.stringify(login));
});
  async function logar(){
    if(!login === {} || login === undefined){
      var body = {
        "email": document.getElementById("Email").value? document.getElementById("Email").value: "",
        "senha": document.getElementById("Password").value? document.getElementById("Password").value: "",
      };
      if(body.email !== "" && body.senha !== ""){
      axios.post('http://localhost:8080/user/login/',body).then(function(response){
        alert("Logado com sucesso!");
        setLogin(response.data);
        
        
      }).else(function(error){
        alert("Email ou senha inválidos! "+error);
        console.log(error)
      });}else{
        alert("Preencha todos os campos!");
      }
    }else{
      localStorage.removeItem("@Session:login");
      var body = {
        "email": document.getElementById("Email").value? document.getElementById("Email").value: "",
        "senha": document.getElementById("Password").value? document.getElementById("Password").value: "",
      };
      if(body.email !== "" && body.senha !== ""){
      axios.post('http://localhost:8080/user/login/',body).then(function(response){
        alert("Logado com sucesso!");
        setLogin(response.data);
        
        
      }).else(function(error){
        alert("Email ou senha inválidos! "+error);
        console.log(error)
      });}else{
        alert("Preencha todos os campos!");
      }
    }
   
  }
  return (
    <>
      <div className="Login-container">
        <h1>Login to Knowledge Pool</h1>
        <form className="needs-validation" action='#' method="" novalidate>
            <div>
              <label className="form-label" for="email">Email</label>
              <input className="form-control" id="Email" type="text" placeholder="Enter your email" name="email" required></input>
            </div>

            <div>
              <label className="form-label" for="Password">Password</label>
              <input className="form-control" id="Password" type="password" placeholder="Enter your Password" name="Password" required></input>
            </div>
            <button className="btn btn-md btn-warning" onClick={logar}>Login</button>

        </form>
        <Link exact to="/Register" activeClassName="active">Dont have an account yet?..Register now..</Link>
      </div>
    </>
  )
};


export default LoginForm;
