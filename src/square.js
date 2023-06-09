import React from 'react';


export default function Square(props){
     
    function handleSquare(){
        props.parentsquareclick()
    }


     return <button className = "square" onClick={handleSquare}> {props.value} </button> ;

}

