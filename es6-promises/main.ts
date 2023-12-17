import { takeAChance } from './take-a-chance.js';

const promise = takeAChance('Chris');

promise.then(
  (value) => {
    console.log(`${value}`);
  },
  (reason) => {
    console.log(reason);
  }
);
