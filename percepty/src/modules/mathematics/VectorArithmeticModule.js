import React from 'react';
import '../../styles/Module.css';
import KnowledgePartition from '../../components/content/KnowledgePartition';
import SectionHeading from '../../components/common/SectionHeading';
import LatexSnippet from '../../components/content/LatexSnippet';
import AuthorPartition from '../../components/content/AuthorPartition';
import Quiz from '../../components/content/Quiz';
import 'katex/dist/katex.min.css';

const quizQuestions = [
  {
    question: 'What is the magnitude of the vector ⟨3, 4⟩?',
    latex: '\\|\\langle 3, 4 \\rangle\\| = \\;?',
    options: ['5', '7', '12', '25'],
    correctIndex: 0,
    explanation: '||⟨3,4⟩|| = √(3² + 4²) = √(9 + 16) = √25 = 5.',
  },
  {
    question: 'What is ⟨1, 2, 3⟩ + ⟨4, 5, 6⟩?',
    latex: '\\langle 1, 2, 3 \\rangle + \\langle 4, 5, 6 \\rangle = \\;?',
    options: ['⟨5, 7, 9⟩', '⟨4, 10, 18⟩', '⟨3, 3, 3⟩', '⟨5, 5, 5⟩'],
    optionsLatex: [
      '\\langle 5, 7, 9 \\rangle',
      '\\langle 4, 10, 18 \\rangle',
      '\\langle 3, 3, 3 \\rangle',
      '\\langle 5, 5, 5 \\rangle',
    ],
    correctIndex: 0,
    explanation: 'Add component-wise: ⟨1+4, 2+5, 3+6⟩ = ⟨5, 7, 9⟩.',
  },
  {
    question: 'What is 3 · ⟨2, −1, 4⟩?',
    latex: '3 \\cdot \\langle 2, -1, 4 \\rangle = \\;?',
    options: ['⟨6, −3, 12⟩', '⟨5, 2, 7⟩', '⟨6, 3, 12⟩', '⟨2, −1, 4⟩'],
    optionsLatex: [
      '\\langle 6, -3, 12 \\rangle',
      '\\langle 5, 2, 7 \\rangle',
      '\\langle 6, 3, 12 \\rangle',
      '\\langle 2, -1, 4 \\rangle',
    ],
    correctIndex: 0,
    explanation: 'Multiply each component by 3: ⟨3·2, 3·(−1), 3·4⟩ = ⟨6, −3, 12⟩.',
  },
  {
    question: 'What is the unit vector in the direction of ⟨0, 5⟩?',
    latex: '\\hat{v} \\text{ for } \\vec{v} = \\langle 0, 5 \\rangle = \\;?',
    options: ['⟨0, 1⟩', '⟨1, 0⟩', '⟨0, 5⟩', '⟨5, 0⟩'],
    optionsLatex: [
      '\\langle 0, 1 \\rangle',
      '\\langle 1, 0 \\rangle',
      '\\langle 0, 5 \\rangle',
      '\\langle 5, 0 \\rangle',
    ],
    correctIndex: 0,
    explanation:
      'The magnitude is 5, so divide by 5: ⟨0/5, 5/5⟩ = ⟨0, 1⟩.',
  },
  {
    question: 'If two vectors are equal, what must be true?',
    options: [
      'They have the same magnitude only',
      'They point in the same direction only',
      'All their corresponding components are equal',
      'Their dot product is zero',
    ],
    correctIndex: 2,
    explanation:
      'Two vectors are equal if and only if all corresponding components are equal.',
  },
];

function VectorArithmeticModule() {
  return (
    <div className="module-page">
      <SectionHeading text="Vector Arithmetic" />

      <KnowledgePartition id="partition1">
        <p>
          A vector in three-dimensional space is an ordered triple of real
          numbers:
        </p>
        <LatexSnippet
          latex="\vec{v} = \langle a_1, a_2, a_3 \rangle"
          displayMode
        />
        <p>
          Its <strong>magnitude</strong> (length) is given by:
        </p>
        <LatexSnippet
          latex="\|\vec{v}\| = \sqrt{a_1^2 + a_2^2 + a_3^2}"
          displayMode
        />
      </KnowledgePartition>

      <KnowledgePartition id="partition2">
        <p>Vectors add and scale component-wise:</p>
        <LatexSnippet
          latex="\vec{a} + \vec{b} = \langle a_1 + b_1,\; a_2 + b_2,\; a_3 + b_3 \rangle"
          displayMode
        />
        <LatexSnippet
          latex="c\,\vec{a} = \langle ca_1,\; ca_2,\; ca_3 \rangle"
          displayMode
        />
      </KnowledgePartition>

      <KnowledgePartition id="partition3" isLast>
        <p>
          A <strong>unit vector</strong> points in the same direction as the
          original but has magnitude 1:
        </p>
        <LatexSnippet latex="\hat{v} = \frac{\vec{v}}{\|\vec{v}\|}" displayMode />
        <p>
          Two vectors are equal if and only if all their corresponding
          components are equal.
        </p>
      </KnowledgePartition>

      <Quiz questions={quizQuestions} title="Vector Arithmetic Quiz" />

      <AuthorPartition
        name="Paul Dawkins"
        description="https://tutorial.math.lamar.edu/Classes/CalcII/VectorArithmetic.aspx"
        date="04-22-2025"
      />
    </div>
  );
}

export default VectorArithmeticModule;