import React from 'react';
import '../../styles/Module.css';
import KnowledgePartition from '../../components/content/KnowledgePartition';
import SectionHeading from '../../components/common/SectionHeading';
import SubsectionHeading from '../../components/common/SubsectionHeading';
import CodingSnippet from '../../components/content/CodingSnippet';

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
          </a>:
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
          (immutable binding), <code>let</code> (block-scoped), and the
          legacy <code>var</code> (function-scoped). Prefer{' '}
          <code>const</code> by default and <code>let</code> when you need
          reassignment.
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
          <code>console.log()</code> for output. In Node.js, use the
          built-in <code>readline</code> module:
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
    </div>
  );
}

export default JSGettingStarted;