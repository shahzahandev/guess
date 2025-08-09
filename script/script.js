// main content 
let contentMain = document.querySelector(".content-main");
let mainHeading = document.querySelector(".main-heading");
let mainInput = document.querySelector(".main-input");
let mainBtn = document.querySelector(".main-btn");
let mainErr = document.querySelector(".main-Err");

// player one button
let playerOne = document.querySelector(".player-One");
let playerOneInput = document.querySelector(".playerOne-input");
let playerOneBtn = document.querySelector(".playerOne-btn");
let playerOneName = document.querySelector(".playerOne-name");
let playerOneErr = document.querySelector(".playerOne-Err");

// player Two button
let playerTwo = document.querySelector(".player-Two");
let playerTwoHeading = document.querySelector(".playerTwo-heading");
let playerTwoInput = document.querySelector(".playerTwo-input");
let playerTwoBtn = document.querySelector(".playerTwo-btn");
let playerTwoErr = document.querySelector(".playerTwo-Err");
let chance = document.querySelector(".chance");
let chanceNumber = 5;

// game over display activity
let display = document.querySelector(".display");
let displayHeading = document.querySelector(".display-heading");
let displayBtn = document.querySelector(".display-btn");


// start button activity
mainBtn.addEventListener("click", () => {
     if (mainInput.value == "") {
          mainErr.innerHTML = "Enter your name fast.";
          mainInput.style.border = "2px solid red";
     } else {
          contentMain.style.display = 'none';
          playerOne.style.display = "block"
          playerOneName.innerHTML = mainInput.value;
          playerOneName.style.textTransform = "capitalaize"
     }
});

// player one button activity
playerOneBtn.addEventListener("click", () => {
     if (playerOneInput.value == "") {
          playerOneErr.innerHTML = "Enter a number fast."
          playerOneInput.style.border = "2px solid red";
     } else {
          playerOne.style.display = "none";
          playerTwo.style.display = "block"
     }
})

// player two button activity
playerTwoBtn.addEventListener("click", () => {
     if (playerTwoInput.value == "") {
          playerTwoErr.innerHTML = "Enter a number fast.";
          playerTwoInput.style.border = "2px solid red";
     } else if (playerOneInput.value === playerTwoInput.value) {
          playerTwo.style.display = "none";
          display.style.display = "block";
          displayHeading.innerHTML = 'Congratulation, Player Two is WIN.';
     } else {
          chanceNumber--
          chance.style.color = 'red';
          chance.innerHTML = chanceNumber;

          if (chanceNumber == 0) {
               playerTwo.style.display = "none";
               display.style.display = "block";
               displayHeading.innerHTML = 'Player One is WIN.';
          }
     }
})

// play again button activity
displayBtn.addEventListener("click", () => {
     display.style.display = "none";
     contentMain.style.display = "block";
     mainInput.value = "";
     playerOneInput.value = "";
     playerTwoInput.value = "";
     chanceNumber = 5;
     chanceNumber--
     chance.innerHTML = chanceNumber
})