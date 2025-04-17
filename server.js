const express = require('express');
const axios = require('axios');
const path = require('path');
const fs = require('fs');
const app = express();
const PORT = 5000;

// Load config
const config = JSON.parse(fs.readFileSync('./config.json'));

// Middleware
app.use(express.static('public'));
app.use(express.json());

// Status check endpoint
app.get('/api/status', async (req, res) => {
  const results = [];
  
  for (const app of config.apps) {
    try {
      const start = Date.now();
      await axios.get(app.url, { timeout: 5000 });
      const responseTime = Date.now() - start;
      results.push({
        name: app.name,
        status: 'Alive',
        responseTime,
        timestamp: new Date().toISOString()
      });
    } catch (error) {
      results.push({
        name: app.name,
        status: 'Down',
        error: error.message,
        timestamp: new Date().toISOString()
      });
    }
  }

  res.json({ apps: results });
});

// Start server
app.listen(PORT, () => {
  console.log(`Uptime monitor running on port ${PORT}`);
  console.log(`Monitoring ${config.apps.length} apps:`);
  config.apps.forEach(app => console.log(`- ${app.name}: ${app.url}`));
});
