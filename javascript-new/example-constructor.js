function ExampleConstructor() {}

console.log('prototype property:', ExampleConstructor.prototype);
console.log('type:', typeof ExampleConstructor.prototype);

const aVariable = new ExampleConstructor();
console.log(aVariable);
const anotherVariable = aVariable instanceof ExampleConstructor;
console.log('Should log true:', anotherVariable);
