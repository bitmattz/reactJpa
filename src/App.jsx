import React,{useState,useEffect} from 'react';
import NavBar from './NavBar';
import './App.css';
import Book from './Book';
import axios from 'axios';
import Footer from './Footer';
import Search from './SearchData';


function App()
{
  let [data,setData] = useState([]);
  useEffect(()=>{
    axios.get(`http://localhost:8080/book/`)
      .then((response)=>{
        setData(response.data);
        console.log(data);
      })
  },[]);


  return (
    <>
      <NavBar/>
      <Search/>
      <div className="Books-MainContainer">
        <div className="book-wrapper">
          { data.length === 0 ? <h1 className="blur">loading...</h1> :
            data.map((item,index)=>{
            return(
              <Book key={index}
                  id={item.id}
                    nome={item.nome}
                    autor={item.autor}
                    descr={item.descr}
                    idUser={item.idUser}/>)
            })
        }
        </div>
      </div>
      <Footer/>
    </>
  )
};

export default App;
