const game = () => {
  const options = document.querySelectorAll(".options button");
  const comupterOptions = ["rock", "paper", "scissors"];
  // Create a random number between 0-1 mutliply by 3 (number of options in array)...
  // ... then round to nearest interger.
  const compIndex = Math.floor(Math.random() * 3);
  console.log(compIndex);
};
game();
