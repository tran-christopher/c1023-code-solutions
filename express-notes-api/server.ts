import express from 'express';
import { readFile, writeFile } from 'node:fs/promises';

const app = express();
app.use(express.json());

type Data = {
  nextId: number;
  notes: Record<string, string>;
};

let gradesArray: string[] = [];

app.get('/api/notes', async (req, res) => {
  const data = await read();
  for (const key in data.notes) {
    if (!data.notes[key]) {
      gradesArray = [];
      break;
    } else {
      gradesArray.push(data.notes[key]);
    }
  }
  res.json(gradesArray);
  gradesArray = [];
});

app.get('/api/notes/:id', async (req, res) => {
  const data = await read();
  const id = +req.params.id;
  const requestedNote = data.notes[id];
  if (!Number.isInteger(id)) {
    res.status(400).json({ error: 'Id must be a positive integer' });
  } else if (!requestedNote) {
    res.status(404).json({ error: `Id ${id} was not found` });
  } else {
    res.json(requestedNote);
  }
});

const includesAll = (arr: string[], values: string[]): boolean => {
  return values.every((v) => arr.includes(v));
};

app.post('/api/notes', async (req, res) => {
  const data = await read();
  const newObj = req.body;
  if (!includesAll(Object.keys(newObj), ['content'])) {
    res.status(400).json({ error: 'Content is the only supported input' });
  } else if (includesAll(Object.keys(newObj), ['content'])) {
    newObj.id = data.nextId;
    data.notes[newObj.id.toString()] = newObj;
    data.nextId++;
    await writeFile('data.json', JSON.stringify(data, null, 2));
    res.status(201).json(newObj);
  } else {
    res.status(500).json({ error: 'An unexpected error occurred' });
  }
});

app.delete('/api/notes/:id', async (req, res) => {
  const data = await read();
  const id = +req.params.id;
  const requestedNote = data.notes[id];
  if (!Number.isInteger(id)) {
    res.status(400).json({ error: 'Id must be a positive integer' });
  } else if (!requestedNote) {
    res.status(404).json({ error: `Id ${id} was not found` });
  } else if (Number.isInteger(id) && requestedNote) {
    delete data.notes[id];
    await writeFile('data.json', JSON.stringify(data, null, 2));
    res.status(204).send();
  } else {
    res.status(500).json({ error: 'An unexpected error occurred' });
  }
});

app.put('/api/notes/:id', async (req, res) => {
  const data = await read();
  const id = +req.params.id;
  const requestedNote = data.notes[id];
  const newObj = req.body;
  if (!Number.isInteger(id)) {
    res.status(400).json({ error: 'Id must be a positive integer' });
  } else if (!includesAll(Object.keys(newObj), ['content'])) {
    res.status(400).json({ error: 'Content is the only supported input' });
  } else if (!requestedNote) {
    res.status(404).json({ error: `Id ${id} was not found` });
  } else if (
    Number.isInteger(id) &&
    includesAll(Object.keys(newObj), ['content']) &&
    requestedNote
  ) {
    newObj.id = id;
    data.notes[id] = newObj;
    await writeFile('data.json', JSON.stringify(data, null, 2));
    res.status(200).send(newObj);
  } else {
    res.status(500).json({ error: 'An unexpected error occurred' });
  }
});

async function read(): Promise<Data> {
  const content = await readFile('data.json', { encoding: 'utf-8' });
  const data = JSON.parse(content);
  return data;
}

app.listen(8080, () => {
  console.log('Server is running!');
});
