import React from 'react';
import 'starability';
import './App.css';


function Book(props){
  return(
    <>
      <div className="Book-container">
        <img className="image" src={props.Thumbnail} alt={props.Title}/>
        <div className="other-info">
          <p>{props.Author}</p>
          <h6 className="starability-result" data-rating={Math.floor(props.Rating) || 1}>
            Rated: 3 stars
          </h6>
        </div>
      </div>
    </>
  )
}


export default Book;
