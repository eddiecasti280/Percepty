import React from 'react';
import { CopyBlock, dracula } from 'react-code-blocks';
import '../../styles/Module.css';

function CodingSnippet({ code, language, showLineNumbers = true, startingLineNumber = 1 }) {
  return (
    <div className="coding-snippet-wrapper">
      <CopyBlock
        text={code}
        language={language}
        showLineNumbers={showLineNumbers}
        startingLineNumber={startingLineNumber}
        theme={dracula}
        codeBlock
      />
    </div>
  );
}

export default CodingSnippet;