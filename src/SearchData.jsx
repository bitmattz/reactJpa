import React,{ useState } from 'react';
import axios from 'axios';
import './Search.css';
import './App.css';
import Book from './Book';


function Search(){
  let [fieldValue,setValue] = useState('');
  let [responseData,updateResponse] = useState([]);

  function changeValue(event){
    setValue(event.target.value);
  }

  function fetchData(event){
    event.preventDefault();
    updateValue(fieldValue);
    setValue('');
  }

  function updateValue(data){
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${data}`)
      .then((response)=>{
        updateResponse(response.data.items);
      })
      .catch((error)=>{
        updateResponse([]);
        alert('No data found');
      })
  }

  return (
    <div className="Search-data">
      <div className="InputField">
        <form onSubmit={fetchData}>
          <input type="search" value={fieldValue} placeholder="Search a Book.." onChange={changeValue}/>
        </form>
      </div>
      <div className="book-wrapper">
        {
          responseData.length === 0 ? <h1 ></h1> :
            responseData.map((item,index)=>{
            return(
              <Book key={index}
                    Thumbnail={item.volumeInfo.imageLinks.thumbnail}
                    Title={item.volumeInfo.title}
                    Author={item.volumeInfo.authors[0]}
                    Rating={item.volumeInfo.averageRating} />)
            })
        }
      </div>
    </div>
  )
}



export default Search;
