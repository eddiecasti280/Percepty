import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Footer.css';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <h4>Percepty</h4>
          <p>A progression-based interactive notes platform for computational topics.</p>
        </div>

        <div className="footer-links">
          <h5>Subjects</h5>
          <ul>
            <li><Link to="/math">Mathematics</Link></li>
            <li><Link to="/programming">Programming</Link></li>
            <li><Link to="/linguistics">Linguistics</Link></li>
          </ul>
        </div>

        <div className="footer-links">
          <h5>Percepty</h5>
          <ul>
            <li><Link to="/about">About</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Percepty. Built for learning.
      </div>
    </footer>
  );
}

export default Footer;