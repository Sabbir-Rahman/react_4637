import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Book from './lab1/Book'
import {books} from './lab1/books'
import "./lab1/book.css";

function compare( a, b ) {
  if ( a.upvote > b.upvote ){
    return -1;
  }
  if ( a.upvote < b.upvote ){
    return 1;
  }
  return 0;
}





function Booklist() {
  const [booklist,setBooklist] = useState(books.sort(compare))
  console.log(booklist)



  const updateVote = (id) => {
    var updatedBooks = booklist.map((book) => book.id === id ? {
      ...book,
      upvote: book.upvote +1
    } : book);

    var updatedBooksSort = updatedBooks.sort(compare)


    setBooklist(updatedBooksSort)
  
  }
  return (
    <section className="booklist">
      
      {booklist.map((book) => {
        
        return (
          <>
          <Book key={book.id} {...book}></Book>
          
          </>
        
        
        );
      })}
    </section>
  );
}


ReactDOM.render(<Booklist />, document.getElementById("root"));



