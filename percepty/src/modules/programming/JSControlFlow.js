import React from 'react';
import '../../styles/Module.css';
import KnowledgePartition from '../../components/content/KnowledgePartition';
import SectionHeading from '../../components/common/SectionHeading';
import SubsectionHeading from '../../components/common/SubsectionHeading';
import CodingSnippet from '../../components/content/CodingSnippet';

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
    </div>
  );
}

export default JSControlFlow;