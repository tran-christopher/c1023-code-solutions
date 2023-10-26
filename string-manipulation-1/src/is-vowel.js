/* exported isVowel */
function isVowel(character) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let i = 0; i < vowels.length; i++) {
    if (character.toLowerCase() === vowels[i]) {
      return true;
    }
  }
  return false;
}
