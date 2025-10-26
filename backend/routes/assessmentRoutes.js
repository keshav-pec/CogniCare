import express from 'express';

const router = express.Router();

// Submit cognitive assessment results
router.post('/submit', async (req, res) => {
  try {
    const { userId, testType, results, score } = req.body;
    
    // In production, save to database
    const assessment = {
      id: Date.now(),
      userId,
      testType,
      results,
      score,
      timestamp: new Date().toISOString()
    };
    
    res.json({
      success: true,
      message: 'Assessment submitted successfully',
      data: assessment
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Get user assessment history
router.get('/history/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    
    // Mock data - replace with database query
    const history = [
      {
        id: 1,
        testType: 'memory',
        score: 85,
        date: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString()
      },
      {
        id: 2,
        testType: 'reaction',
        score: 78,
        date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString()
      }
    ];
    
    res.json({ success: true, data: history });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Get comprehensive cognitive report
router.get('/report/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    
    // Mock comprehensive report
    const report = {
      userId,
      overallScore: 82,
      riskLevel: 'low', // low, moderate, high
      assessmentDate: new Date().toISOString(),
      breakdown: {
        memory: { score: 85, status: 'good' },
        logic: { score: 80, status: 'good' },
        reaction: { score: 78, status: 'fair' },
        coordination: { score: 84, status: 'good' }
      },
      recommendations: [
        'Continue regular cognitive exercises',
        'Maintain a consistent sleep schedule',
        'Consider memory-focused games'
      ]
    };
    
    res.json({ success: true, data: report });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;
