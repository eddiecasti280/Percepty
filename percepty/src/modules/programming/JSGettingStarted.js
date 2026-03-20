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
    options: ['print("Hello")', 'echo("Hello")', 'console.log("Hello")', 'System.out.println("Hello")'],
    correctIndex: 2,
    explanation: '\\text{JavaScript uses } \\texttt{console.log()} \\text{ for console output.}',
  },
  {
    question: 'What is the difference between let and const?',
    options: ['No difference', 'let can be reassigned, const cannot', 'const can be reassigned, let cannot', 'let is for numbers, const is for strings'],
    correctIndex: 1,
    explanation: '\\texttt{let} \\text{ allows reassignment; } \\texttt{const} \\text{ creates a binding that cannot be reassigned.}',
  },
  {
    question: 'What does typeof "hello" return?',
    options: ['"text"', '"string"', '"str"', '"char"'], correctIndex: 1,
    explanation: '\\text{The } \\texttt{typeof} \\text{ operator returns } \\texttt{"string"} \\text{ for string values.}',
  },
  {
    question: 'Which is the correct way to declare a constant?',
    options: ['constant x = 5;', 'const x = 5;', 'let const x = 5;', 'final x = 5;'],
    correctIndex: 1,
    explanation: '\\text{Use the } \\texttt{const} \\text{ keyword to declare constants in JavaScript.}',
  },
  {
    question: 'What will console.log(2 + "2") output?',
    options: ['4', '22', '"22"', 'Error'], correctIndex: 1,
    explanation: '\\text{JavaScript coerces the number to a string and concatenates: } 2 + \\texttt{"2"} = \\texttt{"22"}.',
  },
];

function JSGettingStarted() {
  return (
    <div className="module-page">
      <SectionHeading text="JavaScript: Getting Started" />
      <SubsectionHeading text="Installation" />
      <KnowledgePartition id="partition1">
        <p>Install <strong>Node.js</strong> from <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">nodejs.org</a>:</p>
        <CodingSnippet code={`# macOS (Homebrew)\nbrew install node\n\n# Ubuntu / Debian\nsudo apt update && sudo apt install nodejs npm`} language="bash" />
        <CodingSnippet code="node --version" language="bash" />
      </KnowledgePartition>
      <SubsectionHeading text="Hello, World!" />
      <KnowledgePartition id="partition2">
        <CodingSnippet code='console.log("Hello, World!");' language="javascript" />
        <CodingSnippet code="node hello.js" language="bash" />
      </KnowledgePartition>
      <SubsectionHeading text="Variables & Types" />
      <KnowledgePartition id="partition3">
        <CodingSnippet code={`const age = 25;          // number\nlet pi = 3.14159;        // number\nconst name = "Ada";      // string\nconst isValid = true;    // boolean\n\nconsole.log(typeof age); // "number"`} language="javascript" />
      </KnowledgePartition>
      <SubsectionHeading text="Basic Input / Output" />
      <KnowledgePartition id="partition4" isLast>
        <CodingSnippet code={`const readline = require("readline");\nconst rl = readline.createInterface({\n  input: process.stdin,\n  output: process.stdout,\n});\n\nrl.question("What is your name? ", (name) => {\n  console.log(\`Nice to meet you, \${name}!\`);\n  rl.close();\n});`} language="javascript" />
      </KnowledgePartition>
      <Quiz questions={quizQuestions} title="JavaScript Basics Quiz" />
    </div>
  );
}

export default JSGettingStarted;