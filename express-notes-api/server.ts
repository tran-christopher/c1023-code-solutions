import express from 'express';
import { readFile, writeFile } from 'node:fs/promises';

const app = express();
app.use(express.json());

type Data = {
  nextId: number;
  notes: Record<string, string>;
};

const [, , note] = process.argv;
let gradesArray: string[] = [];

app.get('/api/notes', async (req, res) => {
  const data = await read();
  for (const key in data.notes) {
    if (!data.notes[key]) {
      gradesArray = [];
      break;
    } else {
      gradesArray.push(data.notes[key]);
      console.log(note);
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
    res.status(400).send('Invalid id input');
  } else if (!requestedNote) {
    res.status(404).send('id not found');
  } else {
    res.json(requestedNote);
  }
});

// const includesAll = (arr: string[], values: string[]): boolean => {
//   return values.every((v) => arr.includes(v));
// };
//  if (includesAll(Object.keys(newObj), ['content']))

app.post('/api/notes', async (req, res) => {
  const data = await read();
  const newObj = req.body;
  newObj.id = data.nextId;
  data.notes[newObj.id.toString()] = newObj;
  data.nextId++;
  await writeFile('data.json', JSON.stringify(data, null, 2));
  res.status(201).json(newObj);
  console.log(data.nextId);
});

app.delete('/api/notes/:id', async (req, res) => {
  const data = await read();
  const id = +req.params.id;
  const requestedNote = data.notes[id];
  if (!Number.isInteger(id)) {
    res.status(400).send('Invalid id input');
  } else if (!requestedNote) {
    res.status(404).send('id not found');
  } else {
    delete data.notes[id];
    await writeFile('data.json', JSON.stringify(data, null, 2));
    res.status(204).send();
  }
});

app.put('/api/notes/:id', async (req, res) => {
  const data = await read();
  const id = +req.params.id;
  const newObj = req.body;
  newObj.id = id;
  data.notes[id] = newObj;
  await writeFile('data.json', JSON.stringify(data, null, 2));
  res.status(200).send(newObj);
});

async function read(): Promise<Data> {
  const content = await readFile('data.json', { encoding: 'utf-8' });
  const data = JSON.parse(content);
  return data;
}

app.listen(8080, () => {
  console.log('Server is running!');
});

// type UnsavedGrade = {
//   name: string;
//   course: string;
//   score: number;
// };
// type Grade = UnsavedGrade & { id: number };
// let nextId = 4;
// const grades: Record<number, Grade> = {
//   1: {
//     id: 1,
//     name: 'Tim Berners-Lee',
//     course: 'HTML',
//     score: 95,
//   },
//   3: {
//     id: 3,
//     name: 'Brendan Eich',
//     course: 'JavaScript',
//     score: 100,
//   },
// };
// const app = express();
// app.use(express.json());
// app.get('/api/grades', (req, res) => {
//   const gradesArray: Grade[] = [];
//   for (const id in grades) {
//     gradesArray.push(grades[id]);
//   }
//   res.json(gradesArray);
// });
// app.get('/api/grades/:id', (req, res) => {
//   const id = +req.params.id;
//   const grade = grades[id];
//   if (!grade) {
//     res.sendStatus(404);
//   } else {
//     res.json(grade);
//   }
// });
// app.post('/api/grades', (req, res) => {
//   if (!req.body) {
//     res.status(400).send('No body');
//     return;
//   }
//   if (!req.body.name) {
//     res.status(400).send('No name');
//     return;
//   }
//   if (!req.body.course) {
//     res.status(400).send('No course');
//     return;
//   }
//   const score = req.body.score;
//   if (!score || !Number.isInteger(+score) || +score < 0 || +score > 100) {
//     res.status(400).send('Score must be integer between 0 and 100');
//     return;
//   }
//   const newGrade = req.body;
//   newGrade.id = nextId;
//   grades[nextId] = newGrade;
//   nextId++;
//   res.status(201).json(newGrade);
// });
// app.delete('/api/grades/:id', (req, res) => {
//   const id = Number(req.params.id);
//   if (!grades[id]) {
//     res.sendStatus(404);
//   } else {
//     delete grades[id];
//     res.sendStatus(204);
//   }
// });
// app.listen(8080, () => {
//   console.log('Listening on port 8080!');
// });
