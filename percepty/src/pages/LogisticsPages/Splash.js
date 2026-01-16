import React from 'react';
import '../../styles/App.css';
import colors from '../../utils/constants';

function Splash() {
  return (
    <div className="splash-hero">
      <div className="splash-overlay">
        <div className="header-container">
          <h1 className="website-name fade-in2">Percepty</h1>
        </div>
        <div className="header-container2">
          <h3 className="fade-in2">A progression-based notes platform for computational topics</h3>
          <a href="#main" className="btn btn-primary splash-cta fade-in2">Get Started</a>
        </div>
      </div>
    </div>
  );
}

export default Splash;
