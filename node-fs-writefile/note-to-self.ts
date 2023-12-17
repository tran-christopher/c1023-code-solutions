import fs from 'node:fs/promises';

try {
  fs.writeFile('note.txt', `${process.argv[2]}\n`, { encoding: 'utf-8' });
} catch (e) {
  console.log(e);
}
