import React from 'react';
import Board from "./board";
import {useState} from 'react'

export default function Game(){ 
  const[currmove,setCurrmove] = useState(0);
  const turn = currmove%2 === 0; 
  const[history,setHistory] = useState([Array(9).fill(null)])
  const lastmove = history[currmove]

  function handleGame(nextSquares)
  {
    const nextHis = [...history.slice(0,currmove+1),nextSquares];

    setHistory(nextHis)
    setCurrmove(currmove + 1)
  }

  function jumpto(nmove){
    setCurrmove(nmove)

  }

  const moves = history.map((squares,move)=>{
    let des;
    if(move>0){
      des = "Go to move #" + move;
    }
    else{
      des = "Go to start";
    }
    return(<li key = {move}>
      <button className='sidebut' onClick={() => jumpto(move)}> {des} </button>
      </li>
    )
  })


  return (
    <div className="game">
      <div className="game-board">
        <Board  xturn = {turn} squares = {lastmove} onGame = {handleGame} />
      </div>
      <div className='game-info'>
        <ol>{moves}</ol>
      </div>
    </div>
  )
}