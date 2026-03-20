import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Navigation.css';

function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light custom-navbar">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Percepty</Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {/* Mathematics */}
            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle nav-btn-link"
                id="navDropMath"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Mathematics
              </button>
              <ul className="dropdown-menu" aria-labelledby="navDropMath">
                <li><Link className="dropdown-item" to="/math">Overview</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item" to="/math/integration">Integration</Link></li>
                <li><Link className="dropdown-item" to="/math/basic-operations">Basic Operations</Link></li>
                <li><Link className="dropdown-item" to="/math/vector-arithmetic">Vector Arithmetic</Link></li>
              </ul>
            </li>

            {/* Programming */}
            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle nav-btn-link"
                id="navDropProg"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Programming
              </button>
              <ul className="dropdown-menu" aria-labelledby="navDropProg">
                <li><Link className="dropdown-item" to="/programming">Overview</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item" to="/programming/python-getting-started">Python: Getting Started</Link></li>
              </ul>
            </li>

            {/* Linguistics */}
            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle nav-btn-link"
                id="navDropLing"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Linguistics
              </button>
              <ul className="dropdown-menu" aria-labelledby="navDropLing">
                <li><Link className="dropdown-item" to="/linguistics">Overview</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item" to="/linguistics/alphabets">Alphabets &amp; Syllabaries</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;