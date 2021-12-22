import React from 'react';
import ReactDOM from 'react-dom';
import Book from './Book'
import {books} from './books'

ReactDOM.render(
  <React.StrictMode>
    <section>
    {books.map((book) =>{
      return(
        <Book key={book.id}{...book}/>
      )
      
    })}
    </section>
  </React.StrictMode>,
  document.getElementById('root')
);



