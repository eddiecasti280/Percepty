import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from './Navigation';
import IntegrationModule from './KnowledgeModules/IntegralsModule';
import colors from './constants';
import MathematicsOverview from './OverviewPages/MathematicsOverview';

function App() {
  return (
    <Router>
      <div style={{ backgroundColor: colors.floral_white, minHeight: '100vh', padding: '20px' }}>
        <Navigation />
        <Routes>
          <Route path="/integration" element={<IntegrationModule />} />
          <Route path="/mathOverview" element={<MathematicsOverview />} /> 
        </Routes>
      </div>
    </Router>

  );
}

export default App;
