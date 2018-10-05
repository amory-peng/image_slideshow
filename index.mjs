/*
Why I need a backend:
- Hide the google api key and custom search id.
- Store previously fetched queries + page in a db - prolly can use nosql here

Endpoints:
- GET /
  - serve initial page
- POST /q
  - post a query
  - if query+page key(s) don't exist in the db, send a custom search request

*/

import express from 'express';
import path from 'path';
import query from './backend/query';

const app = express();
const port = 3000;
const __dirname = path.dirname(new URL(import.meta.url).pathname);

app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(path.join(`${__dirname}/index.html`));
});

app.post('/search', async (req, res) => {
  const body = await query(req.query.q);
  res.send(body);
});

console.log('app started');
app.listen(port);
