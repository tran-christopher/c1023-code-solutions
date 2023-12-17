import fs from 'node:fs/promises';

try {
  fs.writeFile('random.txt', `${Math.random().toString()}\n`, {
    encoding: 'utf-8',
  });
} catch (e) {
  console.log(e);
}
