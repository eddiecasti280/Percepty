import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from './Navigation';
import KnowledgePartition from './KnowledgePartition';
import SectionHeading from './SectionHeading';
import colors from './constants';
import LatexSnippet from './LatexSnippet';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

function App() {
  return (
    <div style={{ backgroundColor: colors.floral_white, minHeight: '100vh', padding: '20px' }}>
      <Navigation />
      <SectionHeading text="Integrals" />
      
      <KnowledgePartition>
            <p>Here are some important equations:</p>
            <LatexSnippet latex='\int_{0}^{\infty} \frac{1}{x^2 + 1} \, dx = \frac{\pi}{2}' displayMode={true} />
            <LatexSnippet latex='\frac{d}{dx} e^x = e^x' displayMode={true} />
            <LatexSnippet latex='\sum_{n=1}^{\infty} \frac{1}{n^2} = \frac{\pi^2}{6}' displayMode={true} />
            <LatexSnippet latex='E = mc^2' displayMode={true} />
        </KnowledgePartition>
    </div>
  );
}

export default App;
