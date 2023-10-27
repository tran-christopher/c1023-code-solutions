/* exported drop */
function drop(array, count) {
  const newArray = [];
  if (array.length < count) {
    return newArray;
  } else if (array.length > count) {
    for (let i = count; i < array.length; i++) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
