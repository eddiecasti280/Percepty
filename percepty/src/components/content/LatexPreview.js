import React from 'react';
import { BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

/**
 * Renders a KaTeX formula inside a fixed-height container,
 * cropped to a consistent aspect ratio for module-card previews.
 */
function LatexPreview({ latex }) {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: 'none',
      }}
    >
      <BlockMath math={latex} />
    </div>
  );
}

export default LatexPreview;