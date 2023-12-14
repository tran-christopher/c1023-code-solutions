import { readFile, writeFile } from 'node:fs/promises';

type Data = {
  nextId: number;
  notes: Record<string, string>;
};

const [, , command, string1, string2] = process.argv;

try {
  switch (command) {
    case 'read': {
      const data = await test();
      for (const key in data.notes) {
        console.log(`${key} - ${data.notes[key]}`);
      }
      break;
    }
    case 'add': {
      let objJson = await readFile('data.json', { encoding: 'utf-8' });
      const objJsonParsed = JSON.parse(objJson);
      objJsonParsed.notes[objJsonParsed.nextId.toString()] = string1;
      objJsonParsed.nextId = objJsonParsed.nextId + 1;
      objJson = JSON.stringify(objJsonParsed, null, 2);
      await writeFile('data.json', objJson, { encoding: 'utf-8' });
      break;
    }
    case 'delete': {
      let objJson = await readFile('data.json', { encoding: 'utf-8' });
      const objJsonParsed = JSON.parse(objJson);
      for (const key in objJsonParsed.notes) {
        switch (key) {
          case string1: {
            delete objJsonParsed.notes[string1];
            break;
          }
          default:
        }
      }
      objJson = JSON.stringify(objJsonParsed, null, 2);
      await writeFile('data.json', objJson, { encoding: 'utf-8' });
      break;
    }
    case 'update': {
      let objJson = await readFile('data.json', { encoding: 'utf-8' });
      const objJsonParsed = JSON.parse(objJson);
      for (const key in objJsonParsed.notes) {
        switch (key) {
          case string1: {
            objJsonParsed.notes[string1] = string2;
            break;
          }
          default:
        }
      }
      objJson = JSON.stringify(objJsonParsed, null, 2);
      await writeFile('data.json', objJson, { encoding: 'utf-8' });
      break;
    }
    default:
      throw new Error('Invalid command');
  }
} catch (e) {
  console.log(e instanceof Error);
}

async function test(): Promise<Data> {
  const contents = await readFile('data.json', { encoding: 'utf-8' });
  const data = JSON.parse(contents);
  return data;
}
