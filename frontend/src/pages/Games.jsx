import { useState, useEffect } from 'react';
import './Games.css';

function Games() {
  const [games, setGames] = useState([]);
  const [selectedGame, setSelectedGame] = useState(null);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    // Simulate API call
    const mockGames = [
      {
        id: 1,
        name: 'Memory Match',
        category: 'memory',
        difficulty: 'easy',
        description: 'Match pairs of cards to test your memory',
        icon: '🧩',
        plays: 145
      },
      {
        id: 2,
        name: 'Number Sequence',
        category: 'logic',
        difficulty: 'medium',
        description: 'Complete the sequence of numbers',
        icon: '🔢',
        plays: 89
      },
      {
        id: 3,
        name: 'Word Builder',
        category: 'language',
        difficulty: 'easy',
        description: 'Create words from given letters',
        icon: '📝',
        plays: 201
      },
      {
        id: 4,
        name: 'Sudoku',
        category: 'problem-solving',
        difficulty: 'hard',
        description: 'Complete the 9x9 grid with numbers',
        icon: '🎯',
        plays: 67
      },
      {
        id: 5,
        name: 'Pattern Recognition',
        category: 'logic',
        difficulty: 'medium',
        description: 'Identify the pattern in shapes',
        icon: '🔷',
        plays: 112
      },
      {
        id: 6,
        name: 'Quick Math',
        category: 'problem-solving',
        difficulty: 'easy',
        description: 'Solve math problems quickly',
        icon: '➗',
        plays: 178
      }
    ];
    setGames(mockGames);
  }, []);

  const categories = [
    { id: 'all', name: 'All Games', icon: '🎮' },
    { id: 'memory', name: 'Memory', icon: '🧩' },
    { id: 'logic', name: 'Logic', icon: '🔢' },
    { id: 'language', name: 'Language', icon: '📝' },
    { id: 'problem-solving', name: 'Problem Solving', icon: '🎯' }
  ];

  const filteredGames = filter === 'all' 
    ? games 
    : games.filter(game => game.category === filter);

  if (selectedGame) {
    return (
      <div className="games-page">
        <button className="back-btn" onClick={() => setSelectedGame(null)}>
          ← Back to Games
        </button>
        <GamePlay game={selectedGame} onComplete={() => setSelectedGame(null)} />
      </div>
    );
  }

  return (
    <div className="games-page">
      <div className="games-header">
        <h1>Brain Stimulation Games 🎮</h1>
        <p className="subtitle">
          Keep your mind sharp with engaging cognitive exercises
        </p>
      </div>

      <div className="category-filters">
        {categories.map(cat => (
          <button
            key={cat.id}
            className={`filter-btn ${filter === cat.id ? 'active' : ''}`}
            onClick={() => setFilter(cat.id)}
          >
            <span className="filter-icon">{cat.icon}</span>
            <span>{cat.name}</span>
          </button>
        ))}
      </div>

      <div className="games-grid">
        {filteredGames.map(game => (
          <div key={game.id} className="game-card">
            <div className="game-icon">{game.icon}</div>
            <h3>{game.name}</h3>
            <p className="game-description">{game.description}</p>
            <div className="game-meta">
              <span className="difficulty-badge difficulty-{game.difficulty}">
                {game.difficulty}
              </span>
              <span className="plays-count">🎮 {game.plays} plays</span>
            </div>
            <button
              className="play-btn"
              onClick={() => setSelectedGame(game)}
            >
              Play Now
            </button>
          </div>
        ))}
      </div>

      <div className="games-stats">
        <h2>📊 Your Gaming Stats</h2>
        <div className="stats-row">
          <div className="stat-box">
            <span className="stat-value">45</span>
            <span className="stat-label">Total Games</span>
          </div>
          <div className="stat-box">
            <span className="stat-value">78%</span>
            <span className="stat-label">Avg Score</span>
          </div>
          <div className="stat-box">
            <span className="stat-value">7</span>
            <span className="stat-label">Day Streak</span>
          </div>
          <div className="stat-box">
            <span className="stat-value">Memory</span>
            <span className="stat-label">Favorite</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function GamePlay({ game, onComplete }) {
  const [score, setScore] = useState(0);
  const [gameState, setGameState] = useState('playing');

  // Simple Memory Match game demo
  const [cards, setCards] = useState([
    { id: 1, value: '🍎', flipped: false, matched: false },
    { id: 2, value: '🍎', flipped: false, matched: false },
    { id: 3, value: '🍌', flipped: false, matched: false },
    { id: 4, value: '🍌', flipped: false, matched: false },
    { id: 5, value: '🍇', flipped: false, matched: false },
    { id: 6, value: '🍇', flipped: false, matched: false },
    { id: 7, value: '🍓', flipped: false, matched: false },
    { id: 8, value: '🍓', flipped: false, matched: false }
  ].sort(() => Math.random() - 0.5));

  const [flippedCards, setFlippedCards] = useState([]);

  const handleCardClick = (index) => {
    if (flippedCards.length === 2 || cards[index].matched || cards[index].flipped) {
      return;
    }

    const newCards = [...cards];
    newCards[index].flipped = true;
    setCards(newCards);

    const newFlipped = [...flippedCards, index];
    setFlippedCards(newFlipped);

    if (newFlipped.length === 2) {
      setTimeout(() => {
        const [first, second] = newFlipped;
        if (cards[first].value === cards[second].value) {
          const matchedCards = [...cards];
          matchedCards[first].matched = true;
          matchedCards[second].matched = true;
          setCards(matchedCards);
          setScore(score + 10);

          // Check if game is complete
          if (matchedCards.every(card => card.matched)) {
            setGameState('complete');
          }
        } else {
          const resetCards = [...cards];
          resetCards[first].flipped = false;
          resetCards[second].flipped = false;
          setCards(resetCards);
        }
        setFlippedCards([]);
      }, 1000);
    }
  };

  if (gameState === 'complete') {
    return (
      <div className="game-complete">
        <div className="complete-icon">🎉</div>
        <h2>Congratulations!</h2>
        <div className="final-score">
          <span className="score-value">{score}</span>
          <span className="score-label">Points</span>
        </div>
        <p>You completed {game.name}!</p>
        <div className="complete-actions">
          <button className="play-again-btn" onClick={() => window.location.reload()}>
            Play Again
          </button>
          <button className="done-btn" onClick={onComplete}>
            Done
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="game-play">
      <div className="game-header">
        <h2>{game.name}</h2>
        <div className="game-score">Score: {score}</div>
      </div>

      <div className="memory-grid">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`memory-card ${card.flipped || card.matched ? 'flipped' : ''} ${card.matched ? 'matched' : ''}`}
            onClick={() => handleCardClick(index)}
          >
            <div className="card-inner">
              <div className="card-front">?</div>
              <div className="card-back">{card.value}</div>
            </div>
          </div>
        ))}
      </div>

      <p className="game-instructions">
        Click cards to flip them. Match all pairs to win!
      </p>
    </div>
  );
}

export default Games;
