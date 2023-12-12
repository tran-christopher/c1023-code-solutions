import { add } from './add.js';
import { subtract } from './subtract.js';
import { multiply } from './multiply.js';
import { divide } from './divide.js';

const arg2: string = process.argv[2];
const arg3: string = process.argv[3];
const arg4: string = process.argv[4];

if (arg3 === 'plus') {
  console.log('result:', add(Number(arg2), Number(arg4)));
} else if (process.argv[3] === 'minus') {
  console.log(
    'result:',
    subtract(Number(process.argv[2]), Number(process.argv[4]))
  );
} else if (process.argv[3] === 'times') {
  console.log(
    'result:',
    multiply(Number(process.argv[2]), Number(process.argv[4]))
  );
} else if (process.argv[3] === 'over') {
  console.log(
    'result:',
    divide(Number(process.argv[2]), Number(process.argv[4]))
  );
}
