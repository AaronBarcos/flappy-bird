class Pollito {
  // Propiedades del pollito
  constructor() {
    this.x = 50; // Posición en eje X
    this.y = 50; // Posición en eje X
    this.w = 45; // Ancho
    this.h = 33; // Altura
    this.speed = 2;
    this.jumpSpeed = 20;
    this.imgPollito = new Image();
    this.imgPollito.src = "./images/flappy.png";
  }

  // MÉTODOS

  // Dibujar el pollito

  drawPollito = () => {
    ctx.drawImage(this.imgPollito, this.x, this.y, this.w, this.h);
  };

  // Que el pollito baje

  gravityPollito = () => {
    this.y += this.speed / 3;
  };

  // Que el pollito suba

  jumpPollito = () => {
    this.y -= this.jumpSpeed * 1.5;
  };
}
