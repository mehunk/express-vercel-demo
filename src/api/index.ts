import express from 'express';

import { Express } from 'express'

async function getApp (): Promise<Express> {
  const app = express();

  app.get('/', (req, res) => {
    const path = `/item/${Date.now()}`;
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
    res.end(`Hello! Go to the item: <a href="${path}">${path}</a>`);
  });

  app.get('/item/:slug', (req, res) => {
    const { slug } = req.params;
    res.end(`Item: ${slug}`);
  });

  app.delete('/item/:slug', (req, res) => {
    const { slug } = req.params;
    res.end(`Item: ${slug} has been deleted!`);
  });

  return app
}

export default getApp();
