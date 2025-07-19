import React, { useRef } from 'react';
import colors from "../utils/constants";
import '../styles/App.css';

function KnowledgePartition({ children, id, isLast }) {
    const containerRef = useRef(null);

    const scrollToNext = () => {
        const nextPartitionId = `partition${parseInt(id.replace('partition', '')) + 1}`;
        const nextElement = document.getElementById(nextPartitionId);
        if (nextElement) {
            nextElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div>
            <div
                id={id}
                className="container"
                ref={containerRef}
                style={{ 
                    backgroundColor: colors.silver, 
                    padding: '20px', 
                    borderRadius: '8px', 
                    marginTop: '10px',
                    boxShadow: '0px 20px 20px rgba(0, 0, 0, 0.1)'
                }}
            >
                {children}
                {!isLast && (
                    <div
                        className="arrow"
                        style={{ textAlign: 'center', fontSize: '24px', marginTop: '5px', cursor: 'pointer' }}
                        onClick={scrollToNext}
                    >
                        &#x25BC;
                    </div>
                )}
            </div>
        </div>
    );
}

export default KnowledgePartition;
