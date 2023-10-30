/* exported capitalizeWords */
function capitalizeWords(string) {
  let newString = '';
  for (let i = 0; i < string.length; i++) {
    if (i === 0 || string[i - 1] === ' ') {
      newString += string.charAt(i).toUpperCase();
    } else newString += string.charAt(i).toLowerCase();
  }
  return newString;
}
