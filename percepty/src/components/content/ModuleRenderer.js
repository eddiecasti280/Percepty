import React from 'react';
import SectionHeading from '../common/SectionHeading';
import SubsectionHeading from '../common/SubsectionHeading';
import KnowledgePartition from './KnowledgePartition';
import LatexSnippet from './LatexSnippet';
import CodingSnippet from './CodingSnippet';
import AuthorPartition from './AuthorPartition';
import Quiz from './Quiz';
import 'katex/dist/katex.min.css';

function ModuleRenderer({ data }) {
  if (!data) return null;
  const { title, sections = [], author, quiz } = data;

  return (
    <div className="module-page">
      <SectionHeading text={title} />

      {sections.map((section, sIdx) => (
        <React.Fragment key={sIdx}>
          {section.subsectionHeading && (
            <SubsectionHeading text={section.subsectionHeading} />
          )}
          <KnowledgePartition
            id={`partition${sIdx + 1}`}
            isLast={sIdx === sections.length - 1}
          >
            {section.blocks.map((block, bIdx) => {
              switch (block.type) {
                case 'text':
                  return <p key={bIdx}>{block.content}</p>;
                case 'latex':
                  return (
                    <LatexSnippet
                      key={bIdx}
                      latex={block.latex}
                      displayMode={block.displayMode ?? true}
                    />
                  );
                case 'code':
                  return (
                    <CodingSnippet
                      key={bIdx}
                      code={block.code}
                      language={block.language || 'python'}
                    />
                  );
                default:
                  return null;
              }
            })}
          </KnowledgePartition>
        </React.Fragment>
      ))}

      {quiz && quiz.questions && quiz.questions.length > 0 && (
        <Quiz questions={quiz.questions} title={quiz.title || 'Practice Questions'} />
      )}

      {author && author.name && (
        <AuthorPartition
          name={author.name}
          description={author.description}
          date={author.date}
        />
      )}
    </div>
  );
}

export default ModuleRenderer;