import { CopyBlock, dracula } from "react-code-blocks";

function CodingSnippet({ code, language, showLineNumbers, startingLineNumber }) {
  <CopyBlock
    text={code}
    language={language}
    showLineNumbers={showLineNumbers}
    startingLineNumber={startingLineNumber}
    theme={dracula}
    codeBlock
  />;
}

export default CodingSnippet;