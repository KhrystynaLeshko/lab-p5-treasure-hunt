class Game {
  constructor() {
    this.player = new Player(0, 0);
    this.treasure = new Treasure();
    this.treasure.setRandomPosition();
    this.score = 0;
  }
  drawGrid() {
    // Iteration 1
    // Draw the grid
    // https://p5js.org/reference/#/p5/line
    for (let x = 0; x <= width; x += width / 10) {
      for (let y = 0; y <= height; y += height / 10) {
        stroke(1);
        strokeWeight(1);
        line(x, 0, x, height);
        line(0, y, width, y);
      }
    }
  }
  draw() {
    this.player.draw();
    this.treasure.drawTreasure();
    if (this.collisionCheck(this.player, this.treasure)) {
      noLoop();
      const button = document.createElement("button");
      button.innerText = "Yupi de poopi! You won! Play again?";
      button.style.background = "green";
      document.body.appendChild(button);

      button.onclick = () => {
        this.treasure.setRandomPosition();
        button.parentNode.removeChild(button);
        this.score++;
        score.innerText = this.score;
        loop();
      };
    }
  }
  collisionCheck(player, treasure) {
    const playerTopArea = player.y;
    const playerLeftArea = player.x;
    const playerRightArea = player.x + player.width;
    const playerBottomArea = player.y + player.height;

    const obsTopArea = treasure.y;
    const obsLeftArea = treasure.x;
    const obsRightArea = treasure.x + treasure.width;
    const obsBottomArea = treasure.y + treasure.height;
    const isTouchingOnLeft = obsRightArea > playerLeftArea;
    const isTouchingOnBottom = obsTopArea < playerBottomArea;
    const isTouchingOnRight = obsLeftArea < playerRightArea;
    const isTouchingOnTop = obsBottomArea > playerTopArea;

    return (
      isTouchingOnRight &&
      isTouchingOnTop &&
      isTouchingOnBottom &&
      isTouchingOnLeft
    );
  }

  keyPressed() {
    if (keyCode === 37) {
      game.player.moveLeft();
      return;
    }
    if (keyCode === 38) {
      game.player.moveUp();
      return;
    }
    if (keyCode === 39) {
      game.player.moveRight();
      return;
    }
    if (keyCode === 40) {
      game.player.moveDown();
      return;
    }
  }
}
