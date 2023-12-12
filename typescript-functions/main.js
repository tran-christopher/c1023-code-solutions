function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}
console.log('5 minutes in seconds:', convertMinutesToSeconds(5));
function greet(name) {
  return 'Hey '.concat(name);
}
console.log('greeting:', greet('Bobbers'));
function getArea(width, height) {
  return width * height;
}
console.log('area of 5 by 4:', getArea(5, 4));
var todd = {
  firstName: 'Todd',
  lastName: 'Banana',
};
function getFirstName(person) {
  return person.firstName;
}
console.log('firstName:', getFirstName(todd));
function getLastElement(array) {
  return array[array.length - 1];
}
console.log(
  'Last element:',
  getLastElement(['propane', 'mcdonalds', 'donuts', 'gasoline'])
);
