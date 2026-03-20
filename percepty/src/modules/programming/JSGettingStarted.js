import React from 'react';
import '../../styles/Module.css';
import KnowledgePartition from '../../components/content/KnowledgePartition';
import SectionHeading from '../../components/common/SectionHeading';
import SubsectionHeading from '../../components/common/SubsectionHeading';
import CodingSnippet from '../../components/content/CodingSnippet';
import Quiz from '../../components/content/Quiz';

const quizQuestions = [
  {
    question: 'How do you print "Hello" to the console in JavaScript?',
    options: [
      'print("Hello")',
      'echo("Hello")',
      'console.log("Hello")',
      'System.out.println("Hello")',
    ],
    correctIndex: 2,
    explanation: 'JavaScript uses console.log() for console output.',
  },
  {
    question: 'What is the difference between let and const?',
    options: [
      'There is no difference',
      'let can be reassigned, const cannot',
      'const can be reassigned, let cannot',
      'let is for numbers, const is for strings',
    ],
    correctIndex: 1,
    explanation:
      'Variables declared with let can be reassigned; const creates a binding that cannot be reassigned.',
  },
  {
    question: 'What does typeof "hello" return?',
    options: ['"text"', '"string"', '"str"', '"char"'],
    correctIndex: 1,
    explanation: 'The typeof operator returns "string" for string values.',
  },
  {
    question: 'Which is the correct way to declare a constant in JavaScript?',
    options: [
      'constant x = 5;',
      'const x = 5;',
      'let const x = 5;',
      'final x = 5;',
    ],
    correctIndex: 1,
    explanation: 'Use the const keyword to declare constants.',
  },
  {
    question: 'What will console.log(2 + "2") output?',
    options: ['4', '22', '"22"', 'Error'],
    correctIndex: 1,
    explanation:
      'JavaScript coerces the number to a string and concatenates, resulting in "22".',
  },
];

function JSGettingStarted() {
  return (
    <div className="module-page">
      <SectionHeading text="JavaScript: Getting Started" />

      <SubsectionHeading text="Installation" />

      <KnowledgePartition id="partition1">
        <p>
          JavaScript runs natively in every browser. For server-side work,
          install <strong>Node.js</strong> from{' '}
          <a
            href="https://nodejs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            nodejs.org
          </a>
          :
        </p>
        <CodingSnippet
          code={`# macOS (Homebrew)
brew install node

# Ubuntu / Debian
sudo apt update && sudo apt install nodejs npm`}
          language="bash"
        />
        <p>Verify the installation:</p>
        <CodingSnippet code="node --version" language="bash" />
      </KnowledgePartition>

      <SubsectionHeading text="Hello, World!" />

      <KnowledgePartition id="partition2">
        <p>
          Create a file called <code>hello.js</code> with one line:
        </p>
        <CodingSnippet
          code='console.log("Hello, World!");'
          language="javascript"
        />
        <p>Run it from the terminal:</p>
        <CodingSnippet code="node hello.js" language="bash" />
      </KnowledgePartition>

      <SubsectionHeading text="Variables & Types" />

      <KnowledgePartition id="partition3">
        <p>
          JavaScript has three ways to declare variables: <code>const</code>{' '}
          (immutable binding), <code>let</code> (block-scoped), and the legacy{' '}
          <code>var</code> (function-scoped). Prefer <code>const</code> by
          default and <code>let</code> when you need reassignment.
        </p>
        <CodingSnippet
          code={`const age = 25;          // number
let pi = 3.14159;        // number (reassignable)
const name = "Ada";      // string
const isValid = true;    // boolean

console.log(typeof age); // "number"`}
          language="javascript"
        />
      </KnowledgePartition>

      <SubsectionHeading text="Basic Input / Output" />

      <KnowledgePartition id="partition4" isLast>
        <p>
          In the browser, use <code>prompt()</code> for input and{' '}
          <code>console.log()</code> for output. In Node.js, use the built-in{' '}
          <code>readline</code> module:
        </p>
        <CodingSnippet
          code={`const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What is your name? ", (name) => {
  console.log(\`Nice to meet you, \${name}!\`);
  rl.close();
});`}
          language="javascript"
        />
      </KnowledgePartition>

      <Quiz questions={quizQuestions} title="JavaScript Basics Quiz" />
    </div>
  );
}

export default JSGettingStarted;