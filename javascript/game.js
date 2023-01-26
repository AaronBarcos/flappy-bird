class Game {
  // Propiedades
  constructor() {
    this.bG = new Image();
    this.bG.src = "./images/bg.png";
    this.pollito = new Pollito();
    this.tubosArr = [];
    this.frames = 1;
    this.tuboSeparation = 300;
    this.isGameOn = true;
  }

  // Métodos

  drawBg = () => {
    ctx.drawImage(this.bG, 0, 0, canvas.width, canvas.height);
  };

  clearCanvas = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  appearTubos = () => {
    if (this.tubosArr.length === 0 || this.frames % 300 === 0) {
      let randomPosY = Math.random() * -50;

      let newTuboArriba = new Tubos(randomPosY, true);
      this.tubosArr.push(newTuboArriba);

      let separation = 300;

      let newTuboAbajo = new Tubos(
        newTuboArriba.y + this.tuboSeparation,
        false
      );
      this.tubosArr.push(newTuboAbajo);
    }
  };

  removeTubosDeLaMemoria = () => {
    if (this.tubosArr[0].x + this.tubosArr[0].w < 0) {
      this.tubosArr.shift();
    }
  };

  gameOver = () => {
    // 1.IMPORTANTE! Detener la recursión
    this.isGameOn = false;
    // 2. Ocultar el canvas
    canvas.style.display = "none";

    // 3. Mostrar pantalla final

    gameOverScreen.style.display = "flex";

    // 4. Ocultar botón pausa

    pauseBotton.style.display = "none";
  };

  checkColisionPollitoTubos = () => {
    this.tubosArr.forEach((eachTubo) => {
      if (
        eachTubo.x < this.pollito.x + this.pollito.w &&
        eachTubo.x + eachTubo.w > this.pollito.x &&
        eachTubo.y < this.pollito.y + this.pollito.h &&
        eachTubo.h + eachTubo.y > this.pollito.y
      ) {
        this.gameOver();
        console.log("green");
      } else {
        // No colisiona
      }
    });
  };

  checkColisionSueloyTecho = () => {
    if (
      this.pollito.y + this.pollito.h > canvas.height ||
      this.pollito.y + this.pollito.h < 0
    ) {
      this.gameOver();
    }
  };

  gameLoop = () => {
    // 1.Limpiar el canvas
    this.clearCanvas();

    // 2.Movimientos y acciones de todos los elementos

    this.pollito.gravityPollito();
    // this.tubos.moveTubo();
    this.appearTubos();
    this.tubosArr.forEach((eachTubo) => {
      eachTubo.moveTubo();
    });

    this.checkColisionPollitoTubos();
    this.checkColisionSueloyTecho();

    this.removeTubosDeLaMemoria();

    // 3.Dibujado de los elementos
    this.drawBg();
    this.pollito.drawPollito();
    this.tubosArr.forEach((eachTubo) => {
      eachTubo.drawTubos();
    });
    // 4.Recursión y control

    this.frames++;

    if (this.isGameOn === true) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}

// BONUS
// Play Again!
// Puntuación
// Vidas y respawn
// Dificultad (velocidad de los tubos)
// Cambio de dirección de la diagonal del pollito
