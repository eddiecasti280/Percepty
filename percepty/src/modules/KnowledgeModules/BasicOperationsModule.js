import React from 'react';
import '../../styles/App.css';
import KnowledgePartition from '../../components/KnowledgePartition';
import SectionHeading from '../../components/SectionHeading';
import colors from '../../utils/constants';
import LatexSnippet from '../../components/LatexSnippet';
import 'katex/dist/katex.min.css';
import SubsectionHeading from '../../components/SubsectionHeading';
import ManimVid from '../../components/ManimVid';

function BasicOperationsModule() {
  return (
    <div style={{ backgroundColor: colors.floral_white, minHeight: '100vh', padding: '20px' }}>
      <SectionHeading text="Basic Operations" />
      <SubsectionHeading text="Addition"/>
      <KnowledgePartition id="partition1">
        <p>Let's start off with learning how to add two numbers! Let's say we have the numbers 1 and 2. 
            We would then take the each number and put them together to get a larger number.</p>
        <LatexSnippet latex='1+2=3' displayMode={true} />
        <ManimVid src="/media/videos/basicOperationsAnimations/1080p60/AddThirdCircle.mp4" />
      </KnowledgePartition>
      <KnowledgePartition id="partition2">
        <p>We can break down the equation and identify each of the parts!</p>
        <LatexSnippet latex='\boxed{1}+\boxed{2}=3' displayMode={true} />
        <p>These are the <b>addends</b>, or the numbers that make up the total value.</p>
      </KnowledgePartition>
      <KnowledgePartition id="partition3">
        <p>The <b>sum</b> is the total value obtained from the addends, as we saw earlier.</p>
        <LatexSnippet latex='1+2=\boxed{3}' displayMode={true} />
      </KnowledgePartition>
      <SubsectionHeading text="Subtraction"/>
      <KnowledgePartition id="partition4">
        <p>You can also remove from an existing number using subtraction. Let's say we want to get back to the number 1 starting
            from the number 3. Then we can take away 2 from 3 to get 1. 
        </p>
        <LatexSnippet latex='3-2=1' displayMode={true} />
      </KnowledgePartition>
      <KnowledgePartition id="partition5" >
        <p>Let's look at the parts. The <b>minuend</b> is the value being subtracted from.</p>
        <LatexSnippet latex='\boxed{3}-2=1' displayMode={true} />
      </KnowledgePartition>
      <KnowledgePartition id="partition6">
        <p>The <b>subtrahend</b> is the value that is subtracted from the minuend.</p>
        <LatexSnippet latex='3-\boxed{2}=1' displayMode={true} />
      </KnowledgePartition>
      <KnowledgePartition id="partition6" isLast={true}>
        <p>Finally, we have the <b>difference.</b> This is the value we end up with after subtracting from the initial value.</p>
        <LatexSnippet latex='3-2=\boxed{1}' displayMode={true} />
      </KnowledgePartition>
    </div>
  );
}

export default BasicOperationsModule;

