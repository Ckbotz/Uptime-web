const express = require('express');
const axios = require('axios');
const path = require('path');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 5000;

// Load config
const config = JSON.parse(fs.readFileSync('./config.json'));

// Middleware
app.use(express.static('public'));
app.use(express.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

// Status check endpoint
app.get('/api/status', async (req, res) => {
  try {
    const results = await Promise.all(config.apps.map(async (app) => {
      try {
        const start = Date.now();
        await axios.get(app.url, { timeout: 5000 });
        return {
          name: app.name,
          status: 'Alive',
          responseTime: Date.now() - start,
          timestamp: new Date().toISOString()
        };
      } catch (error) {
        return {
          name: app.name,
          status: 'Down',
          error: error.message,
          timestamp: new Date().toISOString()
        };
      }
    }));
    res.json({ apps: results });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: "healthy" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Monitoring ${config.apps.length} apps:`);
  config.apps.forEach(app => console.log(`- ${app.name}: ${app.url}`));
});

process.on('unhandledRejection', (err) => {
  console.error('Unhandled rejection:', err);
});
