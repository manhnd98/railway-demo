import express from 'express';
import cors from 'cors';

export const app = express();

app.use(cors({ origin: true }));

app.use(express.json());
app.use(express.raw({ type: 'application/vnd.custom-type' }));
app.use(express.text({ type: 'text/plain' }));



const data = {}

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

  const [name, temp, voltage, ampe, power] = data.split(':');
  data[name] = {temp, voltage, ampe, power};
  res.status(200).send({ message: 'ok' });
})

api.get('/nangluong', (req, res) => {
  res.status(200).send(temp);
})

// Version the api
app.use('/api/v1', api);
