/* exported takeRight */
function takeRight(array, count) {
  let newArray = [];
  if (array.length < count) {
    newArray = array.slice(array.length - array.length, array.length);
  } else if (array.length > count) {
    newArray = array.slice(array.length - count, array.length);
  }
  return newArray;
}
