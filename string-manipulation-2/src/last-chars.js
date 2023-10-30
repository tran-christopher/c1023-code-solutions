/* exported lastChars */
function lastChars(length, string) {
  let newString = '';
  if (length > string.length) {
    return string;
  } else if (string.length > length) {
    newString = string.slice(string.length - length);
  }
  return newString;
}
