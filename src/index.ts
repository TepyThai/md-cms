import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send({ hi: 'hello' });
  res.end();
});

app.listen(3000, () => console.log(`Running at http://localhost:3000`));
