import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import assessmentRoutes from './routes/assessmentRoutes.js';
import gamesRoutes from './routes/gamesRoutes.js';
import specialistRoutes from './routes/specialistRoutes.js';
import userRoutes from './routes/userRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5050;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
  res.json({ 
    message: 'Welcome to CogniCare API',
    version: '1.0.0',
    endpoints: {
      health: '/api/health',
      assessments: '/api/assessments',
      games: '/api/games',
      specialists: '/api/specialists',
      users: '/api/users'
    }
  });
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

// API Routes
app.use('/api/assessments', assessmentRoutes);
app.use('/api/games', gamesRoutes);
app.use('/api/specialists', specialistRoutes);
app.use('/api/users', userRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    success: false, 
    message: 'Something went wrong!',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 CogniCare API Server is running on port ${PORT}`);
  console.log(`📊 Health check: http://localhost:${PORT}/api/health`);
});
