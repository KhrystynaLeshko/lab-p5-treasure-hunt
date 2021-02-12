class Treasure {
  constructor() {
    this.col = 500;
    this.row = 500;
  }
  setRandomPosition() {
    this.col = Math.floor(Math.random() * 1000);
    this.row = Math.floor(Math.random() * 1000);
  }
  drawTreasure() {
    image(treasurePic, this.row, this.col, 90, 90);
  }
}
