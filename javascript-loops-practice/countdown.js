/* exported countdown */
function countdown(number) {
  const testArray = [];
  while (number >= 0) {
    testArray.push(number);
    number--;
  }
  return testArray;
}
