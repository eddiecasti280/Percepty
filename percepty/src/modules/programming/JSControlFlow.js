import React from 'react';
import '../../styles/Module.css';
import KnowledgePartition from '../../components/content/KnowledgePartition';
import SectionHeading from '../../components/common/SectionHeading';
import SubsectionHeading from '../../components/common/SubsectionHeading';
import CodingSnippet from '../../components/content/CodingSnippet';
import Quiz from '../../components/content/Quiz';

const quizQuestions = [
  {
    question: 'Which is the correct syntax for an if statement in JavaScript?',
    options: ['if temperature > 30:', 'if (temperature > 30) { }', 'if temperature > 30 then', 'if [temperature > 30]'],
    correctIndex: 1,
    explanation: '\\text{JavaScript } \\texttt{if} \\text{ statements use parentheses for the condition and braces for the block.}',
  },
  {
    question: 'How do you write a for loop that iterates from 0 to 9?',
    options: ['for (let i = 0; i < 10; i++)', 'for i in range(10):', 'for (i = 0; i <= 9; i++)', 'Both A and C'],
    correctIndex: 3,
    explanation: '\\text{Both } i < 10 \\text{ and } i \\leq 9 \\text{ produce the range } 0 \\text{ through } 9.',
  },
  {
    question: 'What does === check for in JavaScript?',
    options: ['Value equality only', 'Type equality only', 'Both value and type equality', 'Reference equality'],
    correctIndex: 2,
    explanation: '\\texttt{===} \\text{ is the strict equality operator — it checks both value and type.}',
  },
  {
    question: 'What does "break" do inside a loop?',
    options: ['Pauses for 1 second', 'Skips the current iteration', 'Exits the loop immediately', 'Throws an error'],
    correctIndex: 2,
    explanation: '\\texttt{break} \\text{ exits the enclosing loop immediately.}',
  },
  {
    question: 'What will this code output?  for (let i = 0; i < 3; i++) { console.log(i); }',
    options: ['1 2 3', '0 1 2', '0 1 2 3', '1 2'], correctIndex: 1,
    explanation: '\\text{The loop runs for } i = 0, 1, 2 \\text{ (stops when } i = 3\\text{).}',
  },
];

function JSControlFlow() {
  return (
    <div className="module-page">
      <SectionHeading text="JavaScript: Control Flow" />
      <SubsectionHeading text="Conditional Statements" />
      <KnowledgePartition id="partition1">
        <CodingSnippet code={`const temperature = 30;\n\nif (temperature > 35) {\n  console.log("It's very hot outside.");\n} else if (temperature > 20) {\n  console.log("The weather is pleasant.");\n} else {\n  console.log("It might be cold — bring a jacket.");\n}`} language="javascript" />
      </KnowledgePartition>
      <SubsectionHeading text="For Loops" />
      <KnowledgePartition id="partition2">
        <CodingSnippet code={`let total = 0;\nfor (let i = 1; i <= 10; i++) {\n  total += i;\n}\n\nconsole.log(\`Sum = \${total}\`); // Sum = 55`} language="javascript" />
      </KnowledgePartition>
      <SubsectionHeading text="While Loops" />
      <KnowledgePartition id="partition3">
        <CodingSnippet code={`let count = 0;\nwhile (count < 5) {\n  console.log(\`count is \${count}\`);\n  count++;\n}`} language="javascript" />
      </KnowledgePartition>
      <SubsectionHeading text="Break & Continue" />
      <KnowledgePartition id="partition4" isLast>
        <CodingSnippet code={`for (let i = 0; i < 20; i++) {\n  if (i === 9) break;\n  if (i % 2 === 0) continue;\n  console.log(i); // 1, 3, 5, 7\n}`} language="javascript" />
      </KnowledgePartition>
      <Quiz questions={quizQuestions} title="Control Flow Quiz" />
    </div>
  );
}

export default JSControlFlow;