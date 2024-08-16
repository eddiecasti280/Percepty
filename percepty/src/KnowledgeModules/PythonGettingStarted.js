import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import KnowledgePartition from '../KnowledgePartition';
import SectionHeading from '../SectionHeading';
import colors from '../constants';
import LatexSnippet from '../LatexSnippet';
import 'katex/dist/katex.min.css';
import CodingSnippet from '../CodingSnippet';



function PythonGettingStarted() {
  return (
    <div style={{ backgroundColor: colors.floral_white, minHeight: '100vh', padding: '20px' }}>
    <SectionHeading text="Installation" />
    <KnowledgePartition id="partition1">
    <CodingSnippet code={'print(hello)'} language={'Python'} startingLineNumber={false}>

    </CodingSnippet>
    </KnowledgePartition>
    </div>
  );
}

export default PythonGettingStarted;
