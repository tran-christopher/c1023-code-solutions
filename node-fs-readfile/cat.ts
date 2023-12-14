import fs from 'node:fs/promises';

const filename = process.argv.slice(2);

try {
  for (let i = 0; i < filename.length; i++) {
    const contents = await fs.readFile(filename[i], { encoding: 'utf-8' });
    console.log(contents, '\n');
  }
} catch (e) {
  console.log(e);
}
