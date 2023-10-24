function convertMinutesToSeconds(minutes) {
  const seconds = minutes * 60;
  return seconds;
}
console.log('5 minutes in seconds is:', convertMinutesToSeconds(5));

function greet(name) {
  return console.log('Should display greeting', 'Hey ' + name);
}
greet('Bobbers');

function getArea(width, height) {
  return console.log('Area equals:', width * height);
}
getArea(17, 42);

function getFirstName(person) {
  return console.log('First name is:', person.firstName);
}
const personUno = {
  firstName: 'Lelouche',
  lastName: 'Lamperouge',
};
getFirstName(personUno);

function getLastElement(array) {
  return console.log(
    'The last element in the array is:',
    array[array.length - 1]
  );
}
const exampleArray = [2, 4, 54, 82, 23];
getLastElement(exampleArray);
