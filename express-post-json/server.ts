import express from 'express';

const app = express();

type Grade = {
  id: number;
  name: string;
  course: string;
  score: number;
};

let nextId = 1;
const grades: Record<number, Grade> = {};
const gradesArray: Grade[] = [];

app.use(express.json());

app.get('/api/grades', (req, res) => {
  for (const key in grades) {
    gradesArray.push(grades[key]);
  }
  res.json(gradesArray);
});

const includesAll = (arr: string[], values: string[]): boolean => {
  return values.every((v) => arr.includes(v));
};

app.post('/api/grades/', (req, res) => {
  const newObj: Grade = req.body;
  if (includesAll(Object.keys(newObj), ['name', 'course', 'score'])) {
    newObj.id = nextId;
    nextId++;
    gradesArray.push(newObj);
    res.status(201);
    res.json(newObj);
  } else {
    res.sendStatus(400);
  }
});

app.listen(8080, () => {
  console.log('server is listening!');
});
