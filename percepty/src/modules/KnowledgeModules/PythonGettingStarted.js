import React from 'react';
import '../../styles/App.css';
import KnowledgePartition from '../../components/KnowledgePartition';
import SectionHeading from '../../components/SectionHeading';
import colors from '../../utils/constants';
import LatexSnippet from '../../components/LatexSnippet';
import 'katex/dist/katex.min.css';
import CodingSnippet from '../../components/CodingSnippet';



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
