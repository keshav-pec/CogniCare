import express from 'express';

const router = express.Router();

// Get available brain games
router.get('/list', async (req, res) => {
  try {
    const games = [
      {
        id: 1,
        name: 'Memory Match',
        category: 'memory',
        difficulty: 'easy',
        description: 'Match pairs of cards to test your memory',
        icon: '🧩'
      },
      {
        id: 2,
        name: 'Number Sequence',
        category: 'logic',
        difficulty: 'medium',
        description: 'Complete the sequence of numbers',
        icon: '🔢'
      },
      {
        id: 3,
        name: 'Word Builder',
        category: 'language',
        difficulty: 'easy',
        description: 'Create words from given letters',
        icon: '📝'
      },
      {
        id: 4,
        name: 'Sudoku',
        category: 'problem-solving',
        difficulty: 'hard',
        description: 'Complete the 9x9 grid with numbers',
        icon: '🎯'
      },
      {
        id: 5,
        name: 'Pattern Recognition',
        category: 'logic',
        difficulty: 'medium',
        description: 'Identify the pattern in shapes',
        icon: '🔷'
      }
    ];
    
    res.json({ success: true, data: games });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Submit game score
router.post('/score', async (req, res) => {
  try {
    const { userId, gameId, score, duration } = req.body;
    
    const gameScore = {
      id: Date.now(),
      userId,
      gameId,
      score,
      duration,
      timestamp: new Date().toISOString()
    };
    
    res.json({
      success: true,
      message: 'Score saved successfully',
      data: gameScore
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Get user game statistics
router.get('/stats/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    
    const stats = {
      totalGamesPlayed: 45,
      averageScore: 78,
      favoriteCategory: 'memory',
      streak: 7,
      weeklyProgress: [
        { day: 'Mon', games: 3, avgScore: 75 },
        { day: 'Tue', games: 2, avgScore: 80 },
        { day: 'Wed', games: 4, avgScore: 82 },
        { day: 'Thu', games: 3, avgScore: 78 },
        { day: 'Fri', games: 5, avgScore: 85 },
        { day: 'Sat', games: 2, avgScore: 79 },
        { day: 'Sun', games: 4, avgScore: 83 }
      ]
    };
    
    res.json({ success: true, data: stats });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;
