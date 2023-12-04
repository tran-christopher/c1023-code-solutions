const prices = [42.42, 10, 28.2234, 3.2, 5, 12];

const array = prices.map((value) => {
  const newObject = {};
  newObject.price = value;
  newObject.salePrice = value / 2;
  return newObject;
});

console.log(array);

const arrayTwo = prices.map((value) => {
  const newObject = {};
  newObject.price = `$${value}`;
  return newObject;
});

console.log(arrayTwo);
