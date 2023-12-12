import { takeAChance } from './take-a-chance.js';

const promise = takeAChance('Chris');

promise.then(
  function (value) {
    console.log(`${value}`);
  },
  function (reason) {
    console.log(reason);
  }
);
