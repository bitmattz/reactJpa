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
  let [genre,setGenre] = useState('sci-fi');
  useEffect(()=>{
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${genre}`)
      .then((response)=>{
        setData(response.data.items);
      })
  },[genre]);

  function changeGenre(event){
      setData([]);
      setGenre(event.target.value);
  }

  return (
    <>
      <NavBar/>
      <Search/>
      <div className="Books-MainContainer">
      <div className="select-container">
        <select onChange={changeGenre}>
          <option value="Comedy">Comedy</option>
          <option value="Horror">Horror</option>
          <option value="sci-fi" selected>Sci-fi</option>
          <option value="Startup">Startup</option>
          <option value="Finace">Finace</option>
          <option value="Devotion">Devotion</option>
          <option value="Programming">Programming</option>
        </select>
      </div>
        <div className="book-wrapper">
          { data.length === 0 ? <h1 className="blur">loading...</h1> :
            data.map((item,index)=>{
            return(
              <Book key={index}
                    selfLink={item.selfLink}
                    Thumbnail={item.volumeInfo.imageLinks.thumbnail}
                    Title={item.volumeInfo.title}
                    Author={item.volumeInfo.authors[0]}
                    Rating={item.volumeInfo.averageRating} />)
            })
        }
        </div>
      </div>
      <Footer/>
    </>
  )
};

export default App;
