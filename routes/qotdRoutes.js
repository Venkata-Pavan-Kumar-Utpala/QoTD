import express from 'express';
import { getTodayQuestion, submitAnswer } from '../controllers/qotdController.js';

const router = express.Router();

// Route: GET /api/v1/qotd
// Desc:  Fetch the daily challenge
router.get('/', getTodayQuestion);

// Route: POST /api/v1/qotd/submit
// Desc:  Submit code for evaluation
router.post('/submit', submitAnswer);

export default router;