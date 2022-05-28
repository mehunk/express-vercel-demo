import express from 'express';

const app = express();

app.get('/', (req, res) => {
  const path = `/item/${Date.now()}`;
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  res.end(`Hello! Go to item: <a href="${path}">${path}</a>`);
});

app.get('/item/:slug', (req, res) => {
  const { slug } = req.params;
  res.end(`Item: ${slug}`);
});

app.delete('/item/:slug', (req, res) => {
  const { slug } = req.params;
  res.end(`Item: ${slug} has been deleted!`);
});

export default app;
