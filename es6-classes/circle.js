/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Circle */
class Circle extends Shape {
  constructor(radius) {
    super(radius);
    this.radius = radius;
    this.area = Math.PI * this.radius * (Math.PI * this.radius);
    this.perimeter = 2 * Math.PI * radius;
  }

  describe() {
    return `${super.describe()} and this is the radius: ${this.radius}`;
  }
}

const newCircle = new Circle(2);
console.log(newCircle.describe());
