let btnRef = document.querySelectorAll(".button-option");
let popupRef = document.querySelector(".popup");
let newgameBtn = document.getElementById("new-game");
let restartBtn = document.getElementById("restart");
let msgRef = document.getElementById("message");

const disabledButtons = () => {
  btnRef.forEach((element) => (element.disabled = true));
  popupRef.classList.remove("hidden");
};

const enableButtons = () => {
  btnRef.forEach((element) => {
    element.innerText = "";
    element.disabled = false;
  });
  popupRef.classList.add("hidden");
};

const winFunction = (letter) => {
  disabledButtons();
  if (letter == "X") {
    msgRef.innerHTML = "&#x1F389; <br /> Player X Wins!";
  } else {
    msgRef.innerHTML = "&#x1F389; <br /> Player 0 Wins!";
  }
};

const drawFunction = () => {
  disabledButtons();
  msgRef.innerHTML = "&#x1F389; <br /> It's a Draw!";
};

newgameBtn.addEventListener("click", () => {
  count = 0;
  enableButtons();
});

restartBtn.addEventListener("click", () => {
  count = 0;
  enableButtons();
});

// winning Pattern Array
let winningPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [2, 5, 8],
  [6, 7, 8],
  [3, 4, 5],
  [1, 4, 7],
  [0, 4, 8],
  [2, 4, 6],
];

// player "X" plays first
let xTurn = true;
let count = 0;

// win logic
const winChecker = () => {
  for (let i of winningPattern) {
    let [element1, element2, element3] = [
      btnRef[i[0]].innerText,
      btnRef[i[1]].innerText,
      btnRef[i[2]].innerText,
      btnRef[i[3]].innerText,
    ];

    if (element1 != "" && (element2 != "") & (element3 != "")) {
      if (element1 == element2 && element2 == element3) {
        winFunction(element1);
      }
    }
  }
};

// Display X/0 on click
btnRef.forEach((element) => {
  element.addEventListener("click", () => {
    if (xTurn) {
      xTurn = false;
      // Display "X"
      element.innerHTML = "X";
      element.disabled = true;
    } else {
      xTurn = true;
      // Display "O"
      element.innerHTML = "0";
      element.disabled = true;
    }

    // Increment count on each click
    count += 1;
    if (count === 9) {
      drawFunction();
    }
    winChecker();
  });
});

window.onload = enableButtons;
