import express from 'express';
import cors from 'cors';

export const app = express();

app.use(cors({ origin: true }));

app.use(express.json());
app.use(express.raw({ type: 'application/vnd.custom-type' }));
app.use(express.text({ type: 'text/plain' }));



const temp = {}

// Healthcheck endpoint
app.get('/', (req, res) => {
  res.status(200).send({ status: 'ok1' });
});

const api = express.Router();

api.get('/hello', (req, res) => {
  res.status(200).send({ message: 'hello world' });
});

api.post('/nangluong', (req, res) => {

  const data = req.body;

  const [name1, value1, name2, value2, name3, value3, name4, value4] = data.split(':');
  temp[name1] = value1;
  temp[name2] = value2;
  temp[name3] = value3;
  temp[name4] = value4;
  res.status(200).send({ message: 'ok' });
})

api.get('/nangluong', (req, res) => {
  res.status(200).send(temp);
})

// Version the api
app.use('/api/v1', api);
