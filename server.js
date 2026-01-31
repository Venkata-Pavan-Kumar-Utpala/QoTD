import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './db.js';
import qotdRoutes from './routes/qotdRoutes.js';

// Load environment variables from .env
dotenv.config();
console.log("Checking URI:", process.env.MONGO_URI);

// Connect to MongoDB
connectDB();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json()); // Essential for parsing POST request bodies

// Routes

// This prefixes all your QOTD endpoints with /api/v1/qotd
app.use('/api/v1/qotd', qotdRoutes);

// Health Check
app.get('/', (req, res) => {
  res.status(200).json({
    message: "API is running",
    status: "Healthy"
  });
});

// Global Error Handler
app.use((err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode).json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`
  Server is flying on port ${PORT}
  Health Check: http://localhost:${PORT}/
  API Endpoint: http://localhost:${PORT}/api/v1/qotd
  `);
});