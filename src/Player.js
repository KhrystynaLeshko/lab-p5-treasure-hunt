class Player {
  constructor(col, row) {
    this.col = col;
    this.row = row;
    this.width = WIDTH / 10;
    this.height = HEIGHT / 10;
  }
  moveUp() {
    this.col -= 100;
  }
  moveDown() {
    this.col += 100;
  }
  moveLeft() {
    this.row -= 100;
  }
  moveRight() {
    this.row += 100;
  }
  draw() {
    image(characterPic, this.row, this.col, 100, 100);
  }
}
