import { add } from './add.js';
import { subtract } from './subtract.js';
import { multiply } from './multiply.js';
import { divide } from './divide.js';

const arg2: string = process.argv[2];
const arg3: string = process.argv[3];
const arg4: string = process.argv[4];

if (arg3 === 'plus') {
  addNumbers();
} else if (arg3 === 'minus') {
  subtractNumbers();
} else if (arg3 === 'times') {
  multiplyNumbers();
} else if (arg3 === 'over') {
  divideNumbers();
} else {
  console.log('Invalid arugments');
}

function divideNumbers(): void {
  console.log('result:', divide(Number(arg2), Number(arg4)));
}

function multiplyNumbers(): void {
  console.log('result:', multiply(Number(arg2), Number(arg4)));
}

function subtractNumbers(): void {
  console.log('result:', subtract(Number(arg2), Number(arg4)));
}

function addNumbers(): void {
  console.log('result:', add(Number(arg2), Number(arg4)));
}
