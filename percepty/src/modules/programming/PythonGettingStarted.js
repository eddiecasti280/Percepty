import React from 'react';
import '../../styles/Module.css';
import KnowledgePartition from '../../components/content/KnowledgePartition';
import SectionHeading from '../../components/common/SectionHeading';
import SubsectionHeading from '../../components/common/SubsectionHeading';
import CodingSnippet from '../../components/content/CodingSnippet';
import Quiz from '../../components/content/Quiz';

const quizQuestions = [
  {
    question: 'How do you print "Hello" in Python?',
    options: [
      'echo("Hello")',
      'console.log("Hello")',
      'print("Hello")',
      'printf("Hello")',
    ],
    correctIndex: 2,
    explanation: 'Python uses the print() function to output text.',
  },
  {
    question: 'What is the data type of the value 3.14 in Python?',
    options: ['int', 'str', 'float', 'double'],
    correctIndex: 2,
    explanation:
      'Decimal numbers are represented as floats in Python. (Python has no "double" type.)',
  },
  {
    question: 'How do you get input from the user in Python?',
    options: ['scan()', 'input()', 'read()', 'get()'],
    correctIndex: 1,
    explanation: 'The input() function reads a line of text from the user.',
  },
  {
    question: 'Which of these is a valid Python variable name?',
    options: ['2nd_place', 'my-var', 'my_var', 'class'],
    correctIndex: 2,
    explanation:
      'Variable names cannot start with a number, cannot contain hyphens, and cannot be reserved keywords like "class".',
  },
  {
    question: 'What does type(42) return?',
    options: ["<class 'int'>", "<class 'float'>", "<class 'str'>", '42'],
    correctIndex: 0,
    explanation: '42 is an integer, so type(42) returns <class \'int\'>.',
  },
];

function PythonGettingStarted() {
  return (
    <div className="module-page">
      <SectionHeading text="Python: Getting Started" />

      <SubsectionHeading text="Installation" />

      <KnowledgePartition id="partition1">
        <p>
          Download Python from{' '}
          <a
            href="https://www.python.org/downloads/"
            target="_blank"
            rel="noopener noreferrer"
          >
            python.org
          </a>
          . On macOS / Linux you can also use a package manager:
        </p>
        <CodingSnippet
          code={`# macOS (Homebrew)\nbrew install python\n\n# Ubuntu / Debian\nsudo apt update && sudo apt install python3`}
          language="bash"
        />
        <p>Verify the installation by checking the version:</p>
        <CodingSnippet code="python3 --version" language="bash" />
      </KnowledgePartition>

      <SubsectionHeading text="Hello, World!" />

      <KnowledgePartition id="partition2">
        <p>
          Create a file called <code>hello.py</code> and add the following line:
        </p>
        <CodingSnippet code='print("Hello, World!")' language="python" />
        <p>Run it from the terminal:</p>
        <CodingSnippet code="python3 hello.py" language="bash" />
        <p>
          You should see <code>Hello, World!</code> printed to the console.
        </p>
      </KnowledgePartition>

      <SubsectionHeading text="Variables & Types" />

      <KnowledgePartition id="partition3">
        <p>
          Python is dynamically typed — you don't declare types explicitly.
          Common built-in types include <code>int</code>, <code>float</code>,{' '}
          <code>str</code>, and <code>bool</code>:
        </p>
        <CodingSnippet
          code={`age = 25          # int\npi  = 3.14159     # float\nname = "Ada"      # str\nis_valid = True   # bool\n\nprint(type(age))  # <class 'int'>`}
          language="python"
        />
      </KnowledgePartition>

      <SubsectionHeading text="Basic Input / Output" />

      <KnowledgePartition id="partition4" isLast>
        <p>
          Use <code>input()</code> to read from the user and{' '}
          <code>print()</code> to display output. Note that{' '}
          <code>input()</code> always returns a string, so cast when needed:
        </p>
        <CodingSnippet
          code={`name = input("What is your name? ")\nprint(f"Nice to meet you, {name}!")\n\nx = int(input("Enter a number: "))\nprint(f"Double that is {x * 2}")`}
          language="python"
        />
      </KnowledgePartition>

      <Quiz questions={quizQuestions} title="Python Basics Quiz" />
    </div>
  );
}

export default PythonGettingStarted;