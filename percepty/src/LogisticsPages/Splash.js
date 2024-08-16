import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import colors from '../constants';

function Splash() {
  return (
    <div className="splash-container" style={{ backgroundColor: colors.green, minHeight: '100vh', padding: '20px' }}>
      <div className="header-container">
        <h1 className="website-name fade-in2" style={{color: 'White', fontSize: '74px'}}>Percepty</h1>
      </div>
      <div className="header-container2">
        <h3 className="fade-in2" style={{color: 'White', fontSize: '48px'}}>A progression-based notes platform for computational topics</h3>
      </div>
    </div>
  );
}

export default Splash;
