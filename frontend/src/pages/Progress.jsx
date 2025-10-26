import { useState, useEffect } from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Progress.css';

function Progress() {
  const [progressData, setProgressData] = useState(null);

  useEffect(() => {
    // Simulate API call
    const mockData = {
      weekStart: '2025-09-30',
      weekEnd: '2025-10-06',
      gamesCompleted: 23,
      assessmentsTaken: 2,
      averageScore: 82,
      improvementRate: 5.2,
      streakDays: 7,
      achievements: [
        { id: 1, name: '7-Day Streak', icon: '🔥', earned: true },
        { id: 2, name: 'Memory Master', icon: '🧩', earned: true },
        { id: 3, name: 'Perfect Score', icon: '⭐', earned: false },
        { id: 4, name: 'Daily Champion', icon: '👑', earned: true }
      ],
      dailyActivity: [
        { date: 'Mon', games: 3, score: 78 },
        { date: 'Tue', games: 4, score: 82 },
        { date: 'Wed', games: 2, score: 85 },
        { date: 'Thu', games: 5, score: 80 },
        { date: 'Fri', games: 4, score: 84 },
        { date: 'Sat', games: 3, score: 86 },
        { date: 'Sun', games: 2, score: 88 }
      ],
      cognitiveScores: [
        { category: 'Memory', score: 85, previous: 78 },
        { category: 'Logic', score: 80, previous: 75 },
        { category: 'Reaction', score: 78, previous: 74 },
        { category: 'Language', score: 88, previous: 82 }
      ],
      weeklyTrend: [
        { week: 'Week 1', score: 72 },
        { week: 'Week 2', score: 75 },
        { week: 'Week 3', score: 78 },
        { week: 'Week 4', score: 82 }
      ]
    };
    setProgressData(mockData);
  }, []);

  if (!progressData) {
    return <div className="loading">Loading your progress...</div>;
  }

  return (
    <div className="progress-page">
      <div className="progress-header">
        <h1>Weekly Progress Tracker 📊</h1>
        <p className="subtitle">
          Track your cognitive health journey
        </p>
        <div className="date-range">
          {progressData.weekStart} to {progressData.weekEnd}
        </div>
      </div>

      <div className="overview-cards">
        <div className="overview-card">
          <div className="card-icon">🎮</div>
          <div className="card-content">
            <h3>{progressData.gamesCompleted}</h3>
            <p>Games Played</p>
          </div>
        </div>

        <div className="overview-card">
          <div className="card-icon">📈</div>
          <div className="card-content">
            <h3>{progressData.averageScore}%</h3>
            <p>Average Score</p>
          </div>
        </div>

        <div className="overview-card">
          <div className="card-icon">🔥</div>
          <div className="card-content">
            <h3>{progressData.streakDays}</h3>
            <p>Day Streak</p>
          </div>
        </div>

        <div className="overview-card improvement">
          <div className="card-icon">📊</div>
          <div className="card-content">
            <h3>+{progressData.improvementRate}%</h3>
            <p>Improvement</p>
          </div>
        </div>
      </div>

      <div className="charts-section">
        <div className="chart-card">
          <h2>Daily Activity</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={progressData.dailyActivity}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E1E8ED" />
              <XAxis dataKey="date" stroke="#5A6C7D" />
              <YAxis stroke="#5A6C7D" />
              <Tooltip 
                contentStyle={{ 
                  background: '#fff', 
                  border: '1px solid #E1E8ED',
                  borderRadius: '8px'
                }}
              />
              <Legend />
              <Bar dataKey="games" fill="#4A90E2" name="Games Played" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <h2>Score Trend</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={progressData.dailyActivity}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E1E8ED" />
              <XAxis dataKey="date" stroke="#5A6C7D" />
              <YAxis stroke="#5A6C7D" />
              <Tooltip 
                contentStyle={{ 
                  background: '#fff', 
                  border: '1px solid #E1E8ED',
                  borderRadius: '8px'
                }}
              />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="score" 
                stroke="#50C878" 
                strokeWidth={3}
                name="Daily Score"
                dot={{ fill: '#50C878', r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="cognitive-breakdown">
        <h2>Cognitive Performance Breakdown</h2>
        <div className="breakdown-grid">
          {progressData.cognitiveScores.map((item, index) => (
            <div key={index} className="breakdown-item">
              <div className="breakdown-header">
                <h3>{item.category}</h3>
                <span className="score-change">
                  {item.score > item.previous ? '↗' : '→'} 
                  {item.score > item.previous ? '+' : ''}{item.score - item.previous}
                </span>
              </div>
              <div className="progress-bar-container">
                <div 
                  className="progress-bar-fill" 
                  style={{ width: `${item.score}%` }}
                >
                  <span className="progress-value">{item.score}%</span>
                </div>
              </div>
              <div className="comparison">
                <span>Previous: {item.previous}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="achievements-section">
        <h2>🏆 Achievements</h2>
        <div className="achievements-grid">
          {progressData.achievements.map(achievement => (
            <div 
              key={achievement.id} 
              className={`achievement-card ${achievement.earned ? 'earned' : 'locked'}`}
            >
              <div className="achievement-icon">{achievement.icon}</div>
              <h4>{achievement.name}</h4>
              {achievement.earned ? (
                <span className="achievement-status earned-badge">Earned!</span>
              ) : (
                <span className="achievement-status locked-badge">Locked</span>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="weekly-trend-section">
        <h2>4-Week Trend</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={progressData.weeklyTrend}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E1E8ED" />
            <XAxis dataKey="week" stroke="#5A6C7D" />
            <YAxis stroke="#5A6C7D" />
            <Tooltip 
              contentStyle={{ 
                background: '#fff', 
                border: '1px solid #E1E8ED',
                borderRadius: '8px'
              }}
            />
            <Line 
              type="monotone" 
              dataKey="score" 
              stroke="#4A90E2" 
              strokeWidth={3}
              name="Average Score"
              dot={{ fill: '#4A90E2', r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="insights-section">
        <h2>💡 Personalized Insights</h2>
        <div className="insights-grid">
          <div className="insight-card positive">
            <span className="insight-icon">✨</span>
            <p>
              Great progress! Your memory scores have improved by 9% this week.
              Keep up the excellent work!
            </p>
          </div>
          <div className="insight-card">
            <span className="insight-icon">🎯</span>
            <p>
              You're on a 7-day streak! Consistency is key to maintaining cognitive
              health. Try to continue this momentum.
            </p>
          </div>
          <div className="insight-card">
            <span className="insight-icon">📚</span>
            <p>
              Consider focusing more on language exercises. This could help balance
              your cognitive profile.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Progress;
