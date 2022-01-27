

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
  [1,2,3],
  [2,3,4],
  [5,6,7],
  [6,7,8],
  [7,8,9],
   [10,11,12],
  [11,12,13],
   [12,13,14],
  [15,16,17],
  [16,17,18],
  [17,18,19],
  
[0,5,10],
  [5,10,15],
[1,6,11],
[6,11,16],
[2,7,12],
[7,12,17],
[3,8,13],
[8,13,18],
[4,9,14],
[9,14,19],
[0,6,12],
[6,12,18],
[5,11,17],
[1,7,13],
[7,13,19],
[2,4,14],
[2,6,10],
[3,7,11],
[7,11,15],
[4,8,12],
[8,12,16],
[9,13,17],

 ]
