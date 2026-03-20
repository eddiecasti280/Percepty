import React from 'react';
import '../../styles/Module.css';
import KnowledgePartition from '../../components/content/KnowledgePartition';
import SectionHeading from '../../components/common/SectionHeading';
import SubsectionHeading from '../../components/common/SubsectionHeading';
import LatexSnippet from '../../components/content/LatexSnippet';
import ManimVid from '../../components/content/ManimVid';
import Quiz from '../../components/content/Quiz';
import 'katex/dist/katex.min.css';

const quizQuestions = [
  {
    question: 'What is 7 + 5?', latex: '7 + 5 = \\;?',
    options: ['10', '11', '12', '13'], correctIndex: 2,
    explanation: '7 + 5 = 12',
  },
  {
    question: 'What is 15 − 8?', latex: '15 - 8 = \\;?',
    options: ['5', '6', '7', '8'], correctIndex: 2,
    explanation: '15 - 8 = 7',
  },
  {
    question: 'What is 23 + 19?', latex: '23 + 19 = \\;?',
    options: ['40', '41', '42', '43'], correctIndex: 2,
    explanation: '23 + 19 = 42',
  },
  {
    question: 'What is 50 − 27?', latex: '50 - 27 = \\;?',
    options: ['13', '23', '27', '33'], correctIndex: 1,
    explanation: '50 - 27 = 23',
  },
  {
    question: 'What is 8 + 6 − 3?', latex: '8 + 6 - 3 = \\;?',
    options: ['9', '10', '11', '12'], correctIndex: 2,
    explanation: '8 + 6 = 14, \\quad 14 - 3 = 11',
  },
  {
    question: 'What is 100 − 45?', latex: '100 - 45 = \\;?',
    options: ['45', '55', '65', '75'], correctIndex: 1,
    explanation: '100 - 45 = 55',
  },
];

function BasicOperationsModule() {
  return (
    <div className="module-page">
      <SectionHeading text="Basic Operations" />
      <SubsectionHeading text="Addition" />
      <KnowledgePartition id="partition1">
        <p>Let's start with adding two numbers. Take 1 and 2 — when we combine them we get a larger number:</p>
        <LatexSnippet latex="1 + 2 = 3" displayMode />
        <ManimVid src="/media/videos/basicOperationsAnimations/1080p60/AddThirdCircle.mp4" />
      </KnowledgePartition>
      <KnowledgePartition id="partition2">
        <p>The individual numbers are the <strong>addends</strong>:</p>
        <LatexSnippet latex="\boxed{1} + \boxed{2} = 3" displayMode />
      </KnowledgePartition>
      <KnowledgePartition id="partition3">
        <p>The result is the <strong>sum</strong>:</p>
        <LatexSnippet latex="1 + 2 = \boxed{3}" displayMode />
      </KnowledgePartition>
      <SubsectionHeading text="Subtraction" />
      <KnowledgePartition id="partition4">
        <p>Subtraction removes from a quantity. Starting from 3, take away 2:</p>
        <LatexSnippet latex="3 - 2 = 1" displayMode />
      </KnowledgePartition>
      <KnowledgePartition id="partition5">
        <p>The <strong>minuend</strong> is the value being subtracted from:</p>
        <LatexSnippet latex="\boxed{3} - 2 = 1" displayMode />
      </KnowledgePartition>
      <KnowledgePartition id="partition6">
        <p>The <strong>subtrahend</strong> is the value subtracted:</p>
        <LatexSnippet latex="3 - \boxed{2} = 1" displayMode />
      </KnowledgePartition>
      <KnowledgePartition id="partition7" isLast>
        <p>The result is the <strong>difference</strong>:</p>
        <LatexSnippet latex="3 - 2 = \boxed{1}" displayMode />
      </KnowledgePartition>
      <Quiz questions={quizQuestions} title="Practice Problems" />
    </div>
  );
}

export default BasicOperationsModule;