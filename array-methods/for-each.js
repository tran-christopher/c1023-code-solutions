const values = [10, 1, 22, 23, 41, 5, 18, 7, 80, 9];
values.forEach((value) => {
  console.log('first:', value);
});

values.forEach((value, index) => {
  console.log('second:', values[values.length - 1 - index]);
});
