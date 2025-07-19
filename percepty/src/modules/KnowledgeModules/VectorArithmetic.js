import React from 'react';
import '../../styles/App.css';
import KnowledgePartition from '../../components/KnowledgePartition';
import SectionHeading from '../../components/SectionHeading';
import colors from '../../utils/constants';
import LatexSnippet from '../../components/LatexSnippet';
import 'katex/dist/katex.min.css';
import AuthorPartition from '../../components/AuthorPartition';

function VectorArithmeticModule() {
  return (
    <div style={{ backgroundColor: colors.floral_white, minHeight: '100vh', padding: '20px' }}>
      <SectionHeading text="Vector Arithmetic" />
      
      <KnowledgePartition id="partition1">
        <p>Here are some fundamental vector definitions and properties:</p>
        <LatexSnippet latex='\vec{v} = \langle a_1, a_2, a_3 \rangle' displayMode={true} />
        <LatexSnippet latex='\|\vec{v}\| = \sqrt{a_1^2 + a_2^2 + a_3^2}' displayMode={true} />
        <LatexSnippet latex='\vec{a} + \vec{b} = \langle a_1 + b_1,\ a_2 + b_2,\ a_3 + b_3 \rangle' displayMode={true} />
        <LatexSnippet latex='c \vec{a} = \langle ca_1,\ ca_2,\ ca_3 \rangle' displayMode={true} />
      </KnowledgePartition>

      <KnowledgePartition id="partition2" isLast={true}>
        <p>Additional operations and interpretations:</p>
        <LatexSnippet latex='\vec{v} = \langle x_2 - x_1,\ y_2 - y_1,\ z_2 - z_1 \rangle' displayMode={true} />
        <LatexSnippet latex='\text{If } \vec{v} = \langle a, b, c \rangle, \text{ then the unit vector is } \frac{\vec{v}}{\|\vec{v}\|}' displayMode={true} />
        <LatexSnippet latex='\text{Two vectors are equal if their corresponding components are equal.}' displayMode={true} />
      </KnowledgePartition>

      <AuthorPartition name="Paul Dawkins" description="https://tutorial.math.lamar.edu/Classes/CalcII/VectorArithmetic.aspx" date="04-22-2025" />
    </div>
  );
}

export default VectorArithmeticModule;
