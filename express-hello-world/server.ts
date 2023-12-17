import express from 'express';

const app = express();

app.use((req, res) => {
  console.log(req.method);
  res.send('hi robert please approve me');
});

app.listen(8080, () => {
  console.log('server is listening!');
});
