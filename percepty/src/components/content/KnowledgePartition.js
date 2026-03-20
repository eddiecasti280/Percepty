import React from 'react';
import '../../styles/Module.css';

function KnowledgePartition({ children, id, isLast }) {
  const scrollToNext = () => {
    const num = parseInt(id.replace('partition', ''), 10);
    const next = document.getElementById(`partition${num + 1}`);
    if (next) next.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id={id} className="knowledge-partition">
      {children}
      {!isLast && (
        <div
          className="arrow"
          style={{ textAlign: 'center', fontSize: '24px', marginTop: '8px', cursor: 'pointer' }}
          onClick={scrollToNext}
          role="button"
          aria-label="Scroll to next section"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && scrollToNext()}
        >
          &#x25BC;
        </div>
      )}
    </div>
  );
}

export default KnowledgePartition;