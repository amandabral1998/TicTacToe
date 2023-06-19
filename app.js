const reset = document.getElementById("reset");

let boxes = document.querySelectorAll(".box");

let turn = document.querySelector(".turn");

let gameOver = false;


const X_TURN = "X";
const O_TURN = "O";

let currentPlayer = X_TURN;

let spaces = Array(9).fill(null);

const changeTurn = () => {
  if (currentPlayer == X_TURN) {
    return O_TURN;
  } else {
    return X_TURN;
  }
};

const wins = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [2, 5, 8],
  [1, 4, 7],
  [0, 3, 6],
  [0, 4, 8],
  [2, 4, 6],
];
//  input logic

boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    const id = e.target.id;
    if (spaces[id]===null) {
      spaces[id] = currentPlayer;
      e.target.innerHTML = currentPlayer;
      currentPlayer = changeTurn();
     winning()
     if(gameOver!=true) {
      turn.innerHTML = "Turn of " + " " + currentPlayer;
     }
    }
  });
});

// reset buttom

reset.addEventListener("click", (box) => {
  spaces.fill(null);

  boxes.forEach((box) => {
    box.innerHTML = "";
  });

  turn.innerHTML = "Turn of " + " " + X_TURN;
});


const winning = ()=>{
  wins.forEach((e)=>{
    let a= e[0]
    let b=e[1]
   let c=e[2]

   if(spaces[a]===spaces[b]&& spaces[b]==spaces[c] && spaces[a]) {
gameOver= true;
  turn.innerHTML= spaces[a] + " "+ " has Won"
   }

  })
}