// NEED TO ADD LOGIC WHERE ANIMATION RESETS (REMOVE THE WIGGLE CLASS) AFTER EACH ANIMATION..
//

const game = () => {
  const options = document.querySelectorAll(".options button");
  // Possible computer options
  const comupterOptions = ["Rock", "Paper", "Scissors"];
  let pScore = 0;
  let cScore = 0;

  //player hands
  const pHand = document.querySelector(".player-hand");
  const cHand = document.querySelector(".computer-hand");

  // function to start bring in the game
  const startGame = () => {
    const startButton = document.querySelector(".start-game");
    const introScreen = document.querySelector(".intro");
    const scoreBoard = document.querySelector(".score");
    const arena = document.querySelector(".arena");
    const pCtrls = document.querySelector(".options");
    const pMess = document.querySelector(".message1");

    startButton.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      arena.classList.add("fadeIn");
      scoreBoard.classList.add("fadeIn");
      pMess.classList.add("fadeIn");
      pCtrls.classList.add("fadeIn");
    });
  };

  //call start game function just after it is defined
  startGame();

  // Go through each of the player option buttons and add an eventlister of click that ...
  // runs a function on click
  options.forEach(options => {
    options.addEventListener("click", function() {
      const playerHand = document.querySelector(".player-hand");
      const computerHand = document.querySelector(".computer-hand");
      // Create a random number between 0-1 mutliply by 3 (number of options in array)...
      // ... then round to nearest interger.
      const compIndex = Math.floor(Math.random() * 3);
      // random interger between 0-2 used to select a string from the computerOptions array ...
      removeWiggle();
      const computerChoice = comupterOptions[compIndex];
      console.log("comp" + computerChoice);
      console.log(this.textContent);
      //update the hand images
      playerHand.src = `./images/H` + `${this.textContent}.png`;
      computerHand.src = `./images/${computerChoice}.png`;
      // Run checker function passing in this.textContent (the contents of the button element) ...
      // and the computer's random choice of rock paper or scissors from array
      removeWiggle();
      checker(this.textContent, computerChoice);
      console.log(pScore);
      console.log(cScore);
      // score updated at the end of each game
      updateScore();
    });
  });

  const updateScore = () => {
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    // changing the html element with the score
    playerScore.innerHTML = pScore;
    computerScore.innerHTML = cScore;
  };

  const removeWiggle = () => {
    cHand.classList.remove("winnerShake");
    pHand.classList.remove("winnerShake");
  };

  const checker = (playerChoice, computerChoice) => {
    if (playerChoice === computerChoice) {
      console.log("Draw");
      removeWiggle();
      return;
    }
    // When player clicks rock
    if (playerChoice === "Rock") {
      if (computerChoice === "Scissors") {
        console.log("You Win");
        pScore++;
        pHand.classList.add("winnerShake");
        return;
      } else if (computerChoice === "Paper") {
        console.log("You Lose");
        cScore++;
        cHand.classList.add("winnerShake");
        return;
      }
    }
    // When player clicks scissors
    if (playerChoice === "Scissors") {
      if (computerChoice === "Paper") {
        console.log("You Win");
        pScore++;
        pHand.classList.add("winnerShake");
        return;
      } else if (computerChoice === "Rock") {
        console.log("You Lose");
        cScore++;
        cHand.classList.add("winnerShake");
        return;
      }
    }
    // When player clicks paper
    if (playerChoice === "Paper") {
      if (computerChoice === "Rock") {
        console.log("You Win");
        pScore++;
        pHand.classList.add("winnerShake");
        return;
      } else if (computerChoice === "Scissors") {
        console.log("You Lose");
        cScore++;
        cHand.classList.add("winnerShake");
        return;
      }
    }
  };
};

game();
