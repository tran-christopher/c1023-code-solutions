const student = {
  firstName: 'Chris',
  lastName: 'Tran',
  age: 25,
};

const fullName = student.firstName + ' ' + student.lastName;
console.log('Should be full name:', fullName);
student.livesInIrvine = true;
student.previousOccupation = 'bad finance job';
console.log('Should be true:', student.livesInIrvine);
console.log('Previous occupation:', student.previousOccupation);
console.log('Whole student object', student);

const vehicle = {
  make: 'toy',
  model: 'cart wheels',
  year: 2003,
};

vehicle['color'] = 'Orange';
vehicle['isConvertible'] = true;
console.log('Color:', vehicle['color']);
console.log('Should be true (is a convertible):', vehicle['isConvertible']);
console.log('Whole vehicle object:', vehicle);

const pet = {
  name: 'Spongy',
  type: 'Cleaning Utensil',
};

delete pet.name;
delete pet.type;
console.log('Should be empty pet object:', pet);
