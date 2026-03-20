import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './styles/Theme.css';
import './styles/App.css';

import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';

import Splash from './pages/Splash';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import Register from './pages/Register';
import DynamicModule from './pages/DynamicModule';
import AdminDashboard from './pages/admin/AdminDashboard';
import ModuleEditor from './pages/admin/ModuleEditor';

import MathematicsOverview from './pages/overviews/MathematicsOverview';
import ProgrammingOverview from './pages/overviews/ProgrammingOverview';
import LinguisticsOverview from './pages/overviews/LinguisticsOverview';

import IntegralsModule from './modules/mathematics/IntegralsModule';
import DerivativesModule from './modules/mathematics/DerivativesModule';
import BasicOperationsModule from './modules/mathematics/BasicOperationsModule';
import VectorArithmeticModule from './modules/mathematics/VectorArithmeticModule';

import PythonGettingStarted from './modules/programming/PythonGettingStarted';
import PythonControlFlow from './modules/programming/PythonControlFlow';
import JSGettingStarted from './modules/programming/JSGettingStarted';
import JSControlFlow from './modules/programming/JSControlFlow';

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
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/math" element={<MathematicsOverview />} />
          <Route path="/math/integration" element={<IntegralsModule />} />
          <Route path="/math/derivatives" element={<DerivativesModule />} />
          <Route path="/math/basic-operations" element={<BasicOperationsModule />} />
          <Route path="/math/vector-arithmetic" element={<VectorArithmeticModule />} />

          <Route path="/programming" element={<ProgrammingOverview />} />
          <Route path="/programming/python-getting-started" element={<PythonGettingStarted />} />
          <Route path="/programming/python-control-flow" element={<PythonControlFlow />} />
          <Route path="/programming/js-getting-started" element={<JSGettingStarted />} />
          <Route path="/programming/js-control-flow" element={<JSControlFlow />} />

          <Route path="/linguistics" element={<LinguisticsOverview />} />
          <Route path="/linguistics/alphabets" element={<AlphabetsModule />} />

          <Route path="/modules/custom/:id" element={<DynamicModule />} />

          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/editor" element={<ModuleEditor />} />
          <Route path="/admin/editor/:id" element={<ModuleEditor />} />

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