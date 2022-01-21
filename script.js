

console.log("hello this")
let audioturn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3")

let turn = "X";
let isgameover = false;

// function to change turn

const changeturn = () =>{
 return turn ==="X" ? "O": "X"

}


// function to check win
const checkwin = ()=>{
  let boxtext = document.getElementsByClassName("boxtext");
 let wins = [
  [0,1,2],
  [4,3,5],
   [6,7,8],
  [0,3,6],
   [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6],
  
 ]
