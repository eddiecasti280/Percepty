import React from 'react';
import '../../styles/Module.css';
import KnowledgePartition from '../../components/content/KnowledgePartition';
import SectionHeading from '../../components/common/SectionHeading';
import LatexSnippet from '../../components/content/LatexSnippet';
import AuthorPartition from '../../components/content/AuthorPartition';
import 'katex/dist/katex.min.css';

function VectorArithmeticModule() {
  return (
    <div className="module-page">
      <SectionHeading text="Vector Arithmetic" />

      <KnowledgePartition id="partition1">
        <p>A vector in three-dimensional space is an ordered triple of real numbers:</p>
        <LatexSnippet latex="\vec{v} = \langle a_1, a_2, a_3 \rangle" displayMode />
        <p>Its <strong>magnitude</strong> (length) is given by:</p>
        <LatexSnippet latex="\|\vec{v}\| = \sqrt{a_1^2 + a_2^2 + a_3^2}" displayMode />
      </KnowledgePartition>

      <KnowledgePartition id="partition2">
        <p>Vectors add and scale component-wise:</p>
        <LatexSnippet
          latex="\vec{a} + \vec{b} = \langle a_1 + b_1,\; a_2 + b_2,\; a_3 + b_3 \rangle"
          displayMode
        />
        <LatexSnippet latex="c\,\vec{a} = \langle ca_1,\; ca_2,\; ca_3 \rangle" displayMode />
      </KnowledgePartition>

      <KnowledgePartition id="partition3" isLast>
        <p>
          A <strong>unit vector</strong> points in the same direction as the original
          but has magnitude 1:
        </p>
        <LatexSnippet
          latex="\hat{v} = \frac{\vec{v}}{\|\vec{v}\|}"
          displayMode
        />
        <p>
          Two vectors are equal if and only if all their corresponding components
          are equal.
        </p>
      </KnowledgePartition>

      <AuthorPartition
        name="Paul Dawkins"
        description="https://tutorial.math.lamar.edu/Classes/CalcII/VectorArithmetic.aspx"
        date="04-22-2025"
      />
    </div>
  );
}

export default VectorArithmeticModule;