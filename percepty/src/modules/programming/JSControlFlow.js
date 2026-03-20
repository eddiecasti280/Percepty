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
    options: [
      'if temperature > 30:',
      'if (temperature > 30) { }',
      'if temperature > 30 then',
      'if [temperature > 30]',
    ],
    correctIndex: 1,
    explanation:
      'JavaScript if statements use parentheses around the condition and braces for the block.',
  },
  {
    question: 'How do you write a for loop that iterates from 0 to 9?',
    options: [
      'for (let i = 0; i < 10; i++)',
      'for i in range(10):',
      'for (i = 0; i <= 9; i++)',
      'Both A and C are correct',
    ],
    correctIndex: 3,
    explanation:
      'Both "i < 10" and "i <= 9" produce the same result (0–9). Option B is Python syntax.',
  },
  {
    question: 'What does === check for in JavaScript?',
    options: [
      'Value equality only',
      'Type equality only',
      'Both value and type equality',
      'Reference equality',
    ],
    correctIndex: 2,
    explanation:
      '=== is the strict equality operator and checks both value and type.',
  },
  {
    question: 'What does "break" do inside a loop?',
    options: [
      'Pauses execution for 1 second',
      'Skips the current iteration',
      'Exits the loop immediately',
      'Throws an error',
    ],
    correctIndex: 2,
    explanation: '"break" exits the loop immediately.',
  },
  {
    question: 'What will this code output?\n\nfor (let i = 0; i < 3; i++) {\n  console.log(i);\n}',
    options: ['1 2 3', '0 1 2', '0 1 2 3', '1 2'],
    correctIndex: 1,
    explanation: 'The loop runs for i = 0, 1, 2 (stops when i reaches 3).',
  },
];

function JSControlFlow() {
  return (
    <div className="module-page">
      <SectionHeading text="JavaScript: Control Flow" />

      <SubsectionHeading text="Conditional Statements" />

      <KnowledgePartition id="partition1">
        <p>
          Use <code>if</code>, <code>else if</code>, and <code>else</code> to
          branch your programme. JavaScript uses braces to delimit blocks.
        </p>
        <CodingSnippet
          code={`const temperature = 30;

if (temperature > 35) {
  console.log("It's very hot outside.");
} else if (temperature > 20) {
  console.log("The weather is pleasant.");
} else {
  console.log("It might be cold — bring a jacket.");
}`}
          language="javascript"
        />
      </KnowledgePartition>

      <SubsectionHeading text="For Loops" />

      <KnowledgePartition id="partition2">
        <p>
          The classic C-style <code>for</code> loop is the most common form.
          JavaScript also offers <code>for...of</code> for iterables and{' '}
          <code>for...in</code> for object keys.
        </p>
        <CodingSnippet
          code={`// Sum the numbers 1 through 10
let total = 0;
for (let i = 1; i <= 10; i++) {
  total += i;
}

console.log(\`Sum = \${total}\`); // Sum = 55`}
          language="javascript"
        />
      </KnowledgePartition>

      <SubsectionHeading text="While Loops" />

      <KnowledgePartition id="partition3">
        <p>
          A <code>while</code> loop keeps running as long as its condition is
          truthy. Remember to update the condition inside the body.
        </p>
        <CodingSnippet
          code={`let count = 0;
while (count < 5) {
  console.log(\`count is \${count}\`);
  count++;
}`}
          language="javascript"
        />
      </KnowledgePartition>

      <SubsectionHeading text="Break & Continue" />

      <KnowledgePartition id="partition4" isLast>
        <p>
          <code>break</code> exits the loop immediately.{' '}
          <code>continue</code> skips to the next iteration — identical
          semantics to Python.
        </p>
        <CodingSnippet
          code={`// Print only odd numbers, stop at 9
for (let i = 0; i < 20; i++) {
  if (i === 9) break;
  if (i % 2 === 0) continue;
  console.log(i); // 1, 3, 5, 7
}`}
          language="javascript"
        />
      </KnowledgePartition>

      <Quiz questions={quizQuestions} title="Control Flow Quiz" />
    </div>
  );
}

export default JSControlFlow;