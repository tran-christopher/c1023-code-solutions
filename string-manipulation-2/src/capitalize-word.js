/* exported capitalizeWord */
function capitalizeWord(word) {
  let newString;
  if (word.toUpperCase() === 'JAVASCRIPT') {
    return 'JavaScript';
  } else {
    const test = word.charAt(0).toUpperCase();
    const test2 = word.slice(1).toLowerCase();
    newString = test + test2;
  }
  /*
  console.log(newString)
  */
  return newString;
}
