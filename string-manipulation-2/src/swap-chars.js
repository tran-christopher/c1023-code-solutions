/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  let newString = '';
  const char1 = string[firstIndex];
  const char2 = string[secondIndex];
  for (let i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      newString += char2;
    } else if (i === secondIndex) {
      newString += char1;
    } else {
      newString += string[i];
    }
  }
  return newString;
}
