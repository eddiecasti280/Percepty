import React from 'react';
import '../../styles/Module.css';
import KnowledgePartition from '../../components/content/KnowledgePartition';
import SectionHeading from '../../components/common/SectionHeading';
import SubsectionHeading from '../../components/common/SubsectionHeading';
import CodingSnippet from '../../components/content/CodingSnippet';

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
    </div>
  );
}

export default PythonControlFlow;