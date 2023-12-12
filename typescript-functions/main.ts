function convertMinutesToSeconds(minutes: number): number {
  return minutes * 60;
}
console.log('5 minutes in seconds:', convertMinutesToSeconds(5));

function greet(name: string): string {
  return `Hey ${name}`;
}
console.log('greeting:', greet('Bobbers'));

function getArea(width: number, height: number): number {
  return width * height;
}
console.log('area of 5 by 4:', getArea(5, 4));

interface Boy {
  firstName: string;
  lastName: string;
}

const todd: Boy = {
  firstName: 'Todd',
  lastName: 'Banana',
};

function getFirstName(person: Boy): string {
  return person.firstName;
}
console.log('firstName:', getFirstName(todd));

function getLastElement(array: string[]): string {
  return array[array.length - 1];
}
console.log(
  'Last element:',
  getLastElement(['propane', 'mcdonalds', 'donuts', 'gasoline'])
);
