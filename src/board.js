import Square from "./square";
function Board({xturn,squares,onGame}) {
  
  const arr = [[null,null,null],[null,null,null],[null,null,null]]
  function filup(squares,arr){
    let c = 0;
    for(let i = 0;i<3;i++){
        for(let j = 0; j<3; j++){
            arr[i][j] = squares[c]
            c++;

        }
    }

  }
  


  function calculateWinner(arr){
    let flag = 1;
    for(let i = 0; i<3; i++){
      flag = 1;
      for(let j = 1; j<3 ; j++){

        if(arr[i][j] === null || arr[i][j] !== arr[i][j-1]){
            flag = 0;
            break;
        }
    }
        if(flag)break
      
    }
    
    if(flag) return true
    flag = 1;
    for(let j = 0; j<3; j++){
      flag = 1
      for(let i = 1; i<3 ; i++){
        if(arr[i][j] === null || arr[i][j] !== arr[i-1][j]){
          flag = 0
          break;
        }
      }
      if(flag)break
    }
    if(flag) return true
    flag = 1;
    let i = 1;    
    let j = 1;
    while(i<3 && j<3)
    {
      if(arr[i][j] === null || arr[i][j] !== arr[i-1][j-1])
      {
        flag = 0;
        break;
      }
      i++;
      j++;
    }
    if(flag)return true
    flag = 1;
    i = 1;
    j = 1;
    while(i<3 && j>=0){
      if(arr[i][j] === null || arr[i][j]  !== arr[i-1][j+1] ){
        flag = 0;
        break;

      }
      i++;
      j--;
    

    }
    
    if(flag) return true
    else{
    return false
    }
    

  }
    filup(squares,arr)

  function handleparent(i){
    if(squares[i] || calculateWinner(arr))
      return ;
    if(xturn){
    const nextSquares = [...squares];
    nextSquares[i] = 'X';
    onGame(nextSquares)

    }
    else{
    const nextSquares = [...squares];
    nextSquares[i] = 'O';
    onGame(nextSquares)

    }

  }
  const winner = calculateWinner(arr);
  let status;
  if(winner){
    status = "WINNER   : "  +  (xturn ? "O" :" X")
  }
else{
    status = "Next Turn  : "  +  (xturn ? "X" : "O")
    }
  return(
  <>
    <div className="status"> {status} </div>
    <div className="k">  TIC TAC TOE  </div>
    <div className="board-row">
   <Square value = {squares[0]}   parentsquareclick = {() => handleparent(0)}/>
   <Square value = {squares[1]}   parentsquareclick = {() => handleparent(1)}   />
   <Square value = {squares[2]}   parentsquareclick = {() => handleparent(2)}/>
   </div>
   <div className= "board-row">
    <Square  value = {squares[3]}  parentsquareclick = {() => handleparent(3)}/>
     <Square  value = {squares[4]} parentsquareclick = {() => handleparent(4)}/>
    <Square  value = {squares[5] } parentsquareclick = {() => handleparent(5)}/>
   </div>
   <div className="board-row">
   <Square  value = {squares[6]}   parentsquareclick = {() => handleparent(6)} />
     <Square  value = {squares[7]} parentsquareclick = {() => handleparent(7)}/>
   <Square  value = {squares[8]}   parentsquareclick = {() => handleparent(8)} />
   </div>

  </>
  );
}

export default Board;
