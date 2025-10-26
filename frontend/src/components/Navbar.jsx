import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [showUserMenu, setShowUserMenu] = useState(false);

  const navItems = [
    { path: '/dashboard', label: 'Dashboard', icon: '🏠' },
    { path: '/assessment', label: 'Diagnosis', icon: '🧠' },
    { path: '/games', label: 'Brain Games', icon: '🎮' },
    { path: '/support', label: 'Support', icon: '🤝' },
    { path: '/progress', label: 'Progress', icon: '📊' }
  ];

  const handleLogout = () => {
    localStorage.removeItem('cognicare_auth_token');
    localStorage.removeItem('cognicare_user');
    navigate('/');
  };

  const user = JSON.parse(localStorage.getItem('cognicare_user') || '{}');

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <span className="brand-icon">🧠</span>
          <span className="brand-name">CogniCare</span>
        </Link>
        
        <ul className="nav-menu">
          {navItems.map((item) => (
            <li key={item.path} className="nav-item">
              <Link 
                to={item.path} 
                className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
              >
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-label">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="navbar-user">
          <button 
            className="user-button"
            onClick={() => setShowUserMenu(!showUserMenu)}
          >
            <span className="user-avatar">👤</span>
            <span className="user-name">{user.name || 'User'}</span>
          </button>
          
          {showUserMenu && (
            <div className="user-menu">
              <Link to="/dashboard" className="user-menu-item" onClick={() => setShowUserMenu(false)}>
                <span>🏠</span> Dashboard
              </Link>
              <Link to="/progress" className="user-menu-item" onClick={() => setShowUserMenu(false)}>
                <span>📊</span> My Progress
              </Link>
              <button className="user-menu-item logout" onClick={handleLogout}>
                <span>🚪</span> Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
