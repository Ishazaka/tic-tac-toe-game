

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
wins.forEach(e =>{
if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) &&   (boxtext[e[0]].innerText !== '' )  ){
  document.querySelector(".info").innerText = boxtext[e[0]].innerText + " has won the game" 
  isgameover = true;
  document.querySelector('.img-box').getElementsByTagName('img')[0].style.width = '190px';
  audioturn.pause();
  gameover.play(); 
  document.getElementsByClassName("gameend")[0].style.display ='block';
}

})

}


// game logic

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
  let boxtext = element.querySelector('.boxtext');
  element.addEventListener('click', ()=>{
  if(boxtext.innerText === ''){
    boxtext.innerText = turn;
    turn = changeturn();
    audioturn.play();
    checkwin();
    if(!isgameover){
     document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    }
  }

  })

})

// reset button
reset.addEventListener('click', () =>{
let textboxes = document.querySelectorAll(".boxtext");
Array.from(textboxes).forEach(element =>{
  element.innerText = "";
})
turn ="X",
isgameover = false;
 document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
  document.querySelector('.img-box').getElementsByTagName('img')[0].style.width = '0';
    document.getElementsByClassName("gameend")[0].style.display ='none';
})

 
 
