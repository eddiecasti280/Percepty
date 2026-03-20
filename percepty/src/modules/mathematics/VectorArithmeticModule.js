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
    options: ['5', '7', '12', '25'], correctIndex: 0,
    explanation: '\\|\\langle 3,4\\rangle\\| = \\sqrt{3^2+4^2} = \\sqrt{9+16} = \\sqrt{25} = 5.',
  },
  {
    question: 'What is ⟨1, 2, 3⟩ + ⟨4, 5, 6⟩?',
    latex: '\\langle 1,2,3\\rangle + \\langle 4,5,6\\rangle = \\;?',
    options: ['⟨5, 7, 9⟩', '⟨4, 10, 18⟩', '⟨3, 3, 3⟩', '⟨5, 5, 5⟩'],
    optionsLatex: ['\\langle 5,7,9\\rangle', '\\langle 4,10,18\\rangle', '\\langle 3,3,3\\rangle', '\\langle 5,5,5\\rangle'],
    correctIndex: 0,
    explanation: '\\text{Add component-wise: } \\langle 1+4,\\;2+5,\\;3+6\\rangle = \\langle 5,7,9\\rangle.',
  },
  {
    question: 'What is 3 · ⟨2, −1, 4⟩?',
    latex: '3\\cdot\\langle 2,-1,4\\rangle = \\;?',
    options: ['⟨6, −3, 12⟩', '⟨5, 2, 7⟩', '⟨6, 3, 12⟩', '⟨2, −1, 4⟩'],
    optionsLatex: ['\\langle 6,-3,12\\rangle', '\\langle 5,2,7\\rangle', '\\langle 6,3,12\\rangle', '\\langle 2,-1,4\\rangle'],
    correctIndex: 0,
    explanation: '\\text{Multiply each component by }3:\\;\\langle 3{\\cdot}2,\\;3{\\cdot}({-1}),\\;3{\\cdot}4\\rangle = \\langle 6,-3,12\\rangle.',
  },
  {
    question: 'What is the unit vector in the direction of ⟨0, 5⟩?',
    latex: '\\hat{v}\\text{ for }\\vec{v}=\\langle 0,5\\rangle',
    options: ['⟨0, 1⟩', '⟨1, 0⟩', '⟨0, 5⟩', '⟨5, 0⟩'],
    optionsLatex: ['\\langle 0,1\\rangle', '\\langle 1,0\\rangle', '\\langle 0,5\\rangle', '\\langle 5,0\\rangle'],
    correctIndex: 0,
    explanation: '\\|\\vec{v}\\|=5, \\text{ so } \\hat{v}=\\langle 0/5,\\;5/5\\rangle = \\langle 0,1\\rangle.',
  },
  {
    question: 'If two vectors are equal, what must be true?',
    options: ['Same magnitude only', 'Same direction only', 'All corresponding components are equal', 'Their dot product is zero'],
    correctIndex: 2,
    explanation: '\\text{Two vectors are equal if and only if all corresponding components are equal.}',
  },
];

function VectorArithmeticModule() {
  return (
    <div className="module-page">
      <SectionHeading text="Vector Arithmetic" />
      <KnowledgePartition id="partition1">
        <p>A vector in 3-D space:</p>
        <LatexSnippet latex="\vec{v}=\langle a_1,a_2,a_3\rangle" displayMode />
        <p>Magnitude:</p>
        <LatexSnippet latex="\|\vec{v}\|=\sqrt{a_1^2+a_2^2+a_3^2}" displayMode />
      </KnowledgePartition>
      <KnowledgePartition id="partition2">
        <p>Addition and scalar multiplication:</p>
        <LatexSnippet latex="\vec{a}+\vec{b}=\langle a_1+b_1,\;a_2+b_2,\;a_3+b_3\rangle" displayMode />
        <LatexSnippet latex="c\,\vec{a}=\langle ca_1,\;ca_2,\;ca_3\rangle" displayMode />
      </KnowledgePartition>
      <KnowledgePartition id="partition3" isLast>
        <p>Unit vector:</p>
        <LatexSnippet latex="\hat{v}=\frac{\vec{v}}{\|\vec{v}\|}" displayMode />
      </KnowledgePartition>
      <Quiz questions={quizQuestions} title="Vector Arithmetic Quiz" />
      <AuthorPartition name="Paul Dawkins" description="https://tutorial.math.lamar.edu/Classes/CalcII/VectorArithmetic.aspx" date="04-22-2025" />
    </div>
  );
}

export default VectorArithmeticModule;