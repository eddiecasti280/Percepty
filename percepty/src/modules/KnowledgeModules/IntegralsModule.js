import React from 'react';
import '../../styles/App.css';
import KnowledgePartition from '../../components/KnowledgePartition';
import SectionHeading from '../../components/SectionHeading';
import colors from '../../utils/constants';
import LatexSnippet from '../../components/LatexSnippet';
import 'katex/dist/katex.min.css';
import AuthorPartition from '../../components/AuthorPartition';

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
      <KnowledgePartition id="partition2" isLast={true}>
        <p>More equations:</p>
        <LatexSnippet latex='a^2+b^2=c^2' displayMode={true} />
        <LatexSnippet latex='\frac{\mathcal D}{t}=\nabla\times\mathcal{H}' displayMode={true} />
        <LatexSnippet latex='\begin{bmatrix}1&2\\2&1\end{bmatrix}' displayMode={true} />
      </KnowledgePartition>
      <AuthorPartition name="Eddie Castillo" description="I'm a student at The University of Texas at Austin pursuing a Master's in Artificial Intelligence." date="08-15-2024"></AuthorPartition>
    </div>
  );
}

export default IntegralsModule;
