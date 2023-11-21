/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Square */
class Square extends Shape {
  constructor(width) {
    super(width * width, width * 4, width);
    this.width = width;
  }

  describe() {
    return `${super.describe()} and this is the width: ${this.width}`;
  }
}

const newSquare = new Square(2);
console.log(newSquare.describe());
