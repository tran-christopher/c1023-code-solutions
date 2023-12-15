export function findMaxNumber(arr: number[]): number {
  let largest: number = 0;
  arr.forEach((element) => {
    switch (element > largest) {
      case true:
        largest = element;
        break;
      default:
    }
  });
  return largest;
}
