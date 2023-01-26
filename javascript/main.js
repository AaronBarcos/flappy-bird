// * GLOBAL VARIABLES

const startBtnDOM = document.querySelector("#start-btn");
const canvas = document.querySelector("#my-canvas");
const startScreenDOM = document.querySelector("#splash-screen");
const gameOverDOM = document.querySelector("#gameover-screen");
const gameOverScreen = document.querySelector("#gameover-screen");
const pauseBotton = document.querySelector("#boton-pausa");
const playAgainButton = document.querySelector("#restart-btn");

const ctx = canvas.getContext("2d");

let game; // Esta variable hace que el juego sea accesible en toda la parte del código

// * STATE MANAGEMENT FUNCTIONS

const startGame = () => {
  // 1.Que aparezca el canvas
  startBtnDOM.style.display = "none";
  canvas.style.display = "block";

  // 2.Crear el juego en el canvas

  game = new Game(); //Accedemos a la variable global y creamos el juego en ella

  // 3.Iniciar el juego (game loop)
  game.gameLoop();
};

const spaceMovePollito = (event) => {
  if (event.code === "Space") {
    game.pollito.jumpPollito();
  }
};

const playAgain = () => {
  startGame();
  gameOverScreen.style.display = "none";
  pauseBotton.style.display = "block";
};

// * ADD EVENT LISTENERS

startBtnDOM.addEventListener("click", startGame);
window.addEventListener("keydown", spaceMovePollito);
pauseBotton.addEventListener("click", () => {
  if (game.isGameOn === true) {
    game.isGameOn = false;
  } else {
    game.isGameOn = true;
    game.gameLoop();
  }
});
playAgainButton.addEventListener("click", playAgain);
