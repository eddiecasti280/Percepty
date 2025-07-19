import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/App.css';
import Navigation from './components/Navigation';
import IntegrationModule from './modules/KnowledgeModules/IntegralsModule';
import colors from './utils/constants';
import MathematicsOverview from './pages/OverviewPages/MathematicsOverview';
import Splash from './pages/LogisticsPages/Splash';
import BasicOperationsModule from './modules/KnowledgeModules/BasicOperationsModule';
import VectorArithmeticModule from './modules/KnowledgeModules/VectorArithmetic';
import PythonGettingStarted from './modules/KnowledgeModules/PythonGettingStarted';

function App() {
  return (
    <Router>
      <div style={{ backgroundColor: colors.floral_white, minHeight: '100vh', padding: '20px' }}>
        <Navigation />
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/mathOverview" element={<MathematicsOverview />} /> 
          <Route path="/integration" element={<IntegrationModule />} />
          <Route path="/basicOperations" element={<BasicOperationsModule />} />
          <Route path="/vectorArithmetic" element={<VectorArithmeticModule />} />
          <Route path="/pythonGettingStarted" element={<PythonGettingStarted />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
