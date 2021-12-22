import React from "react";

function Book(props){
    return (
        <article className="book">
          <img src={props.img} alt="" />
          <h1>{props.title}</h1>
          <h4 >{props.author}</h4>
          <h5>vote: {props.upvote}</h5>
        </article>
      );
}

export default Book

