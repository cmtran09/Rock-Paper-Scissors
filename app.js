const game = () => {
  const options = document.querySelectorAll(".options button");
  const comupterOptions = ["Rock", "Paper", "Scissors"];

  options.forEach(options => {
    options.addEventListener("click", function() {
      console.log(this);
      // Create a random number between 0-1 mutliply by 3 (number of options in array)...
      // ... then round to nearest interger.
      const compIndex = Math.floor(Math.random() * 3);
      const computerChoice = comupterOptions[compIndex];
      console.log("comp" + computerChoice);
      console.log(this.textContent);
      checker(this.textContent, computerChoice);
    });
  });

  const checker = (playerChoice, computerChoice) => {
    if (playerChoice === computerChoice) {
      console.log("draw");
      return;
    }
    if (playerChoice === "rock") {
      if (computerChoice === "Scissors") {
        console.log("you win");
        return;
      } else if (computerChoice === "Rock") {
        console.log("you lose");
        return;
      }
    }
    if (playerChoice === "Scissors") {
      if (computerChoice === "Paper") {
        console.log("you win");
        return;
      } else if (computerChoice === "Rock") {
        console.log("you lose");
        return;
      }
    }
    if (playerChoice === "Paper") {
      if (computerChoice === "Rock") {
        console.log("you win");
        return;
      } else if (computerChoice === "Scissors") {
        console.log("you lose");
        return;
      }
    }
  };
};

game();
