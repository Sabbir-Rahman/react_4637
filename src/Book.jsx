import React from "react";

function Book(props){
    return(
        <>
        <h2>{props.title}</h2>
        <h3>{props.author}</h3>
        <img src={props.img}/>
        </>
    )
}

export default Book