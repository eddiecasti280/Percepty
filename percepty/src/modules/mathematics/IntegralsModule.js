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
    question: 'What does a definite integral geometrically represent?',
    options: ['The slope of a function', 'The area under a curve', 'The maximum value of a function', 'The average rate of change'],
    correctIndex: 1,
    explanation: '\\text{A definite integral computes the signed area between the curve and the } x\\text{-axis over the interval } [a,b].',
  },
  {
    question: 'What is the integral of x² with respect to x?',
    latex: '\\int x^2 \\, dx = \\;?',
    options: ['2x + C', 'x³ + C', 'x³/3 + C', 'x²/2 + C'],
    optionsLatex: ['2x + C', 'x^3 + C', '\\frac{x^3}{3} + C', '\\frac{x^2}{2} + C'],
    correctIndex: 2,
    explanation: '\\text{By the power rule } \\int x^n\\,dx = \\frac{x^{n+1}}{n+1}+C. \\text{ For } n=2:\\; \\frac{x^3}{3}+C.',
  },
  {
    question: 'What is ∫ 5 dx?',
    latex: '\\int 5 \\, dx = \\;?',
    options: ['5', '5x + C', '5x', '0'],
    optionsLatex: ['5', '5x + C', '5x', '0'],
    correctIndex: 1,
    explanation: '\\text{The integral of a constant } k \\text{ is } kx+C. \\text{ So } \\int 5\\,dx = 5x + C.',
  },
  {
    question: 'According to the Fundamental Theorem of Calculus, if F\'(x) = f(x), then:',
    latex: '\\int_a^b f(x) \\, dx = \\;?',
    options: ['F(a) - F(b)', 'F(b) - F(a)', 'f(b) - f(a)', 'F(a) + F(b)'],
    optionsLatex: ['F(a) - F(b)', 'F(b) - F(a)', 'f(b) - f(a)', 'F(a) + F(b)'],
    correctIndex: 1,
    explanation: '\\text{The FTC states } \\int_a^b f(x)\\,dx = F(b) - F(a), \\text{ where } F \\text{ is any antiderivative of } f.',
  },
  {
    question: 'What is ∫ (3x² + 2x) dx?',
    latex: '\\int (3x^2 + 2x) \\, dx = \\;?',
    options: ['6x + 2 + C', 'x³ + x² + C', '3x³ + 2x² + C', 'x³ + 2x + C'],
    optionsLatex: ['6x + 2 + C', 'x^3 + x^2 + C', '3x^3 + 2x^2 + C', 'x^3 + 2x + C'],
    correctIndex: 1,
    explanation: '\\text{Integrate term by term: } \\int 3x^2\\,dx = x^3 \\text{ and } \\int 2x\\,dx = x^2. \\text{ Result: } x^3 + x^2 + C.',
  },
];

function IntegralsModule() {
  return (
    <div className="module-page">
      <SectionHeading text="Integration" />
      <SubsectionHeading text="What is Integration?" />
      <KnowledgePartition id="partition1">
        <p><strong>Integration</strong> is the reverse process of differentiation. While a derivative tells us the rate of change, an integral helps us find the total accumulation — such as the area under a curve.</p>
        <LatexSnippet latex="\text{Derivative: } \frac{d}{dx}[\text{position}] = \text{velocity}" displayMode />
        <LatexSnippet latex="\text{Integral: } \int \text{velocity} \, dt = \text{position}" displayMode />
      </KnowledgePartition>
      <SubsectionHeading text="Indefinite Integrals" />
      <KnowledgePartition id="partition2">
        <p>An <strong>indefinite integral</strong> reverses differentiation. Since the derivative of a constant is zero, antiderivatives include an arbitrary constant <em>C</em>:</p>
        <LatexSnippet latex="\int f(x) \, dx = F(x) + C" displayMode />
        <p>For example, since the derivative of x² is 2x:</p>
        <LatexSnippet latex="\int 2x \, dx = x^2 + C" displayMode />
      </KnowledgePartition>
      <SubsectionHeading text="Basic Integration Rules" />
      <KnowledgePartition id="partition3">
        <p><strong>Power Rule</strong> — for any real number n ≠ −1:</p>
        <LatexSnippet latex="\int x^n \, dx = \frac{x^{n+1}}{n+1} + C" displayMode />
        <p><strong>Constant Multiple Rule:</strong></p>
        <LatexSnippet latex="\int k \cdot f(x) \, dx = k \int f(x) \, dx" displayMode />
        <p><strong>Sum / Difference Rule:</strong></p>
        <LatexSnippet latex="\int [f(x) \pm g(x)] \, dx = \int f(x) \, dx \pm \int g(x) \, dx" displayMode />
      </KnowledgePartition>
      <SubsectionHeading text="Definite Integrals" />
      <KnowledgePartition id="partition4">
        <p>A <strong>definite integral</strong> computes the signed area between a function and the x-axis over [a, b]:</p>
        <LatexSnippet latex="\int_0^2 x \, dx = \left[ \frac{x^2}{2} \right]_0^2 = \frac{4}{2} - 0 = 2" displayMode />
      </KnowledgePartition>
      <SubsectionHeading text="Fundamental Theorem of Calculus" />
      <KnowledgePartition id="partition5" isLast>
        <p>If F is any antiderivative of f on [a, b]:</p>
        <LatexSnippet latex="\int_a^b f(x) \, dx = F(b) - F(a)" displayMode />
      </KnowledgePartition>
      <Quiz questions={quizQuestions} title="Integration Quiz" />
      <AuthorPartition name="Percepty Team" description="An introduction to integral calculus and the Fundamental Theorem." date="06-25-2025" />
    </div>
  );
}

export default IntegralsModule;