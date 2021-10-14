//declare the parent of the playfield
const map=document.querySelector("#mapParent");

//make the playfield
for (let i = 0; i < 9; i++){
  const field = document.createElement("div")
  field.id="field"+i.toString();
  field.className="field";
  map.appendChild(field);
}

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

  //click
  playArea[i].addEventListener("click",function(e){
    playArea[i].innerHTML="X";
  });
}//end of event adder loop
