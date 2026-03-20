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
    options: ['when', 'if', 'case', 'switch'],
    correctIndex: 1,
    explanation: 'Python uses "if" to begin conditional statements.',
  },
  {
    question: 'How do you iterate over the numbers 0 through 9 in Python?',
    options: [
      'for i in range(10):',
      'for i in range(1, 10):',
      'for (i = 0; i < 10; i++):',
      'foreach i in 0..9:',
    ],
    correctIndex: 0,
    explanation:
      'range(10) generates numbers 0 through 9. range(1, 10) would give 1–9.',
  },
  {
    question: 'What does the "break" statement do inside a loop?',
    options: [
      'Skips to the next iteration',
      'Exits the loop immediately',
      'Restarts the loop from the beginning',
      'Does nothing',
    ],
    correctIndex: 1,
    explanation: '"break" exits the loop immediately.',
  },
  {
    question: 'What does the "continue" statement do?',
    options: [
      'Exits the loop',
      'Runs the loop one more time',
      'Skips the rest of the current iteration and moves to the next',
      'Pauses the loop',
    ],
    correctIndex: 2,
    explanation:
      '"continue" skips any remaining code in the current iteration and proceeds to the next iteration.',
  },
  {
    question: 'What will this code print?\n\nfor i in range(3):\n    print(i)',
    options: ['1 2 3', '0 1 2', '0 1 2 3', '1 2'],
    correctIndex: 1,
    explanation: 'range(3) produces 0, 1, 2.',
  },
];

function PythonControlFlow() {
  return (
    <div className="module-page">
      <SectionHeading text="Python: Control Flow" />

      <SubsectionHeading text="Conditional Statements" />

      <KnowledgePartition id="partition1">
        <p>
          Use <code>if</code>, <code>elif</code>, and <code>else</code> to
          branch your programme based on conditions. Python relies on
          indentation rather than braces.
        </p>
        <CodingSnippet
          code={`temperature = 30

if temperature > 35:
    print("It's very hot outside.")
elif temperature > 20:
    print("The weather is pleasant.")
else:
    print("It might be cold — bring a jacket.")`}
          language="python"
        />
      </KnowledgePartition>

      <SubsectionHeading text="For Loops" />

      <KnowledgePartition id="partition2">
        <p>
          A <code>for</code> loop iterates over any <em>iterable</em> — lists,
          strings, ranges, and more.
        </p>
        <CodingSnippet
          code={`# Sum the numbers 1 through 10
total = 0
for i in range(1, 11):
    total += i

print(f"Sum = {total}")  # Sum = 55`}
          language="python"
        />
      </KnowledgePartition>

      <SubsectionHeading text="While Loops" />

      <KnowledgePartition id="partition3">
        <p>
          A <code>while</code> loop keeps running as long as its condition
          remains <code>True</code>. Be careful to update the condition inside
          the loop to avoid infinite loops.
        </p>
        <CodingSnippet
          code={`count = 0
while count < 5:
    print(f"count is {count}")
    count += 1`}
          language="python"
        />
      </KnowledgePartition>

      <SubsectionHeading text="Break & Continue" />

      <KnowledgePartition id="partition4" isLast>
        <p>
          <code>break</code> exits the loop immediately.{' '}
          <code>continue</code> skips to the next iteration.
        </p>
        <CodingSnippet
          code={`# Print only odd numbers, stop at 9
for i in range(20):
    if i == 9:
        break
    if i % 2 == 0:
        continue
    print(i)   # 1, 3, 5, 7`}
          language="python"
        />
      </KnowledgePartition>

      <Quiz questions={quizQuestions} title="Control Flow Quiz" />
    </div>
  );
}

export default PythonControlFlow;