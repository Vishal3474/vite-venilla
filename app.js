let nameFirst = "Player A";
let nameSecond = "Player B";
let count = 0;
let turn = document.getElementById("turn");
turn.innerHTML = `<h1>${nameFirst} turn</h1>`;
let winFirst = document.getElementById("winFirst");

let winSecond = document.getElementById("winSecond");
let draw = document.getElementById("draw");
winFirst.innerHTML = 0;
winSecond.innerHTML = 0;
draw.innerHTML = 0;
let round = document.getElementById("round");
round.innerHTML = 1;

function ticTacToe() {
  const button = event.target;
  count++;
  let result = document.getElementById("result");
  result.innerHTML = [];
  turn.innerHTML = `<h2>${nameSecond} turn</h2>`;
  button.disabled = true;
  let symbol;
  let player = "Player A";
  if (count % 2) {
    symbol = "X";
    button.innerHTML = symbol;
  } else {
    symbol = "O";
    player = "Player B";
    button.innerHTML = symbol;
    turn.innerHTML = `<h2>${nameFirst} turn</h2>`;
  }
  let buttonFirst = document.getElementById("buttonFirst").innerHTML;
  let buttonSecond = document.getElementById("buttonSecond").innerHTML;
  let buttonThird = document.getElementById("buttonThird").innerHTML;
  let buttonFour = document.getElementById("buttonFour").innerHTML;
  let buttonFive = document.getElementById("buttonFive").innerHTML;
  let buttonSix = document.getElementById("buttonSix").innerHTML;
  let buttonSeven = document.getElementById("buttonSeven").innerHTML;
  let buttonEight = document.getElementById("buttonEight").innerHTML;
  let buttonNine = document.getElementById("buttonNine").innerHTML;
  if (
    (buttonFirst === buttonSecond &&
      buttonFirst === buttonThird &&
      buttonFirst === symbol) ||
    (buttonFour === buttonFive &&
      buttonFour === buttonSix &&
      buttonFour === symbol) ||
    (buttonSeven === buttonEight &&
      buttonSeven === buttonNine &&
      buttonSeven === symbol) ||
    (buttonFirst === buttonFour &&
      buttonFirst === buttonSeven &&
      buttonFirst === symbol) ||
    (buttonSecond === buttonFive &&
      buttonSecond === buttonEight &&
      buttonSecond === symbol) ||
    (buttonThird === buttonSix &&
      buttonThird === buttonNine &&
      buttonThird === symbol) ||
    (buttonFirst === buttonFive &&
      buttonFirst === buttonNine &&
      buttonFirst === symbol) ||
    (buttonThird === buttonFive &&
      buttonThird === buttonSeven &&
      buttonThird === symbol)
  ) {
    if (symbol === "X") {
      winFirst.innerHTML++;
    } else {
      winSecond.innerHTML++;
    }
    result.innerHTML = `<h2 class="text-center">Congratulation ${player} is winner</h2>
<button class="bg-red-500 font-bold mx-auto text-white px-4 py-1 block mt-4 rounded-md" onclick="refresh()">Play Again </button>`;

    breakGame();
  } else if (
    document.getElementById("buttonFirst").disabled === true &&
    document.getElementById("buttonSecond").disabled === true &&
    document.getElementById("buttonThird").disabled === true &&
    document.getElementById("buttonFour").disabled === true &&
    document.getElementById("buttonFive").disabled === true &&
    document.getElementById("buttonSix").disabled === true &&
    document.getElementById("buttonSeven").disabled === true &&
    document.getElementById("buttonEight").disabled === true &&
    document.getElementById("buttonNine").disabled === true
  ) {
    draw.innerHTML++;
    result.innerHTML = `<h2 class="text-center">Match Draw</h2>
<button class="bg-red-500 font-bold mx-auto text-white px-4 py-1 block mt-4 rounded-md" onclick="refresh()">Play Again</button>`;
  }
}

function breakGame() {
  document.getElementById("buttonFirst").disabled = true;
  document.getElementById("buttonSecond").disabled = true;
  document.getElementById("buttonThird").disabled = true;
  document.getElementById("buttonFour").disabled = true;
  document.getElementById("buttonFive").disabled = true;
  document.getElementById("buttonSix").disabled = true;
  document.getElementById("buttonSeven").disabled = true;
  document.getElementById("buttonEight").disabled = true;
  document.getElementById("buttonNine").disabled = true;
}
function refresh() {
  document.getElementById("buttonFirst").disabled = !true;
  document.getElementById("buttonSecond").disabled = !true;
  document.getElementById("buttonThird").disabled = !true;
  document.getElementById("buttonFour").disabled = !true;
  document.getElementById("buttonFive").disabled = !true;
  document.getElementById("buttonSix").disabled = !true;
  document.getElementById("buttonSeven").disabled = !true;
  document.getElementById("buttonEight").disabled = !true;
  document.getElementById("buttonNine").disabled = !true;
  document.getElementById("buttonFirst").innerHTML = [];
  document.getElementById("buttonSecond").innerHTML = [];
  document.getElementById("buttonThird").innerHTML = [];
  document.getElementById("buttonFour").innerHTML = [];
  document.getElementById("buttonFive").innerHTML = [];
  document.getElementById("buttonSix").innerHTML = [];
  document.getElementById("buttonSeven").innerHTML = [];
  document.getElementById("buttonEight").innerHTML = [];
  document.getElementById("buttonNine").innerHTML = [];
  result.innerHTML = [];
  round.innerHTML++;
}
