import React from 'react';
import { Link } from 'react-router-dom';
import colors from '../utils/constants';

function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light custom-navbar shadow-sm" style={{ backgroundColor: colors.taupe_gray, paddingLeft: '10px', position: 'sticky', top: 0, zIndex: 1000 }}>
      <Link className="navbar-brand" to="/">Percepty</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item dropdown">
            <button className="nav-link dropdown-toggle btn btn-link" id="navbarDropdownMath" data-bs-toggle="dropdown" aria-expanded="false" style={{textDecoration: 'none'}}>
              Mathematics
            </button>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMath">
                <li><Link className='dropdown-item' to='/mathOverview'>Overview</Link></li>
                <li><Link className="dropdown-item" to="/integration">Integration</Link></li>
                <li><Link className="dropdown-item" to="/derivatives">Derivatives</Link></li>
            </ul>
          </li>
          {/* Add other links here */}
          <li className="nav-item dropdown">
            <button className="nav-link dropdown-toggle btn btn-link" id="navbarDropdownProg" data-bs-toggle="dropdown" aria-expanded="false" style={{textDecoration: 'none'}}>
              Programming
            </button>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdownProg">
              {/* <li><Link className="dropdown-item" to="/integration">Python</Link></li> */}
              <li className="dropdown-submenu">
                <button className="dropdown-item dropdown-toggle btn btn-link" id="pythonDropdown" data-bs-toggle="dropdown" aria-expanded="false" style={{textDecoration: 'none'}}>
                  Python
                </button>
                <ul className="dropdown-menu" aria-labelledby="pythonDropdown">
                  <li><Link className="dropdown-item" to="/python/basic">Basic</Link></li>
                  <li><Link className="dropdown-item" to="/python/advanced">Advanced</Link></li>
                </ul>
              </li>
              <li><Link className="dropdown-item" to="/java">Java</Link></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <button className="nav-link dropdown-toggle btn btn-link" id="navbarDropdownLing" data-bs-toggle="dropdown" aria-expanded="false" style={{textDecoration: 'none'}}>
              Linguistics
            </button>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdownLing">
              <li><Link className="dropdown-item" to="/linguistics/alphaSyll">Alphabets and Syllabaries</Link></li>
              <li><Link className="dropdown-item" to="/linguistics/theory">Theory</Link></li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
