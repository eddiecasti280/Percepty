import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './styles/App.css';

import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';

import Splash from './pages/Splash';
import NotFound from './pages/NotFound';

import MathematicsOverview from './pages/overviews/MathematicsOverview';
import ProgrammingOverview from './pages/overviews/ProgrammingOverview';
import LinguisticsOverview from './pages/overviews/LinguisticsOverview';

import IntegralsModule from './modules/mathematics/IntegralsModule';
import BasicOperationsModule from './modules/mathematics/BasicOperationsModule';
import VectorArithmeticModule from './modules/mathematics/VectorArithmeticModule';
import PythonGettingStarted from './modules/programming/PythonGettingStarted';
import AlphabetsModule from './modules/linguistics/AlphabetsModule';

function AppLayout() {
  const location = useLocation();
  const isSplash = location.pathname === '/';

  return (
    <div className="app-wrapper">
      {!isSplash && <Navigation />}
      <main className={isSplash ? '' : 'page-content'}>
        <Routes>
          <Route path="/" element={<Splash />} />

          <Route path="/math" element={<MathematicsOverview />} />
          <Route path="/math/integration" element={<IntegralsModule />} />
          <Route path="/math/basic-operations" element={<BasicOperationsModule />} />
          <Route path="/math/vector-arithmetic" element={<VectorArithmeticModule />} />

          <Route path="/programming" element={<ProgrammingOverview />} />
          <Route path="/programming/python-getting-started" element={<PythonGettingStarted />} />

          <Route path="/linguistics" element={<LinguisticsOverview />} />
          <Route path="/linguistics/alphabets" element={<AlphabetsModule />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      {!isSplash && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;