let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetbtn");
let newgamebtn = document.querySelector("#newgamebtn");
let msgbox = document.querySelector(".msgbox");
let msg = document.querySelector("#msg");

let turno = true;

const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetgame = () => {
    turno = true;
    enablebox();
    msgbox.classList.add("hide")

};

boxes.forEach((box)=>{
   
    box.addEventListener("click",()=>{
       if(turno===true){
        box.innerText="O";
        turno=false;
       }else{
        box.innerText="X";
        turno=true;
       }
       box.disabled=true;

       checkwinner();
       });
});

const disablebox= ()=>{
    for(box of boxes){
        box.disabled=true;
    }
};


const enablebox= ()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerText = "";
    }
};

const showwinner =(winner)=>{
    msg.innerText= `Congratulation, Winner is ${winner}`;
    msgbox.classList.remove("hide");
    disablebox();
};

const checkwinner=()=>{
    for (let pattern of winpatterns){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val !="" && pos2val !="" && pos3val !=""){
            if(pos1val === pos2val && pos2val===pos3val){
                showwinner(pos1val);
            }
        }
    }
  
};

newgamebtn.addEventListener("click",resetgame);
resetBtn.addEventListener("click",resetgame);