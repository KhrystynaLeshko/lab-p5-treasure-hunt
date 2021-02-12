class Treasure {
  constructor() {
    this.col = this.setRandomPosition();
    this.row = this.setRandomPosition();
    this.width = WIDTH / 10;
    this.height = HEIGHT / 10;
  }
  setRandomPosition() {
    // this.col = Math.floor(Math.random() * 1000);
    this.col = Math.floor(Math.random() * 10) * 100;
    // this.row = Math.floor(Math.random() * 1000);
    this.row = Math.floor(Math.random() * 10) * 100;
  }
  drawTreasure() {
    image(treasurePic, this.row, this.col, 90, 90);
  }
}
