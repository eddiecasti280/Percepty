import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

function LatexSnippet({ latex, displayMode = false }) {
  return (
    <div className="latex-container" style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '4px', backgroundColor: '#f9f9f9' , fontSize: '16px'}}>
      {displayMode ? (
        <BlockMath math={latex} />
      ) : (
        <InlineMath math={latex} />
      )}
    </div>
  );
}

export default LatexSnippet;
