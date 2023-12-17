import { readFile, writeFile } from 'node:fs/promises';

const [, , source, destination] = process.argv;

try {
  const contents = await readFile(source);
  await writeFile(destination, contents);
} catch (e) {
  console.log(e);
}
