import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import '../../styles/Module.css';

function LatexSnippet({ latex, displayMode = false }) {
  return (
    <div className="latex-container">
      {displayMode ? <BlockMath math={latex} /> : <InlineMath math={latex} />}
    </div>
  );
}

export default LatexSnippet;