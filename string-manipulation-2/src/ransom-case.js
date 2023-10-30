/* exported ransomCase */
function ransomCase(string) {
  let test = '';
  for (let i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      test += string.charAt(i).toLowerCase();
    } else if (i % 2 !== 0) {
      test += string.charAt(i).toUpperCase();
    }
  }
  return test;
}
