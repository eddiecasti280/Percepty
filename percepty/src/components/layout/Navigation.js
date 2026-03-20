import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import ThemeToggle from './ThemeToggle';
import '../../styles/Navigation.css';

function Navigation() {
  const { user, isAdmin, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => { logout(); navigate('/'); };

  return (
    <nav className="navbar navbar-expand-lg navbar-light custom-navbar">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Percepty</Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item dropdown">
              <button className="nav-link dropdown-toggle nav-btn-link" id="navDropMath"
                data-bs-toggle="dropdown" aria-expanded="false">Mathematics</button>
              <ul className="dropdown-menu" aria-labelledby="navDropMath">
                <li><Link className="dropdown-item" to="/math">Overview</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><h6 className="dropdown-header">Calculus</h6></li>
                <li><Link className="dropdown-item" to="/math/integration">Integration</Link></li>
                <li><Link className="dropdown-item" to="/math/derivatives">Derivatives</Link></li>
                <li><Link className="dropdown-item" to="/math/vector-arithmetic">Vector Arithmetic</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><h6 className="dropdown-header">Fundamentals</h6></li>
                <li><Link className="dropdown-item" to="/math/basic-operations">Basic Operations</Link></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <button className="nav-link dropdown-toggle nav-btn-link" id="navDropProg"
                data-bs-toggle="dropdown" aria-expanded="false">Programming</button>
              <ul className="dropdown-menu" aria-labelledby="navDropProg">
                <li><Link className="dropdown-item" to="/programming">Overview</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><h6 className="dropdown-header">Python</h6></li>
                <li><Link className="dropdown-item" to="/programming/python-getting-started">Getting Started</Link></li>
                <li><Link className="dropdown-item" to="/programming/python-control-flow">Control Flow</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><h6 className="dropdown-header">JavaScript</h6></li>
                <li><Link className="dropdown-item" to="/programming/js-getting-started">Getting Started</Link></li>
                <li><Link className="dropdown-item" to="/programming/js-control-flow">Control Flow</Link></li>
              </ul>
            </li>
            <li className="nav-item dropdown dropdown-end">
              <button className="nav-link dropdown-toggle nav-btn-link" id="navDropLing"
                data-bs-toggle="dropdown" aria-expanded="false">Linguistics</button>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navDropLing">
                <li><Link className="dropdown-item" to="/linguistics">Overview</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><h6 className="dropdown-header">Writing Systems</h6></li>
                <li><Link className="dropdown-item" to="/linguistics/alphabets">Alphabets &amp; Syllabaries</Link></li>
              </ul>
            </li>
          </ul>

          <div className="nav-utilities">
            <ThemeToggle />
            {user ? (
              <div className="dropdown">
                <button className={`nav-user-btn dropdown-toggle ${isAdmin ? 'admin-badge' : ''}`}
                  data-bs-toggle="dropdown" aria-expanded="false">
                  {isAdmin && (
                    <span className="material-icons-round">admin_panel_settings</span>
                  )}
                  {isAdmin ? 'Admin' : user.email.split('@')[0]}
                </button>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <span className="dropdown-item-text"
                      style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                      {user.email}
                    </span>
                  </li>
                  <li><hr className="dropdown-divider" /></li>
                  {isAdmin && (
                    <li><Link className="dropdown-item" to="/admin">Dashboard</Link></li>
                  )}
                  <li><button className="dropdown-item" onClick={handleLogout}>Log Out</button></li>
                </ul>
              </div>
            ) : (
              <Link to="/login" className="nav-user-btn">Log In</Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;