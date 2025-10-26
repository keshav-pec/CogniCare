import express from 'express';

const router = express.Router();

// Get user profile
router.get('/profile/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    
    const profile = {
      id: userId,
      name: 'User Name',
      email: 'user@example.com',
      age: 65,
      joinDate: '2025-01-15',
      profileComplete: true,
      preferences: {
        notifications: true,
        gameReminders: true,
        weeklyReports: true
      }
    };
    
    res.json({ success: true, data: profile });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Update user profile
router.put('/profile/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    const updates = req.body;
    
    res.json({
      success: true,
      message: 'Profile updated successfully',
      data: { id: userId, ...updates }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Get weekly progress
router.get('/progress/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    
    const progress = {
      weekStart: '2025-09-30',
      weekEnd: '2025-10-06',
      gamesCompleted: 23,
      assessmentsTaken: 2,
      averageScore: 82,
      improvementRate: 5.2,
      streakDays: 7,
      achievements: [
        { id: 1, name: '7-Day Streak', earned: true },
        { id: 2, name: 'Memory Master', earned: true },
        { id: 3, name: 'Perfect Score', earned: false }
      ],
      dailyActivity: [
        { date: '2025-09-30', games: 3, score: 78 },
        { date: '2025-10-01', games: 4, score: 82 },
        { date: '2025-10-02', games: 2, score: 85 },
        { date: '2025-10-03', games: 5, score: 80 },
        { date: '2025-10-04', games: 4, score: 84 },
        { date: '2025-10-05', games: 3, score: 86 },
        { date: '2025-10-06', games: 2, score: 88 }
      ]
    };
    
    res.json({ success: true, data: progress });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;
