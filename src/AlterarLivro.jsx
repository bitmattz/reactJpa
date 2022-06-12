import React from 'react';
import './LoginAndRegister.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import axios from 'axios';



const login = JSON.parse(localStorage.getItem("@Session:login"))? JSON.parse(localStorage.getItem("@Session:login")):{};



const Alterar = (props)=>{
    async function alterar(){
        if(!login === {}){
        
        if(login !== [] || login !== undefined){
            var body = {
                "nome": document.getElementById("titulo").value,
                "descr": document.getElementById("descricao").value,
                "idUser": login.id,
                "autor": document.getElementById("autor").value,
              };
              axios.put('http://localhost:8080/book/'+props.id,body).then(function(response){
                alert("Livro alterado com sucesso!");
                console.log(response);
              }).catch(function(error){
                alert("Erro ao alterar livro! "+error);
                console.log(error)
              });
        }else{
            alert("Você precisa estar logado para alterar um livro!");
        }

        }else{
            alert("Você precisa estar logado para alterar um livro!");
        }}
  return (
    <>
      <div className="CadastroLivro">
        <h1>Altere o seu livro</h1>
        <form className="needs-validation" action='#' method="" novalidate>
            <div>
              <label className="form-label" for="titulo">Título</label>
              <input className="form-control" id="titulo" type="text" placeholder="Insira o título do livro" name="titulo" required>{props.nome}</input>
            </div>
            
            <div>
              <label className="form-label" for="autor">Autor</label>
              <input className="form-control" id="autor" type="text" placeholder="Insira o nome do autor" name="autor" required>{props.autor}</input>
            </div>

            <div>
              <label className="form-label" for="descricao">Descrição</label>
              <input className="form-control" id="descricao" type="text" placeholder="Insira a descrição do livro" name="descricao" required>{props.descr}</input>
            </div>
            
            <button className="btn btn-md btn-warning" onClick={alterar}>Alterar livro</button>

        </form>

      </div>
    </>
  )
};



export default Alterar;