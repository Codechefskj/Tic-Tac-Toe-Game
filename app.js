let boxes = document.querySelectorAll(".box");
let reset_button = document.querySelector("#reset_button");
let msgcontainer = document.querySelector(".box_container");
let msz = document.querySelector("#msg");
let newgame= document.querySelector("#new_button");
let maincontainer = document.querySelector(".maincontainer");
let turnO = true ;

const winning=[
[0,1,2] ,
[0,3,6] ,
[0,4,8] ,
[1,4,7] ,
[2,5,8] ,
[2,4,6] ,
[3,4,5] ,
[6,7,8] ,
]

boxes.forEach((box)=>{
box.addEventListener("click" , ()=>{
if(turnO){
box.innerText= "O";
turnO=false;
}else{
box.innerText="X";
turnO=true;
} box.disabled=true;
checkwinner();
})
})

const resetbutton=()=>{
turnO = true ;
msgcontainer.style.display="none";
enabledboxes();
}

let enabledboxes =()=>{
for(let box of boxes){
box.disabled=false;
box.innerText="";
}
}

let disabledboxes =()=>{
for(let box of boxes){
box.disabled=true;
}
}

let showwinner = (winner)=>{
msz.innerText = `Congratulations! The winner is ${winner}.`;
disabledboxes();
anime({
targets: maincontainer,
filter : "blur(4px)",
duration : 500
});

msgcontainer.style.display="block";

anime({
targets: msgcontainer ,
opacity: [0,1],
translateY: [0,"+50vh"],
duration: 300,
delay: 100 ,
easing: "easeInQuad",
}); }

let checkwinner=()=>{
for(i of winning){
let firstpostion = boxes[i[0]].innerText
let secondposition = boxes[i[1]].innerText
let thirdposition = boxes[i[2]].innerText;
if(firstpostion != "" , secondposition != "" , thirdposition != ""){
if(firstpostion===secondposition && secondposition===thirdposition){
console.log("winner", firstpostion);
showwinner(firstpostion);
}
}
}
}

newgame.addEventListener("click",resetbutton);
reset_button.addEventListener("click",resetbutton);