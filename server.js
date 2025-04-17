// Error handling first
process.on('unhandledRejection', (err) => {
  console.error('Unhandled rejection:', err);
});
process.on('uncaughtException', (err) => {
  console.error('Uncaught exception:', err);
});

const express = require('express');
const axios = require('axios');
const fs = require('fs');
const app = express();
const PORT = 5000;

// Middleware
app.use(express.static('public'));
app.use(express.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

// Load config
const config = JSON.parse(fs.readFileSync('./config.json'));

// Status endpoint
app.get('/api/status', async (req, res) => {
  try {
    const results = await Promise.all(config.apps.map(async (app) => {
      try {
        const start = Date.now();
        await axios.head(app.url, { timeout: 5000 });
        return {
          name: app.name,
          status: 'Alive',
          responseTime: Date.now() - start
        };
      } catch (error) {
        return {
          name: app.name,
          status: 'Down',
          error: error.code || 'Connection failed'
        };
      }
    }));
    res.json({ apps: results });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// Health check
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
