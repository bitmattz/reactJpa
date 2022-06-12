import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import CadastroLivro from './CadastroLivro';
import './LoginAndRegister.css';



const Cadastro = () =>{
  return (
    <div className="Body">
      <NavBar />
      <CadastroLivro/>
      <Footer/>
    </div>
  )
}


export default Cadastro;