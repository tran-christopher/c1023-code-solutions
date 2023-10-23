const width = 10;
const height = 2;
const area = width * height;
console.log('Area should be 20:', area);
console.log('Type of area:', typeof area);

const bill = 5;
const payment = 50;
const change = payment - bill;
console.log('Change should be 45:', change);
console.log('Type of change:', typeof change);

const quizzes = 10;
const midterm = 40;
const final = 50;
const grade = (quizzes + midterm + final) / 3;
console.log('Should be around 33:', grade);
console.log('Type of grade', typeof grade);

const firstName = 'Chris';
const lastName = 'Tran';
const fullName = firstName + ' ' + lastName;
console.log('Should be my full name:', fullName);
console.log('Type of fullName:', typeof fullName);

const pH = 5;
const isAcidic = pH < 7;
console.log('Should be true:', isAcidic);
console.log('Type of isAcidic:', typeof isAcidic);

const headCount = 10;
const isSparta = headCount === 300;
console.log('Should be false:', isSparta);
console.log('Type of isSparta:', typeof isSparta);

let motto = fullName;
motto += ` is the GOAT`;
console.log('Should log me and goat:', motto);
console.log('Type of motto:', typeof motto);
