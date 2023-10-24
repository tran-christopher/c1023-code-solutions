const firstVariable = 1;
const secondVariable = 2;
const thirdVariable = 3;

const maximumValue = Math.max(firstVariable, secondVariable, thirdVariable);
console.log('Maximum value should be 3:', maximumValue);

const heroes = ['Batman', 'Ant Man', 'Bird Man', 'Aquaman'];
let randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;
const randomIndex = Math.floor(randomNumber);
console.log('This should be random every refresh:', randomIndex);
const randomHero = heroes[randomIndex];
console.log('This should be a random hero each time:', randomHero);

const library = [
  {
    title: 'Book about books',
    author: 'Magnificent Mario',
  },
  {
    title: 'How to make water bottles',
    author: 'Hairy Hoodeenee',
  },
  {
    title: 'Boombaya',
    author: 'Mucus Man',
  },
];

const lastBook = library.pop();
console.log('Should log the last book:', lastBook);

const firstBook = library.shift();
console.log('Should log the last book:', firstBook);

const js = {
  title: 'Javascript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};
const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('Should only have two new objects', library);

const fullName = `Chris Tran`;
const firstAndLastName = fullName.split(' ');
console.log(
  'Should be an array with first and last name as elements',
  firstAndLastName
);

const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();
console.log('Should be all capitalized:', sayMyName);
