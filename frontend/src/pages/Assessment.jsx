import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Assessment.css';

function Assessment() {
  const [selectedTest, setSelectedTest] = useState(null);

  const tests = [
    {
      id: 'memory',
      name: 'Memory & Logic Test',
      icon: '🧩',
      description: 'Assess your short-term memory and pattern recognition abilities',
      duration: '10-15 minutes',
      difficulty: 'Medium'
    },
    {
      id: 'voice',
      name: 'Voice Pattern Analysis',
      icon: '🎤',
      description: 'Analyze speech patterns for early cognitive indicators',
      duration: '5 minutes',
      difficulty: 'Easy'
    },
    {
      id: 'facial',
      name: 'Facial Expression Test',
      icon: '😊',
      description: 'Evaluate emotional recognition and response',
      duration: '8 minutes',
      difficulty: 'Medium'
    },
    {
      id: 'reaction',
      name: 'Reaction & Coordination',
      icon: '⚡',
      description: 'Measure psychomotor speed and hand-eye coordination',
      duration: '5 minutes',
      difficulty: 'Easy'
    }
  ];

  return (
    <div className="assessment-page">
      <div className="assessment-header">
        <h1>Cognitive Assessment 🧠</h1>
        <p className="subtitle">
          Multi-modal testing for comprehensive cognitive profiling
        </p>
      </div>

      {!selectedTest ? (
        <>
          <div className="info-banner">
            <h3>📋 About These Tests</h3>
            <p>
              Our AI-driven assessment analyzes multiple cognitive domains to create
              a detailed profile. Each test is scientifically designed to detect
              subtle changes in cognitive function. Results are provided with
              personalized recommendations.
            </p>
          </div>

          <div className="tests-grid">
            {tests.map((test) => (
              <div key={test.id} className="test-card">
                <div className="test-icon">{test.icon}</div>
                <h3>{test.name}</h3>
                <p className="test-description">{test.description}</p>
                <div className="test-meta">
                  <span className="meta-item">⏱️ {test.duration}</span>
                  <span className="meta-item">📊 {test.difficulty}</span>
                </div>
                <button
                  className="start-test-btn"
                  onClick={() => setSelectedTest(test.id)}
                >
                  Start Test
                </button>
              </div>
            ))}
          </div>

          <div className="assessment-history">
            <h2>📊 Your Assessment History</h2>
            <div className="history-list">
              <div className="history-item">
                <div className="history-icon">🧩</div>
                <div className="history-content">
                  <h4>Memory & Logic Test</h4>
                  <p>Completed 3 days ago</p>
                </div>
                <div className="history-score">
                  <span className="score-value">85%</span>
                  <span className="score-label">Score</span>
                </div>
              </div>
              <div className="history-item">
                <div className="history-icon">⚡</div>
                <div className="history-content">
                  <h4>Reaction & Coordination</h4>
                  <p>Completed 1 week ago</p>
                </div>
                <div className="history-score">
                  <span className="score-value">78%</span>
                  <span className="score-label">Score</span>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="test-view">
          <button className="back-btn" onClick={() => setSelectedTest(null)}>
            ← Back to Tests
          </button>
          <TestComponent testId={selectedTest} />
        </div>
      )}
    </div>
  );
}

function TestComponent({ testId }) {
  const [started, setStarted] = useState(false);
  const [completed, setCompleted] = useState(false);

  if (completed) {
    return (
      <div className="test-result">
        <div className="result-icon">✅</div>
        <h2>Test Completed!</h2>
        <div className="result-score">
          <span className="score-large">82%</span>
          <p>Your Score</p>
        </div>
        <div className="result-details">
          <h3>Analysis</h3>
          <p>
            Your performance indicates healthy cognitive function. Your memory
            recall and pattern recognition are within normal ranges for your age
            group.
          </p>
          <h4>Recommendations:</h4>
          <ul>
            <li>Continue regular cognitive exercises</li>
            <li>Maintain a balanced diet rich in omega-3</li>
            <li>Ensure 7-8 hours of sleep nightly</li>
          </ul>
        </div>
        <Link to="/progress" className="view-report-btn">
          View Detailed Report
        </Link>
      </div>
    );
  }

  if (!started) {
    return (
      <div className="test-intro">
        <h2>Get Ready for the {testId} Test</h2>
        <div className="test-instructions">
          <h3>Instructions:</h3>
          <ul>
            <li>Find a quiet place without distractions</li>
            <li>Ensure good lighting if using camera</li>
            <li>Answer honestly and to the best of your ability</li>
            <li>Take your time - accuracy is more important than speed</li>
          </ul>
        </div>
        <button className="begin-btn" onClick={() => setStarted(true)}>
          Begin Test
        </button>
      </div>
    );
  }

  return (
    <div className="test-active">
      <div className="test-progress">
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: '60%' }}></div>
        </div>
        <span className="progress-text">Question 6 of 10</span>
      </div>

      <div className="test-question">
        <h3>Remember this sequence:</h3>
        <div className="sequence-display">
          <span className="sequence-item">🔵</span>
          <span className="sequence-item">🔴</span>
          <span className="sequence-item">🟢</span>
          <span className="sequence-item">🟡</span>
        </div>
        <p className="question-text">What color came third?</p>
        
        <div className="answer-options">
          <button className="answer-btn">🔵 Blue</button>
          <button className="answer-btn">🔴 Red</button>
          <button className="answer-btn">🟢 Green</button>
          <button className="answer-btn">🟡 Yellow</button>
        </div>
      </div>

      <button className="complete-demo-btn" onClick={() => setCompleted(true)}>
        Complete Test (Demo)
      </button>
    </div>
  );
}

export default Assessment;
