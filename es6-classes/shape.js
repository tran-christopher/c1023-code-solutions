/* exported Shape */
class Shape {
  constructor(area, perimeter) {
    this.area = area;
    this.perimeter = perimeter;
  }

  describe() {
    return `This is area: ${this.area} and this is perimeter: ${this.perimeter}`;
  }
}

const square = new Shape(4, 8);
console.log(square.describe());
