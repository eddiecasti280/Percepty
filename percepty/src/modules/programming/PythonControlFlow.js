import React from 'react';
import '../../styles/Module.css';
import KnowledgePartition from '../../components/content/KnowledgePartition';
import SectionHeading from '../../components/common/SectionHeading';
import SubsectionHeading from '../../components/common/SubsectionHeading';
import CodingSnippet from '../../components/content/CodingSnippet';
import Quiz from '../../components/content/Quiz';

const quizQuestions = [
  {
    question: 'Which keyword starts a conditional statement in Python?',
    options: ['when', 'if', 'case', 'switch'], correctIndex: 1,
    explanation: '\\text{Python uses } \\texttt{if} \\text{ to begin conditional statements.}',
  },
  {
    question: 'How do you iterate over the numbers 0 through 9?',
    options: ['for i in range(10):', 'for i in range(1, 10):', 'for (i = 0; i < 10; i++):', 'foreach i in 0..9:'],
    correctIndex: 0,
    explanation: '\\texttt{range(10)} \\text{ generates } 0, 1, 2, \\ldots, 9.',
  },
  {
    question: 'What does the "break" statement do inside a loop?',
    options: ['Skips to the next iteration', 'Exits the loop immediately', 'Restarts the loop', 'Does nothing'],
    correctIndex: 1,
    explanation: '\\texttt{break} \\text{ exits the enclosing loop immediately.}',
  },
  {
    question: 'What does the "continue" statement do?',
    options: ['Exits the loop', 'Runs the loop one more time', 'Skips remaining code and moves to the next iteration', 'Pauses the loop'],
    correctIndex: 2,
    explanation: '\\texttt{continue} \\text{ skips the rest of the current iteration and proceeds to the next one.}',
  },
  {
    question: 'What will this code print?  for i in range(3): print(i)',
    options: ['1 2 3', '0 1 2', '0 1 2 3', '1 2'], correctIndex: 1,
    explanation: '\\texttt{range(3)} \\text{ produces } 0,\\,1,\\,2.',
  },
];

function PythonControlFlow() {
  return (
    <div className="module-page">
      <SectionHeading text="Python: Control Flow" />
      <SubsectionHeading text="Conditional Statements" />
      <KnowledgePartition id="partition1">
        <p>Use <code>if</code>, <code>elif</code>, and <code>else</code>:</p>
        <CodingSnippet code={`temperature = 30\n\nif temperature > 35:\n    print("It's very hot outside.")\nelif temperature > 20:\n    print("The weather is pleasant.")\nelse:\n    print("It might be cold — bring a jacket.")`} language="python" />
      </KnowledgePartition>
      <SubsectionHeading text="For Loops" />
      <KnowledgePartition id="partition2">
        <CodingSnippet code={`total = 0\nfor i in range(1, 11):\n    total += i\n\nprint(f"Sum = {total}")  # Sum = 55`} language="python" />
      </KnowledgePartition>
      <SubsectionHeading text="While Loops" />
      <KnowledgePartition id="partition3">
        <CodingSnippet code={`count = 0\nwhile count < 5:\n    print(f"count is {count}")\n    count += 1`} language="python" />
      </KnowledgePartition>
      <SubsectionHeading text="Break & Continue" />
      <KnowledgePartition id="partition4" isLast>
        <CodingSnippet code={`for i in range(20):\n    if i == 9:\n        break\n    if i % 2 == 0:\n        continue\n    print(i)   # 1, 3, 5, 7`} language="python" />
      </KnowledgePartition>
      <Quiz questions={quizQuestions} title="Control Flow Quiz" />
    </div>
  );
}

export default PythonControlFlow;