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
    explanation: '\\text{By the power rule } \\frac{d}{dx}[x^n] = nx^{n-1}. \\text{ So } \\frac{d}{dx}[x^3] = 3x^2.',
  },
  {
    question: 'What is the derivative of sin(x)?',
    latex: '\\frac{d}{dx}\\sin(x) = \\;?',
    options: ['-cos(x)', 'cos(x)', 'sin(x)', '-sin(x)'],
    optionsLatex: ['-\\cos(x)', '\\cos(x)', '\\sin(x)', '-\\sin(x)'],
    correctIndex: 1,
    explanation: '\\text{The derivative of } \\sin(x) \\text{ is } \\cos(x).',
  },
  {
    question: 'Using the chain rule, what is the derivative of e^(2x)?',
    latex: '\\frac{d}{dx}\\,e^{2x} = \\;?',
    options: ['e^(2x)', '2eˣ', '2e^(2x)', 'e^(2x)/2'],
    optionsLatex: ['e^{2x}', '2e^x', '2e^{2x}', '\\frac{e^{2x}}{2}'],
    correctIndex: 2,
    explanation: '\\text{Chain rule: } \\frac{d}{dx}[e^{2x}] = e^{2x} \\cdot 2 = 2e^{2x}.',
  },
  {
    question: 'What is the derivative of ln(x)?',
    latex: '\\frac{d}{dx}\\ln(x) = \\;?',
    options: ['1/x', 'x', 'ln(x)/x', '1/(x·ln(x))'],
    optionsLatex: ['\\frac{1}{x}', 'x', '\\frac{\\ln(x)}{x}', '\\frac{1}{x \\cdot \\ln(x)}'],
    correctIndex: 0,
    explanation: '\\text{The derivative of } \\ln(x) \\text{ is } \\frac{1}{x}.',
  },
  {
    question: 'What is the derivative of 5x⁴ + 3x² − 7?',
    latex: '\\frac{d}{dx}(5x^4 + 3x^2 - 7) = \\;?',
    options: ['20x³ + 6x', '20x³ + 6x − 7', '5x³ + 3x', '20x⁴ + 6x²'],
    optionsLatex: ['20x^3 + 6x', '20x^3 + 6x - 7', '5x^3 + 3x', '20x^4 + 6x^2'],
    correctIndex: 0,
    explanation: '\\text{Term by term: } 5 \\cdot 4x^3 + 3 \\cdot 2x - 0 = 20x^3 + 6x.',
  },
];

function DerivativesModule() {
  return (
    <div className="module-page">
      <SectionHeading text="Derivatives" />
      <SubsectionHeading text="Definition" />
      <KnowledgePartition id="partition1">
        <p>The <strong>derivative</strong> measures the instantaneous rate of change:</p>
        <LatexSnippet latex="f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}" displayMode />
      </KnowledgePartition>
      <SubsectionHeading text="Power Rule" />
      <KnowledgePartition id="partition2">
        <LatexSnippet latex="\frac{d}{dx}\,x^n = n\,x^{n-1}" displayMode />
        <LatexSnippet latex="\frac{d}{dx}\,x^3 = 3x^2" displayMode />
        <LatexSnippet latex="\frac{d}{dx}\,\sqrt{x} = \frac{1}{2}\,x^{-1/2}" displayMode />
      </KnowledgePartition>
      <SubsectionHeading text="Product Rule" />
      <KnowledgePartition id="partition3">
        <LatexSnippet latex="\frac{d}{dx}\bigl[f(x)\,g(x)\bigr] = f'(x)\,g(x) + f(x)\,g'(x)" displayMode />
      </KnowledgePartition>
      <SubsectionHeading text="Chain Rule" />
      <KnowledgePartition id="partition4">
        <LatexSnippet latex="\frac{d}{dx}\bigl[f(g(x))\bigr] = f'(g(x))\cdot g'(x)" displayMode />
        <p>Example:</p>
        <LatexSnippet latex="\frac{d}{dx}\sin(x^2) = \cos(x^2)\cdot 2x" displayMode />
      </KnowledgePartition>
      <SubsectionHeading text="Common Derivatives" />
      <KnowledgePartition id="partition5" isLast>
        <LatexSnippet latex="\frac{d}{dx}\,e^x = e^x" displayMode />
        <LatexSnippet latex="\frac{d}{dx}\,\ln x = \frac{1}{x}" displayMode />
        <LatexSnippet latex="\frac{d}{dx}\,\sin x = \cos x" displayMode />
        <LatexSnippet latex="\frac{d}{dx}\,\cos x = -\sin x" displayMode />
        <LatexSnippet latex="\frac{d}{dx}\,\tan x = \sec^2 x" displayMode />
      </KnowledgePartition>
      <Quiz questions={quizQuestions} title="Derivatives Quiz" />
      <AuthorPartition name="Percepty Team" description="An introductory overview of single-variable differentiation rules." date="06-20-2025" />
    </div>
  );
}

export default DerivativesModule;