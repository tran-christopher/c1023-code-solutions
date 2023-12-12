import { addTwoNumbers } from './add.js';
import { subtractTwoNumbers } from './subtract.js';
import { multiplyTwoNumbers } from './multiply.js';
import { divideTwoNumbers } from './divide.js';

if (process.argv[3] === 'plus') {
  console.log(
    'result:',
    addTwoNumbers(Number(process.argv[2]), Number(process.argv[4]))
  );
} else if (process.argv[3] === 'minus') {
  console.log(
    'result:',
    subtractTwoNumbers(Number(process.argv[2]), Number(process.argv[4]))
  );
} else if (process.argv[3] === 'times') {
  console.log(
    'result:',
    multiplyTwoNumbers(Number(process.argv[2]), Number(process.argv[4]))
  );
} else if (process.argv[3] === 'over') {
  console.log(
    'result:',
    divideTwoNumbers(Number(process.argv[2]), Number(process.argv[4]))
  );
}
