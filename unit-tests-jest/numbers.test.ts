import { evenNumbers, toDollars, divideBy, multiplyBy } from './numbers';

describe('evenNumbers', () => {
  it('filters array to only have even numbers', () => {
    expect(evenNumbers([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6]);
  });
});

describe('toDollars', () => {
  it('converts number to dollars', () => {
    expect(toDollars(5)).toBe('$5.00');
  });
});

describe('divideBy', () => {
  it('divides each number in array by a number', () => {
    expect(divideBy([2, 4, 6], 2)).toEqual([1, 2, 3]);
  });
});

describe('multiplyBy', () => {
  it('mulitples value of each key only if it is a number', () => {
    expect(
      multiplyBy(
        {
          name: 'Boorish',
          age: 25,
        },
        2
      )
    ).toEqual({
      name: 'Boorish',
      age: 50,
    });
  });
});
