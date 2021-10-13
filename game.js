//declare the parent of the playfield
const map=document.querySelector("#mapParent");

//make the playfield
for (let i = 0; i < 9; i++){
  const field = document.createElement("div")
  field.id="field"+i.toString();
  field.className="field";
  map.appendChild(field);
}

//add the mouse events to the playfield
const playArea = document.querySelectorAll(".field");

//hover
for (let i=0;i<9;i++){
  playArea[i].addEventListener("mouseover",function(e){
    playArea[i].style["background-color"]="#000";
  });

//unhover
  playArea[i].addEventListener("mouseout",function(e){
    playArea[i].style["background-color"]="#03A062";
  });
}
