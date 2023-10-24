function convertMinutesToSeconds(minutes) {
  const seconds = minutes * 60;
  return seconds;
}
console.log('5 minutes in seconds is:', convertMinutesToSeconds(5));

function greet(name) {
  return 'Hey ' + name;
}
console.log('This should be a greeting:', greet('Bobbers'));

function getArea(width, height) {
  return width * height;
}
console.log('This is the area:', getArea(17, 42));

function getFirstName(person) {
  return person.firstName;
}
const personUno = {
  firstName: 'Lelouche',
  lastName: 'Lamperouge',
};
console.log('This should be the first name:', getFirstName(personUno));

function getLastElement(array) {
  return array[array.length - 1];
}
const exampleArray = [2, 4, 54, 82, 23];
console.log('This is the last element:', getLastElement(exampleArray));
