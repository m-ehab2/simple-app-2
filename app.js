const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Import routes
const apiRoutes = require('./routes/api');

// Root route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Use API routes
app.use('/api', apiRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});