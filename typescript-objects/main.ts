interface StudentProps {
  firstName: string;
  lastName: string;
  age: number;
  livesInIrvine?: boolean;
  previousOccupation?: string;
}

const student: StudentProps = {
  firstName: 'Chris',
  lastName: 'Tran',
  age: 25,
};

const fullName: string = student.firstName + ' ' + student.lastName;
console.log('fullName:', fullName);

student.livesInIrvine = true;
student.previousOccupation = 'slave';
console.log('lives in Irvine?:', student.livesInIrvine);
console.log('last job?:', student.previousOccupation);
console.log('student:', student);

interface Vehicle {
  make: string;
  model: string;
  year: number;
  color?: string;
  isConvertible?: boolean;
}

const vehicle: Vehicle = {
  make: 'hot wheels',
  model: 'flames',
  year: 2008,
};

vehicle['color'] = 'maroon';
vehicle['isConvertible'] = true;
console.log('color:', vehicle['color']);
console.log('convertible?:', vehicle['isConvertible']);
console.log('vehicle:', vehicle);

interface Pet {
  name?: string;
  kind: string;
}

const pet: Pet = {
  name: 'choco',
  kind: 'mushroom',
};

delete pet.name;
delete (pet as { kind?: string }).kind;
console.log('pet:', pet);
