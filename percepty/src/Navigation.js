import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import colors from './constants';

function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: colors.taupe_gray, paddingLeft: '10px' }}>
      <a className="navbar-brand" href="#">Percepty</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Mathematics
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link className='dropdown-item' to='/mathOverview'>Overview</Link></li>
                <li><Link className="dropdown-item" to="/integration">Integration</Link></li>
                <li><Link className="dropdown-item" to="/derivatives">Derivatives</Link></li>
            </ul>
          </li>
          {/* Add other links here */}
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Programming
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              {/* <li><Link className="dropdown-item" to="/integration">Python</Link></li> */}
              <li className="dropdown-submenu">
                <a className="dropdown-item dropdown-toggle" href="#">Python</a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/derivatives/basic">Basic</Link></li>
                  <li><Link className="dropdown-item" to="/derivatives/advanced">Advanced</Link></li>
                </ul>
              </li>
              <li><Link className="dropdown-item" to="/derivatives">Java</Link></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Linguistics
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><Link className="dropdown-item" to="/integration">Alphabets and Syllabaries</Link></li>
              <li><Link className="dropdown-item" to="/derivatives">Theory</Link></li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
