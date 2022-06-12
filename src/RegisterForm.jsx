import React from 'react';
import './LoginAndRegister.css';
import {Link} from 'react-router-dom';
import axios from 'axios';



const RegisterForm = ()=>{
  async function registrar(){
    var body = {
      "nome": document.getElementById("username").value,
      "idade": document.getElementById("Idade").value,
      "telefone": document.getElementById("Telefone").value,
      "cidade": document.getElementById("Cidade").value,
      "email": document.getElementById("Email").value,
      "senha": document.getElementById("Password").value
    };
    axios.post('http://localhost:8080/user/',body).then(function(response){
      alert("Usuário cadastrado com sucesso!");
      console.log(response);
    }).catch(function(error){
      alert("Erro ao cadastrar usuário! "+error);
      console.log(error)
    });
  }
  return (
    <>
      <div className="Login-container">
        <h1>Faça o registro</h1>
        <form className="needs-validation" action='#' method="" novalidate>
            <div>
              <label className="form-label" for="username">Nome</label>
              <input className="form-control" id="username" type="text" placeholder="Insira o seu nome" name="username" required></input>
            </div>
            
            <div>
              <label className="form-label" for="Idade">Idade</label>
              <input className="form-control" id="Idade" type="number" placeholder="Insira a sua idade" name="Idade" required></input>
            </div>

            <div>
              <label className="form-label" for="Telefone">Telefone</label>
              <input className="form-control" id="Telefone" type="text" placeholder="Insira o seu telefone" name="Telefone" required></input>
            </div>

            <div>
              <label className="form-label" for="Cidade">Cidade</label>
              <input className="form-control" id="Cidade" type="text" placeholder="Insira a sua cidade" name="Cidade" required></input>
            </div>

            <div>
              <label className="form-label" for="Email">Email</label>
              <input className="form-control" id="Email" type="email" placeholder="Insira o seu email" name="Email" required></input>
            </div>

            <div>
              <label className="form-label" for="Password">Senha</label>
              <input className="form-control" id="Password" type="password" placeholder="Insira a sua senha" name="Password" required></input>
            </div>

            <button className="btn btn-md btn-warning" onClick={registrar}>Registrar</button>

        </form>
        <Link activeClassName="active" exact to="/Login">Já tem uma conta? Faça o login.</Link>
      </div>
    </>
  )
};



export default RegisterForm;