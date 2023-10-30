/* exported numVowels */
function numVowels(string) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    const lowerString = string.toLowerCase();
    if (
      lowerString[i] === 'a' ||
      lowerString[i] === 'e' ||
      lowerString[i] === 'i' ||
      lowerString[i] === 'o' ||
      lowerString[i] === 'u'
    ) {
      count++;
    }
  }
  return count;
}
