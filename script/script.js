let contentMain = document.querySelector(".content-main");
let playerOne = document.querySelector(".player-One");
let playerTwo = document.querySelector(".player-Two");
// console.log(contentMain, playerOne, playerTwo);


let mainHeading = document.querySelector(".main-heading");
let mainInput = document.querySelector(".main-input");
let mainBtn = document.querySelector(".main-btn");
let mainErr = document.querySelector(".main-Err");
// console.log(mainHeading, mainInput, mainBtn);


let playerOneHeading = document.querySelector(".playerOne-heading");
let playerOneInput = document.querySelector(".playerOne-input");
let playerOneBtn = document.querySelector(".playerOne-btn");
let playerOneName = document.querySelector(".playerOne-name");
let playerOneErr = document.querySelector(".playerOne-Err");
// console.log(playerOneHeading, playerOneInput, playerOneBtn, playerOneName);


let playerTwoHeading = document.querySelector(".playerTwo-heading");
let playerTwoInput = document.querySelector(".playerTwo-input");
let playerTwoBtn = document.querySelector(".playerTwo-btn");
let playerTwoErr = document.querySelector(".playerTwo-Err");
// console.log(playerTwoHeading, playerTwoInput, playerTwoBtn);

let display = document.querySelector(".display");
let displayHeading = document.querySelector(".display-heading");

let chance = document.querySelector(".chance");
let displayBtn = document.querySelector(".display-btn");
let chanceNumber = 5;


mainBtn.addEventListener("click", () => {
     if (mainInput.value === "") {
          mainErr.innerHTML = "Please Enter your name";
          mainErr.style.marginTop = "-30px";
          mainErr.style.marginBottom = "10px";
          mainErr.style.marginLeft = "10px";
          mainErr.style.color = "red";
          mainErr.style.fontSize = "18px";
          mainInput.style.border = "2px solid red";
     } else {
          playerOne.style.display = "block";
          contentMain.style.display = "none";
          playerOneName.innerHTML = mainInput.value;
          playerOneName.style.color = "#1904f6";
          playerOneName.style.textTransform = "capitalize";
          playerOneName.style.fontWeight = "700";
          console.log("Player One is", mainInput.value);
     }

})

playerOneBtn.addEventListener("click", () => {
     if (playerOneInput.value == "") {
          playerOneErr.innerHTML = "Please Enter a number here";
          playerOneErr.style.marginTop = "-30px";
          playerOneErr.style.marginBottom = "10px";
          playerOneErr.style.marginLeft = "10px";
          playerOneErr.style.color = "red";
          playerOneErr.style.fontSize = "18px";
          playerOneInput.style.border = "2px solid red";
     } else {
          playerTwo.style.display = "block";
          playerOne.style.display = "none";
          console.log("Player One", mainInput.value, "Choose:",  playerOneInput.value);
          
     }
})
playerTwoBtn.addEventListener("click", () => {
  

     if (playerTwoInput.value == "") {
          playerTwoErr.innerHTML = "Please Enter a number here";
          playerTwoErr.style.marginTop = "-30px";
          playerTwoErr.style.marginBottom = "10px";
          playerTwoErr.style.marginLeft = "10px";
          playerTwoErr.style.color = "red";
          playerTwoErr.style.fontSize = "18px";
          playerTwoInput.style.border = "2px solid red";
     } else if (playerTwoInput.value === playerOneInput.value) {
          displayHeading.innerHTML = "congratulation, The winner is player Two";
          display.style.display = "block";
          playerTwo.style.display = "none";    
          displayHeading.style.color = "#1904f6"; 
     } else {
          chanceNumber--
          chance.innerHTML = chanceNumber;
          chance.style.color = "red";
          chance.style.fontWeight = "700";
          if(chanceNumber == 0){
          display.style.display = "block";
          playerTwo.style.display = "none";
          playerOneInput.value = "";
          playerTwoInput.value = "";
          chance.innerHTML = ""
          displayHeading.innerText ="congratulation " + playerOneName.innerText + ", you win the game";
          displayHeading.style.color = "#1904f6";
          }
     
     }    
})

displayBtn.addEventListener("click", () => {
     display.style.display = "none";
     contentMain.style.display = "block";
     mainInput.value = "";
     playerOneErr.innerHTML = "";
     playerTwoErr.innerHTML = "";
})



