var student = {
  firstName: 'Chris',
  lastName: 'Tran',
  age: 25,
};
var fullName = student.firstName + ' ' + student.lastName;
console.log('fullName:', fullName);
student.livesInIrvine = true;
student.previousOccupation = 'slave';
console.log('lives in Irvine?:', student.livesInIrvine);
console.log('last job?:', student.previousOccupation);
console.log('student:', student);
var vehicle = {
  make: 'hot wheels',
  model: 'flames',
  year: 2008,
};
vehicle['color'] = 'maroon';
vehicle['isConvertible'] = true;
console.log('color:', vehicle['color']);
console.log('convertible?:', vehicle['isConvertible']);
console.log('vehicle:', vehicle);
var pet = {
  name: 'choco',
  kind: 'mushroom',
};
delete pet.name;
delete pet.kind;
console.log('pet:', pet);

//let me commit
