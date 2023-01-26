class Tubos {
  constructor(yPos, isTuboImageUp) {
    // Propiedades de los tubos
    this.x = canvas.width;
    this.y = yPos;
    this.w = 50;
    this.h = 180;
    /*this.xI = canvas.width;
    this.yI = canvas.height - this.h;*/
    this.speed = 2;
    this.imgTubos = new Image();
    if (isTuboImageUp === true) {
      this.imgTubos.src = "./images/obstacle_top.png";
    } else if (isTuboImageUp === false) {
      this.imgTubos.src = "./images/obstacle_bottom.png";
    }
  }

  // MÉTODOS

  // Dibujar los tubos

  drawTubos = () => {
    ctx.drawImage(this.imgTubos, this.x, this.y, this.w, this.h);
    //ctx.drawImage(this.imgTuboInferior, this.xI, this.yI, this.w, this.h);
  };

  // Que los tubos avancen

  moveTubo = () => {
    this.x -= this.speed / 3;
  };
}
