export function countOccurrences(str: string, char: string): number {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      case char:
        count++;
        break;
      default:
    }
  }
  return count;
}
