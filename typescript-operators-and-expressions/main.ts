const width: number = 5;
const height: number = 10;

const area: number = width * height;
console.log('area:', area);
console.log('type of area:', typeof area);

const bill: number = 20;
const payment: number = 30;

const change: number = payment - bill;
console.log('change:', change);
console.log('type of change:', typeof change);

const quizzes: number = 5;
const midterm: number = 10;
const final: number = 20;

const grade: number = (quizzes + midterm + final) / 2;
console.log('grade:', grade);
console.log('type of grade:', typeof grade);

const firstName: string = 'Chris';
const lastName: string = 'Tran';

const fullName: string = firstName + ' ' + lastName;
console.log('fullName:', fullName);
console.log('type of fullName:', typeof fullName);

const ph: number = 5;
const isAcidic: boolean = ph < 7;
console.log('isAcidic:', isAcidic);
console.log('type of isAcidic:', typeof isAcidic);

const headCount: number = 10;
const isSparta: boolean = headCount === 300;
console.log('isSparta:', isSparta);
console.log('type of isSparta:', typeof isSparta);

let motto: string = fullName;
motto = motto + ' ' + 'is the GOAT';
console.log('motto:', motto);
console.log('type of motto:', typeof motto);
