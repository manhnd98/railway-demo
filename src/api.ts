import express from 'express';
import cors from 'cors';

export const app = express();

app.use(cors({ origin: true }));

app.use(express.json());
app.use(express.raw({ type: 'application/vnd.custom-type' }));
app.use(express.text({ type: 'text/html' }));


const mockDatabase = [];

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

  mockDatabase.push(data);

  res.status(200).send({ message: 'ok' });
})

api.get('/nangluong', (req, res) => {
  res.status(200).send({ data: mockDatabase });
})

// Version the api
app.use('/api/v1', api);
