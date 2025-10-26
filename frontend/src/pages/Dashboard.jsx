import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

function Dashboard() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setStats({
        weeklyGames: 23,
        overallScore: 82,
        streak: 7,
        lastAssessment: '3 days ago'
      });
      setLoading(false);
    }, 500);
  }, []);

  if (loading) {
    return <div className="loading">Loading your dashboard...</div>;
  }

  return (
    <div className="dashboard">
      <div className="dashboard-hero">
        <div className="hero-background"></div>
        <div className="hero-content">
          <h1 className="hero-title animate-fadeInUp">
            Welcome Back! <span className="wave">👋</span>
          </h1>
          <p className="hero-subtitle animate-fadeInUp stagger-1">
            Track your cognitive health journey with AI-powered insights
          </p>
          </div>
        </div>

      <div className="dashboard-content">
        <h2 className="section-title animate-fadeInUp">Your Quick Overview</h2>
        <div className="stats-grid">
          <div className="stat-card animate-fadeInUp stagger-1">
            <div className="stat-icon-wrapper games">
              <div className="stat-icon">🎮</div>
            </div>
            <div className="stat-content">
              <h3>{stats.weeklyGames}</h3>
              <p>Games This Week</p>
              <div className="stat-trend positive">+12% from last week</div>
            </div>
          </div>

          <div className="stat-card animate-fadeInUp stagger-2">
            <div className="stat-icon-wrapper score">
              <div className="stat-icon">📈</div>
            </div>
            <div className="stat-content">
              <h3>{stats.overallScore}%</h3>
              <p>Overall Score</p>
              <div className="stat-trend positive">+5% improvement</div>
            </div>
          </div>

          <div className="stat-card animate-fadeInUp stagger-3">
            <div className="stat-icon-wrapper streak">
              <div className="stat-icon">🔥</div>
            </div>
            <div className="stat-content">
              <h3>{stats.streak} Days</h3>
              <p>Current Streak</p>
              <div className="stat-trend">Keep it going!</div>
            </div>
          </div>

          <div className="stat-card animate-fadeInUp stagger-4">
            <div className="stat-icon-wrapper assessment">
              <div className="stat-icon">🧠</div>
            </div>
            <div className="stat-content">
              <h3>{stats.lastAssessment}</h3>
              <p>Last Assessment</p>
              <div className="stat-trend">Recent activity</div>
            </div>
          </div>
        </div>
      </div>

      <h2 className="section-title animate-fadeInUp">Quick Actions</h2>
      <div className="action-cards">
        <Link to="/assessment" className="action-card animate-scaleIn stagger-1">
          <div className="action-card-glow"></div>
          <div className="action-icon">🧠</div>
          <h3>Take Assessment</h3>
          <p>Evaluate your cognitive health with our comprehensive AI-powered tests</p>
          <div className="action-arrow">→</div>
        </Link>

        <Link to="/games" className="action-card animate-scaleIn stagger-2">
          <div className="action-card-glow"></div>
          <div className="action-icon">🎮</div>
          <h3>Play Brain Games</h3>
          <p>Keep your mind sharp with scientifically designed engaging exercises</p>
          <div className="action-arrow">→</div>
        </Link>

        <Link to="/support" className="action-card animate-scaleIn stagger-3">
          <div className="action-card-glow"></div>
          <div className="action-icon">🤝</div>
          <h3>Find Support</h3>
          <p>Connect with verified specialists and access helpful resources</p>
          <div className="action-arrow">→</div>
        </Link>
      </div>

      <div className="quick-tips animate-fadeInUp stagger-4">
        <div className="tips-header">
          <h2>💡 Today's Tips for Cognitive Health</h2>
          <span className="tips-badge">Daily Insights</span>
        </div>
        <div className="tips-grid">
          <div className="tip-item">
            <div className="tip-icon">🌙</div>
            <div className="tip-content">
              <h4>Quality Sleep</h4>
              <p>Get at least 7-8 hours of quality sleep for memory consolidation</p>
            </div>
          </div>
          <div className="tip-item">
            <div className="tip-icon">🏃</div>
            <div className="tip-content">
              <h4>Stay Active</h4>
              <p>Engage in 30 minutes of physical activity to boost brain health</p>
            </div>
          </div>
          <div className="tip-item">
            <div className="tip-icon">🧘</div>
            <div className="tip-content">
              <h4>Mindfulness</h4>
              <p>Practice mindfulness or meditation to reduce cognitive stress</p>
            </div>
          </div>
          <div className="tip-item">
            <div className="tip-icon">👥</div>
            <div className="tip-content">
              <h4>Social Connection</h4>
              <p>Stay socially connected with friends and family regularly</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
