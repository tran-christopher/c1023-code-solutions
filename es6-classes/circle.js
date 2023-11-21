/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Circle */
class Circle extends Shape {
  constructor(radius) {
    super(Math.PI * radius * (Math.PI * radius), 2 * Math.PI * radius, radius);
    this.radius = radius;
  }

  describe() {
    return `${super.describe()} and this is the radius: ${this.radius}`;
  }
}

const newCircle = new Circle(2);
console.log(newCircle.describe());
