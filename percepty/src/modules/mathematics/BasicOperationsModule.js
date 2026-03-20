import React from 'react';
import '../../styles/Module.css';
import KnowledgePartition from '../../components/content/KnowledgePartition';
import SectionHeading from '../../components/common/SectionHeading';
import SubsectionHeading from '../../components/common/SubsectionHeading';
import LatexSnippet from '../../components/content/LatexSnippet';
import ManimVid from '../../components/content/ManimVid';
import 'katex/dist/katex.min.css';

function BasicOperationsModule() {
  return (
    <div className="module-page">
      <SectionHeading text="Basic Operations" />

      <SubsectionHeading text="Addition" />

      <KnowledgePartition id="partition1">
        <p>
          Let's start with adding two numbers. Take the numbers 1 and 2 — when
          we combine them we get a larger number:
        </p>
        <LatexSnippet latex="1+2=3" displayMode />
        <ManimVid src="/media/videos/basicOperationsAnimations/1080p60/AddThirdCircle.mp4" />
      </KnowledgePartition>

      <KnowledgePartition id="partition2">
        <p>Breaking the equation apart, the individual numbers are the <strong>addends</strong>:</p>
        <LatexSnippet latex="\boxed{1}+\boxed{2}=3" displayMode />
      </KnowledgePartition>

      <KnowledgePartition id="partition3">
        <p>The result is the <strong>sum</strong>:</p>
        <LatexSnippet latex="1+2=\boxed{3}" displayMode />
      </KnowledgePartition>

      <SubsectionHeading text="Subtraction" />

      <KnowledgePartition id="partition4">
        <p>
          Subtraction lets you remove from an existing quantity. Starting from 3,
          take away 2 to get back to 1:
        </p>
        <LatexSnippet latex="3-2=1" displayMode />
      </KnowledgePartition>

      <KnowledgePartition id="partition5">
        <p>The <strong>minuend</strong> is the value being subtracted from:</p>
        <LatexSnippet latex="\boxed{3}-2=1" displayMode />
      </KnowledgePartition>

      <KnowledgePartition id="partition6">
        <p>The <strong>subtrahend</strong> is the value subtracted:</p>
        <LatexSnippet latex="3-\boxed{2}=1" displayMode />
      </KnowledgePartition>

      <KnowledgePartition id="partition7" isLast>
        <p>The result is the <strong>difference</strong>:</p>
        <LatexSnippet latex="3-2=\boxed{1}" displayMode />
      </KnowledgePartition>
    </div>
  );
}

export default BasicOperationsModule;