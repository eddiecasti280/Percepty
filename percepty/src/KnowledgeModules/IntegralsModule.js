import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import KnowledgePartition from '../KnowledgePartition';
import SectionHeading from '../SectionHeading';
import colors from '../constants';
import LatexSnippet from '../LatexSnippet';
import 'katex/dist/katex.min.css';

function IntegralsModule() {
  return (
    <div style={{ backgroundColor: colors.floral_white, minHeight: '100vh', padding: '20px' }}>
      <SectionHeading text="Integrals" />
      <KnowledgePartition id="partition1">
        <p>Here are some important equations:</p>
        <LatexSnippet latex='\int_{0}^{\infty} \frac{1}{x^2 + 1} \, dx = \frac{\pi}{2}' displayMode={true} />
        <LatexSnippet latex='\frac{d}{dx} e^x = e^x' displayMode={true} />
        <LatexSnippet latex='\sum_{n=1}^{\infty} \frac{1}{n^2} = \frac{\pi^2}{6}' displayMode={true} />
        <LatexSnippet latex='E = mc^2' displayMode={true} />
      </KnowledgePartition>
      <KnowledgePartition id="partition2">
        <p>More equations:</p>
        <LatexSnippet latex='a^2+b^2=c^2' displayMode={true} />
        <LatexSnippet latex='\frac{\mathcal D}{t}=\nabla\times\mathcal{H}' displayMode={true} />
        <LatexSnippet latex='\begin{bmatrix}1&2\\2&1\end{bmatrix}' displayMode={true} />
      </KnowledgePartition>
    </div>
  );
}

export default IntegralsModule;
