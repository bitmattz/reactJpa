import axios from 'axios';
import React from 'react';
import 'starability';
import './App.css';
import Background from'./img/base.png';
import {Link } from 'react-router-dom';


const login = JSON.parse(localStorage.getItem("@Session:login"))? JSON.parse(localStorage.getItem("@Session:login")):{};
function remover(props){
  axios.delete('http://localhost:8080/book/'+ props.id).then(function(response){
    alert("Livro deletado com sucesso!");
    console.log(response);
  }).catch(function(error){
    alert("Erro ao deletar livro! "+error);
    console.log(error)
  });
}


function Book(props){
  if(login !== {} || login !== undefined){
    if(props.idUser === login.id){
      return(
        <>
          <div className="Book-container">
            <img className="image" src={Background}  alt={props.nome}/>
            <div className="other-info">
              <h1 className="title">{props.nome}</h1>
              <p>{props.autor}</p>
              <p>{props.descr}</p>
              <button class="btnRemover" id={props.id}onClick={remover}>Remover</button>
              <Link class="btnAlterar" to={'/alterar/'} 
                    nome={props.nome}
                      autor={props.autor}
                      descr={props.descr}
                      idUser={props.idUser}>Alterar</Link>
            </div>
          </div>
        </>
      )
    }
    else{
      return(
        <>
          <div className="Book-container">
            <img className="image" src={Background}  alt={props.nome}/>
            <div className="other-info">
              <h1 className="title">{props.nome}</h1>
              <p>{props.autor}</p>
              <p>{props.descr}</p>
            </div>
          </div>
        </>
      )
      }
  } else{
    return(
      <>
        <div className="Book-container">
          <img className="image" src={Background}  alt={props.nome}/>
          <div className="other-info">
            <h1 className="title">{props.nome}</h1>
            <p>{props.autor}</p>
            <p>{props.descr}</p>
          </div>
        </div>
      </>
    )
    }
  
}


export default Book;
