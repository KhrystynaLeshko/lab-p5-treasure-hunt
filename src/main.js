const game = new Game();

function preload() {
  characterPic = loadImage("/assets/character-down.png");
  treasurePic = loadImage("/assets/treasure.png");
}

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
  score.innerText = game.score;
}

function draw() {
  clear();
  game.drawGrid();
  game.draw();
  // game.drawGrid();
  // player.draw();
  // player.keyPressed();
}

function keyPressed() {
  game.keyPressed();
}
