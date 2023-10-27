/* exported take */
function take(array, count) {
  let newArray = [];
  if (array.length < count) {
    newArray = array.slice(array.length - array.length, array.length - 1);
  } else if (array.length > count) {
    newArray = array.slice(array.length - array.length, count);
  }
  return newArray;
}
