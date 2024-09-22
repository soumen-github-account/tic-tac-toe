let allBox = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let msg = document.querySelector("#msg");
let newbtn = document.querySelector("#new-btn");
let msgHide = document.querySelector(".msg-hide");

let score = document.querySelector(".scoreboard");
let challangebtn = document.querySelector(".challange");
let offbtn = document.querySelector(".off");
let playerX = document.querySelector("#playerX");
let playerO = document.querySelector("#playerO");



let turnO = true; 
let count = 0; 
const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const reset = () => {
  turnO = true;
  count = 0;
  enableBoxes();
  msgHide.classList.add("hide");
};

allBox.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      //playerO
      box.innerText = "O";
      turnO = false;
    } else {
      //playerX
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    count++;

    let winnerIs = check();

      if(!s){
        if (count === 9 && !winnerIs) {
         reset();
        }
      }
    if (count === 9 && !winnerIs) {
      gameDraw();
    }
  });
});

let s=true;
challangebtn.addEventListener("click",()=>{
  s=false;
  score.classList.remove("shide");
  offbtn.classList.remove("ohide");
});

offbtn.addEventListener("click",()=>{
  s=true;
  score.classList.add("shide");
  offbtn.classList.add("ohide");
  playerXscore=0;
  playerOscore=0;
  playerX.textContent=playerXscore;
  playerX.textContent=playerXscore;
  playerO.textContent = playerOscore;
  reset();
})





const gameDraw = () => {
  msg.innerText = `Game was a Draw.`;
  msgHide.classList.remove("hide");
  msgHide.classList.remove("img");
  disableBoxes();
};

const disableBoxes = () => {
  for (let box of allBox) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of allBox) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msgHide.classList.remove("hide");
  msgHide.classList.add("img");
  disableBoxes();
};

const check = () => {
  for (let pattern of winPatterns) {
    let pos1 = allBox[pattern[0]].innerText;
    let pos2 = allBox[pattern[1]].innerText;
    let pos3 = allBox[pattern[2]].innerText;

    if (pos1!= "" && pos2!= "" && pos3!= "") {
      if (pos1 === pos2 && pos2 === pos3) {
        if(s){
          showWinner(pos1); 
        }
        else{
         
          updatescore(pos1);
        }
        return true;
      }
    }
  }
};

newbtn.addEventListener("click", reset);
resetBtn.addEventListener("click", reset);

let playerXscore=0;
let playerOscore=0;

function updatescore(winner){
  if(winner==='X'){
    playerXscore++;
    playerX.textContent=playerXscore;
    reset();
  }
  else if(winner==='O')
    {
    playerOscore++;
    playerO.textContent=playerOscore;
    reset();
  }
};