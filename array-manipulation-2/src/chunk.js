/* exported chunk */
function chunk(array, size) {
  const newArray = [];
  let subArray = [];

  for (let i = 0; i < array.length; i++) {
    subArray.push(array[i]);
    if (subArray.length === size) {
      newArray.push(subArray);
      subArray = [];
    }
  }
  /*
  console.log(subArray);
  */
  if (subArray.length > 0) {
    newArray.push(subArray);
    return newArray;
  }
  return newArray;
}
