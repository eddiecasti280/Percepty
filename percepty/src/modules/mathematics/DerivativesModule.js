import React from 'react';
import '../../styles/Module.css';
import KnowledgePartition from '../../components/content/KnowledgePartition';
import SectionHeading from '../../components/common/SectionHeading';
import SubsectionHeading from '../../components/common/SubsectionHeading';
import LatexSnippet from '../../components/content/LatexSnippet';
import AuthorPartition from '../../components/content/AuthorPartition';
import Quiz from '../../components/content/Quiz';
import 'katex/dist/katex.min.css';

const quizQuestions = [
  {
    question: 'What is the derivative of x³?',
    latex: '\\frac{d}{dx}\\,x^3 = \\;?',
    options: ['x²', '3x', '3x²', '3x³'],
    optionsLatex: ['x^2', '3x', '3x^2', '3x^3'],
    correctIndex: 2,
    explanation: 'Using the power rule: d/dx[xⁿ] = nxⁿ⁻¹. So d/dx[x³] = 3x².',
  },
  {
    question: 'What is the derivative of sin(x)?',
    latex: '\\frac{d}{dx}\\sin(x) = \\;?',
    options: ['-cos(x)', 'cos(x)', 'sin(x)', '-sin(x)'],
    optionsLatex: ['-\\cos(x)', '\\cos(x)', '\\sin(x)', '-\\sin(x)'],
    correctIndex: 1,
    explanation: 'The derivative of sin(x) is cos(x).',
  },
  {
    question: 'Using the chain rule, what is the derivative of e^(2x)?',
    latex: '\\frac{d}{dx}\\,e^{2x} = \\;?',
    options: ['e^(2x)', '2e^x', '2e^(2x)', 'e^(2x)/2'],
    optionsLatex: ['e^{2x}', '2e^x', '2e^{2x}', '\\frac{e^{2x}}{2}'],
    correctIndex: 2,
    explanation:
      'By chain rule: d/dx[e^(2x)] = e^(2x) · 2 = 2e^(2x).',
  },
  {
    question: 'What is the derivative of ln(x)?',
    latex: '\\frac{d}{dx}\\ln(x) = \\;?',
    options: ['1/x', 'x', 'ln(x)/x', '1/(x·ln(x))'],
    optionsLatex: ['\\frac{1}{x}', 'x', '\\frac{\\ln(x)}{x}', '\\frac{1}{x \\cdot \\ln(x)}'],
    correctIndex: 0,
    explanation: 'The derivative of ln(x) is 1/x.',
  },
  {
    question: 'What is the derivative of 5x⁴ + 3x² − 7?',
    latex: '\\frac{d}{dx}(5x^4 + 3x^2 - 7) = \\;?',
    options: ['20x³ + 6x', '20x³ + 6x − 7', '5x³ + 3x', '20x⁴ + 6x²'],
    optionsLatex: ['20x^3 + 6x', '20x^3 + 6x - 7', '5x^3 + 3x', '20x^4 + 6x^2'],
    correctIndex: 0,
    explanation:
      'Differentiate term by term: 5·4x³ + 3·2x − 0 = 20x³ + 6x.',
  },
];

function DerivativesModule() {
  return (
    <div className="module-page">
      <SectionHeading text="Derivatives" />

      <SubsectionHeading text="Definition" />

      <KnowledgePartition id="partition1">
        <p>
          The <strong>derivative</strong> of a function at a point measures the
          instantaneous rate of change. It is defined as the following limit,
          when it exists:
        </p>
        <LatexSnippet
          latex="f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}"
          displayMode
        />
        <p>
          Geometrically, the derivative at a point equals the slope of the
          tangent line to the curve at that point.
        </p>
      </KnowledgePartition>

      <SubsectionHeading text="Power Rule" />

      <KnowledgePartition id="partition2">
        <p>
          For any real number <em>n</em>, the derivative of{' '}
          <strong>x<sup>n</sup></strong> is:
        </p>
        <LatexSnippet latex="\frac{d}{dx}\,x^n = n\,x^{n-1}" displayMode />
        <p>A few quick examples:</p>
        <LatexSnippet latex="\frac{d}{dx}\,x^3 = 3x^2" displayMode />
        <LatexSnippet
          latex="\frac{d}{dx}\,\sqrt{x} = \frac{d}{dx}\,x^{1/2} = \frac{1}{2}\,x^{-1/2}"
          displayMode
        />
      </KnowledgePartition>

      <SubsectionHeading text="Product Rule" />

      <KnowledgePartition id="partition3">
        <p>
          When two functions are multiplied together, the derivative follows the
          <strong> product rule</strong>:
        </p>
        <LatexSnippet
          latex="\frac{d}{dx}\bigl[f(x)\,g(x)\bigr] = f'(x)\,g(x) + f(x)\,g'(x)"
          displayMode
        />
      </KnowledgePartition>

      <SubsectionHeading text="Chain Rule" />

      <KnowledgePartition id="partition4">
        <p>
          For a composition of functions, the <strong>chain rule</strong> tells
          us to multiply the outer derivative by the inner derivative:
        </p>
        <LatexSnippet
          latex="\frac{d}{dx}\bigl[f(g(x))\bigr] = f'(g(x))\cdot g'(x)"
          displayMode
        />
        <p>Example — differentiate sin(x²):</p>
        <LatexSnippet
          latex="\frac{d}{dx}\sin(x^2) = \cos(x^2)\cdot 2x"
          displayMode
        />
      </KnowledgePartition>

      <SubsectionHeading text="Common Derivatives" />

      <KnowledgePartition id="partition5" isLast>
        <p>A short reference table of derivatives you will use often:</p>
        <LatexSnippet latex="\frac{d}{dx}\,e^x = e^x" displayMode />
        <LatexSnippet latex="\frac{d}{dx}\,\ln x = \frac{1}{x}" displayMode />
        <LatexSnippet latex="\frac{d}{dx}\,\sin x = \cos x" displayMode />
        <LatexSnippet latex="\frac{d}{dx}\,\cos x = -\sin x" displayMode />
        <LatexSnippet latex="\frac{d}{dx}\,\tan x = \sec^2 x" displayMode />
      </KnowledgePartition>

      <Quiz questions={quizQuestions} title="Derivatives Quiz" />

      <AuthorPartition
        name="Percepty Team"
        description="An introductory overview of single-variable differentiation rules."
        date="06-20-2025"
      />
    </div>
  );
}

export default DerivativesModule;