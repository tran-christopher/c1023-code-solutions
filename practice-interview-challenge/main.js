function getRangeReport(start, end) {
  const newObject = {};

  const calcAverage = (start + end) / 2;

  let calcTotal = 0;
  while (start <= end) {
    calcTotal += start;
    start++;
  }
  const oddArray = [];
  while (start <= end) {
    if (start % 2 !== 0) {
      oddArray.unshift(start);
    }
    start++;
  }

  const evenArray = [];
  while (start <= end) {
    if (start % 2 === 0) {
      evenArray.push(start);
    }
    start++;
  }

  const calcRange = [];
  for (let i = start; i <= end; i++) {
    calcRange.push(i);
  }

  newObject.average = calcAverage;
  newObject.total = calcTotal;
  newObject.odds = oddArray;
  newObject.evens = evenArray;
  newObject.range = calcRange;

  return newObject;
}

getRangeReport(1, 10);
