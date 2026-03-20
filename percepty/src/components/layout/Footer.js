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
          <h5>Mathematics</h5>
          <ul>
            <li><Link to="/math">Overview</Link></li>
            <li><Link to="/math/integration">Integration</Link></li>
            <li><Link to="/math/derivatives">Derivatives</Link></li>
            <li><Link to="/math/basic-operations">Basic Operations</Link></li>
            <li><Link to="/math/vector-arithmetic">Vector Arithmetic</Link></li>
          </ul>
        </div>

        <div className="footer-links">
          <h5>Programming</h5>
          <ul>
            <li><Link to="/programming">Overview</Link></li>
            <li><Link to="/programming/python-getting-started">Python: Getting Started</Link></li>
            <li><Link to="/programming/python-control-flow">Python: Control Flow</Link></li>
            <li><Link to="/programming/js-getting-started">JS: Getting Started</Link></li>
            <li><Link to="/programming/js-control-flow">JS: Control Flow</Link></li>
          </ul>
        </div>

        <div className="footer-links">
          <h5>Linguistics</h5>
          <ul>
            <li><Link to="/linguistics">Overview</Link></li>
            <li><Link to="/linguistics/alphabets">Alphabets &amp; Syllabaries</Link></li>
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