import fs from 'node:fs/promises';

async function handleAny(): Promise<any> {
  try {
    const contents = await fs.readFile(process.argv[2], { encoding: 'utf-8' });
    console.log(contents);
  } catch (e) {
    console.log(e);
  }
}

handleAny();
