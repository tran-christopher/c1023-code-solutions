/* exported dropRight */
function dropRight(array, count) {
  let newArray = [];
  if (array.length > count) {
    newArray = array.slice(array.length - array.length, array.length - count);
  } else if (array.length < count) {
    return newArray;
  }
  return newArray;
}
