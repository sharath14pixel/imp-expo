const express = require('express');
const cors = require('cors');
const env = require('./config/env');
const errorHandler = require('./middleware/errorHandler');

const contactRoutes = require('./routes/contact.routes');
const careersRoutes = require('./routes/careers.routes');
const postsRoutes = require('./routes/posts.routes');

const app = express();

// Middleware
app.use(cors({
  origin: env.corsOrigin,
  optionsSuccessStatus: 200
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/contact', contactRoutes);
app.use('/api/careers', careersRoutes);
app.use('/api/posts', postsRoutes);

// Base route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Imp & Expo API' });
});

// Error handling middleware
app.use(errorHandler);

module.exports = app;
