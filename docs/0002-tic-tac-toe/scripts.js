const allPositions = document.querySelectorAll(".position");
const gameContainer = document.querySelector(".game-container");
const startButton = document.querySelector(".start-button");
const restartButton = document.querySelector(".restart-button");

// console.log(allPositions);

// winning lines in game grid
const winningLines = [
  ["1", "2", "3"],
  ["4", "5", "6"],
  ["7", "8", "9"],
  ["1", "4", "7"],
  ["2", "5", "8"],
  ["3", "6", "9"],
  ["1", "5", "9"],
  ["7", "5", "3"],
];

// current player
let currentPlayer = "p1";

// incase of win, note the winning row
let winningRow;

// to check if game started
let notStarted = true;

// is it restart state
let notRestart = true;

// the moment the page loads, disable game container
// gameContainer.classList.add("disable");

// add add Event Listener to start button for when user starts game
startButton.addEventListener(
  // event
  "click",
  (event) => {
    // disable start button
    event.target.classList.add("disable");

    // change the inner html to curent player
    event.target.innerHTML = "Player 1 ( X )";

    // enable the game container
    // gameContainer.classList.toggle("disable");

    // start game
    notStarted = false;
  }
);

const gameState = {
  p1: [],
  p2: [],
};

function evaluatePlayerSymbol(player) {
  return player === "p1" ? "p1" : "p2";
}

function switchPlayer(player) {
  return player === "p1" ? "p2" : "p1";
}

function winnerFound() {
  console.log(currentPlayer, "wins", "at row", winningRow);

  // freeze the game container
  // gameContainer.classList.add("disable");

  // show winning row
  for (const id of winningRow) {
    // document.getElementById(id).classList.add('green')
    document.getElementById(id).closest("div").classList.add("green");
  }

  // display winner
  startButton.innerHTML =
    currentPlayer == "p1" ? "player 1 ( X ) wins" : "player 2 (0) wins";

  // show the restart button
  restartButton.classList.toggle("hide-in-place");
  notRestart = false;
}

restartButton.addEventListener(
  // click
  "click",

  () => {
    location.reload();
  }
);

function callDraw() {
  console.log("ITS A DRAW");

  // freeze the game container
  // gameContainer.classList.add("disable");

  // show draw message
  startButton.innerHTML = "ITS A DRAW!";

  // show the restart button
  restartButton.classList.toggle("hide-in-place");
  notRestart = false;
}

function alertUser(buttonAlert) {
  // WIGGLE THE START BUTTON
  // add "wiggle-me-daddy" class to button for 150ms
  // Add the class
  buttonAlert.classList.add("scale-up");

  // Remove the class after 150ms
  setTimeout(
    // call back
    () => {
      buttonAlert.classList.remove("scale-up");
    },
    // call it after
    150
  );
}

function handleClick(evt) {
  console.log(evt.target);
  console.log("not retart mode is", notRestart);

  if (!notRestart) {
    alertUser(restartButton);
    return;
  }

  if (notStarted) {
    if (notRestart) {
      alertUser(startButton);
    } else {
      alertUser(restartButton);
      console.log("HELLO");
    }
    return;
  }

  // so that players dont override (but this kills restart)
  // evt.target.removeEventListener("click", handleClick);

  if (
    evt.target.classList.contains("p1") | evt.target.classList.contains("p2")
  ) {
    return;
  }

  // find out current player
  const symbolToAdd = evaluatePlayerSymbol(currentPlayer);

  // add player symbol to spot
  evt.target.classList.add(symbolToAdd);

  // add it to player moves in game states
  gameState[currentPlayer].push(evt.target.id);

  console.log(gameState);

  // look into the array of arrays
  for (const line of winningLines) {
    if (
      gameState[currentPlayer].includes(line[0]) &&
      gameState[currentPlayer].includes(line[1]) &&
      gameState[currentPlayer].includes(line[2])
    ) {
      winningRow = line;
      winnerFound();
      return;
    }
  }

  if (gameState.p1.length + gameState.p2.length === 9) {
    callDraw();
    return;
  }

  // switch player
  currentPlayer = switchPlayer(currentPlayer);
  console.log(`current player ${currentPlayer}`);

  // switch the visuals too
  startButton.innerHTML =
    currentPlayer == "p1" ? "Player 1 ( X )" : "Player 2 ( O )";
}
allPositions.forEach(
  // call back function on each position
  function (position) {
    // add event listener to each position
    position.addEventListener(
      // event
      "click",

      // what to do
      handleClick
    );
  }
);
