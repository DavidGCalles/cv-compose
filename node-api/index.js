const express = require('express');
const app = express();
const port = 3000;

// In-memory database
const urlDatabase = {};

// Function to generate a random short code
const generateShortCode = () => {
  return Math.random().toString(36).substring(2, 8);
};

app.use(express.json());

app.get('/', (req, res) => {
  res.send('URL Shortener API is running!');
});

// Endpoint to create a short URL
app.post('/shorten', (req, res) => {
  const { longUrl } = req.body;
  if (!longUrl) {
    return res.status(400).send({ error: 'longUrl is required' });
  }

  const shortCode = generateShortCode();
  urlDatabase[shortCode] = { longUrl, createdAt: new Date() };

  const shortUrl = `${req.protocol}://${req.get('host')}/${shortCode}`;
  res.status(201).send({ shortUrl, shortCode });
});

// Endpoint to redirect to the original URL
app.get('/:code', (req, res) => {
  const { code } = req.params;
  const urlData = urlDatabase[code];

  if (urlData) {
    res.redirect(urlData.longUrl);
  } else {
    res.status(404).send({ error: 'Short URL not found' });
  }
});

// Endpoint to get stats for a short URL
app.get('/stats/:code', (req, res) => {
    const { code } = req.params;
    const urlData = urlDatabase[code];

    if (urlData) {
        res.send(urlData);
    } else {
        res.status(404).send({ error: 'Short URL not found' });
    }
});

app.listen(port, () => {
  console.log(`Node.js Express app listening on port ${port}`);
});
