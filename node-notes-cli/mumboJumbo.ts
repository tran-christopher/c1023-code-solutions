import { readFile, writeFile } from 'node:fs/promises';

type Data = {
  nextId: number;
  notes: Record<string, string>;
};

const [, , command, string1, string2] = process.argv;

try {
  switch (command) {
    case 'read': {
      const data = await read();
      for (const key in data.notes) {
        console.log(`${key} - ${data.notes[key]}`);
      }
      break;
    }
    case 'add': {
      const objJsonParsed = await getObject();
      objJsonParsed.notes[objJsonParsed.nextId.toString()] = string1;
      objJsonParsed.nextId = objJsonParsed.nextId + 1;
      await newObject(objJsonParsed);
      break;
    }
    case 'delete': {
      const objJsonParsed = await getObject();
      for (const key in objJsonParsed.notes) {
        switch (key) {
          case string1: {
            delete objJsonParsed.notes[string1];
            break;
          }
          default:
        }
      }
      await newObject(objJsonParsed);
      break;
    }
    case 'update': {
      const objJsonParsed = await getObject();
      objJsonParsed.notes[string1] = string2;
      await newObject(objJsonParsed);
      break;
    }
    default:
      throw new Error('Invalid command');
  }
} catch (e) {
  console.log(e instanceof Error);
}

async function read(): Promise<Data> {
  const contents = await readFile('data.json', { encoding: 'utf-8' });
  const data = JSON.parse(contents);
  return data;
}

async function getObject(): Promise<Data> {
  const objJson = await readFile('data.json', { encoding: 'utf-8' });
  const objJsonParsed = JSON.parse(objJson);
  return objJsonParsed;
}

async function newObject(jsonObject: Data): Promise<void> {
  try {
    const objJsonReturn = JSON.stringify(jsonObject, null, 2);
    await writeFile('data.json', objJsonReturn, { encoding: 'utf-8' });
  } catch (e) {
    console.log('Something went wrong in newObject()!:', e);
  }
}
