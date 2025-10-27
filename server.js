// server.js
require('dotenv').config();
const express = require('express');
const fetch = require('node-fetch');
const app = express();
const PORT = 3000;

app.get('/movies', async (req, res) => {
  const url = req.query.url;
  const response = await fetch(url, {
    headers: { Authorization: `Bearer ${process.env.TMDB_AUTH}` }
  });
  const data = await response.json();
  res.json(data);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
