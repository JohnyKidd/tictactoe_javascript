//main functions
function CreateField(){
  for (let i = 0; i < 9; i++){
    const field = document.createElement("div")
    field.id="field"+i.toString();
    field.className="field";
    map.appendChild(field);
  }
}

function newGame(){
  player=1;
  moveCount=0;
  for (let i=0;i<9;i++){
    playArea[i].innerHTML="";
    playArea[i].style["pointer-events"]="auto";
  }
  communicatePlayer.innerHTML="Player 1 (X)";
}

//global variables and DOM elements
let player = 1;
let maxMove = 9;
let moveCount = 0;
const communicatePlayer = document.querySelector("#description");

//declare the parent of the playfield
const map=document.querySelector("#mapParent");

//make the playfield
CreateField();

//add the mouse events and style attributes to the playfield
const playArea = document.querySelectorAll(".field");

//hover event and style
for (let i=0;i<9;i++){
  playArea[i].style["color"]="#0dff00";
  playArea[i].style["font-size"]="5em";
  playArea[i].style["text-align"]="center";
  playArea[i].style["font-family"]="tiquetregular";

  playArea[i].addEventListener("mouseover",function(e){
    playArea[i].style["background-color"]="#000";
  });

//unhover
  playArea[i].addEventListener("mouseout",function(e){
    playArea[i].style["background-color"]="#03A062";
  });

  //click and player selection
  playArea[i].addEventListener("click",function(e){
    if (player==1){
      moveCount+=1;
      if (moveCount>=maxMove){alert("DRAW!");newGame();}else{
      playArea[i].innerHTML="X";
      player=2;
      communicatePlayer.innerHTML="Player 2 (O)";
      playArea[i].style["pointer-events"]="none";
    }}
    else{
      moveCount+=1;
      if (moveCount>=maxMove){alert("DRAW!");newGame();}else{
      playArea[i].innerHTML="O";
      player=1;
      communicatePlayer.innerHTML="Player 1 (X)";
      playArea[i].style["pointer-events"]="none";
    }}

    //logic for winning conditions
    if (playArea[0].innerHTML=="X" && playArea[1].innerHTML=="X" && playArea[2].innerHTML=="X"){
      alert("Player 1 (X) is the winner!");
      newGame();
    }
    else if (playArea[0].innerHTML=="O" && playArea[1].innerHTML=="O" && playArea[2].innerHTML=="O"){
      alert("Player 2 (O) is the winner!");
      newGame();
    }
    else if (playArea[3].innerHTML=="X" && playArea[4].innerHTML=="X" && playArea[5].innerHTML=="X"){
      alert("Player 1 (X) is the winner!");
      newGame();
    }
    else if (playArea[3].innerHTML=="O" && playArea[4].innerHTML=="O" && playArea[5].innerHTML=="O"){
      alert("Player 2 (O) is the winner!");
      newGame();
    }
    else if (playArea[6].innerHTML=="X" && playArea[7].innerHTML=="X" && playArea[8].innerHTML=="X"){
      alert("Player 1 (X) is the winner!");
      newGame();
    }
    else if (playArea[6].innerHTML=="O" && playArea[7].innerHTML=="O" && playArea[8].innerHTML=="O"){
      alert("Player 2 (O) is the winner!");
      newGame();
    }
    else if (playArea[0].innerHTML=="X" && playArea[3].innerHTML=="X" && playArea[6].innerHTML=="X"){
      alert("Player 1 (X) is the winner!");
      newGame();
    }
    else if (playArea[0].innerHTML=="O" && playArea[3].innerHTML=="O" && playArea[6].innerHTML=="O"){
      alert("Player 2 (O) is the winner!");
      newGame();
    }
    else if (playArea[1].innerHTML=="X" && playArea[4].innerHTML=="X" && playArea[7].innerHTML=="X"){
      alert("Player 1 (X) is the winner!");
      newGame();
    }
    else if (playArea[1].innerHTML=="O" && playArea[4].innerHTML=="O" && playArea[7].innerHTML=="O"){
      alert("Player 2 (O) is the winner!");
      newGame();
    }
    else if (playArea[2].innerHTML=="X" && playArea[5].innerHTML=="X" && playArea[8].innerHTML=="X"){
      alert("Player 1 (X) is the winner!");
      newGame();
    }
    else if (playArea[2].innerHTML=="O" && playArea[5].innerHTML=="O" && playArea[8].innerHTML=="O"){
      alert("Player 2 (O) is the winner!");
      newGame();
    }
    else if (playArea[0].innerHTML=="X" && playArea[4].innerHTML=="X" && playArea[8].innerHTML=="X"){
      alert("Player 1 (X) is the winner!");
      newGame();
    }
    else if (playArea[0].innerHTML=="O" && playArea[4].innerHTML=="O" && playArea[8].innerHTML=="O"){
      alert("Player 2 (O) is the winner!");
      newGame();
    }
    else if (playArea[2].innerHTML=="X" && playArea[4].innerHTML=="X" && playArea[6].innerHTML=="X"){
      alert("Player 1 (X) is the winner!");
      newGame();
    }
    else if (playArea[2].innerHTML=="O" && playArea[4].innerHTML=="O" && playArea[6].innerHTML=="O"){
      alert("Player 2 (O) is the winner!");
      newGame();
    }
  });
}//end of event handler loop
