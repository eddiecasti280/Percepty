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
    options: ['echo("Hello")', 'console.log("Hello")', 'print("Hello")', 'printf("Hello")'],
    correctIndex: 2,
    explanation: '\\text{Python uses the } \\texttt{print()} \\text{ function for console output.}',
  },
  {
    question: 'What is the data type of the value 3.14 in Python?',
    options: ['int', 'str', 'float', 'double'],
    correctIndex: 2,
    explanation: '\\text{Decimal numbers are } \\texttt{float} \\text{ values in Python — there is no separate double type.}',
  },
  {
    question: 'How do you get input from the user in Python?',
    options: ['scan()', 'input()', 'read()', 'get()'],
    correctIndex: 1,
    explanation: '\\text{The } \\texttt{input()} \\text{ function reads a line of text from the user.}',
  },
  {
    question: 'Which of these is a valid Python variable name?',
    options: ['2nd_place', 'my-var', 'my_var', 'class'],
    correctIndex: 2,
    explanation: '\\text{Names cannot start with a digit, contain hyphens, or be reserved keywords like } \\texttt{class}.',
  },
  {
    question: 'What does type(42) return?',
    options: ["<class 'int'>", "<class 'float'>", "<class 'str'>", '42'],
    correctIndex: 0,
    explanation: '42 \\text{ is an integer, so } \\texttt{type(42)} \\text{ returns int.}',
  },
];

function PythonGettingStarted() {
  return (
    <div className="module-page">
      <SectionHeading text="Python: Getting Started" />
      <SubsectionHeading text="Installation" />
      <KnowledgePartition id="partition1">
        <p>Download Python from <a href="https://www.python.org/downloads/" target="_blank" rel="noopener noreferrer">python.org</a>, or use a package manager:</p>
        <CodingSnippet code={`# macOS (Homebrew)\nbrew install python\n\n# Ubuntu / Debian\nsudo apt update && sudo apt install python3`} language="bash" />
        <p>Verify:</p>
        <CodingSnippet code="python3 --version" language="bash" />
      </KnowledgePartition>
      <SubsectionHeading text="Hello, World!" />
      <KnowledgePartition id="partition2">
        <p>Create <code>hello.py</code>:</p>
        <CodingSnippet code='print("Hello, World!")' language="python" />
        <CodingSnippet code="python3 hello.py" language="bash" />
      </KnowledgePartition>
      <SubsectionHeading text="Variables & Types" />
      <KnowledgePartition id="partition3">
        <CodingSnippet code={`age = 25          # int\npi  = 3.14159     # float\nname = "Ada"      # str\nis_valid = True   # bool\n\nprint(type(age))  # <class 'int'>`} language="python" />
      </KnowledgePartition>
      <SubsectionHeading text="Basic Input / Output" />
      <KnowledgePartition id="partition4" isLast>
        <CodingSnippet code={`name = input("What is your name? ")\nprint(f"Nice to meet you, {name}!")\n\nx = int(input("Enter a number: "))\nprint(f"Double that is {x * 2}")`} language="python" />
      </KnowledgePartition>
      <Quiz questions={quizQuestions} title="Python Basics Quiz" />
    </div>
  );
}

export default PythonGettingStarted;