import React, { useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import colors from "./constants";
import './App.css';

function KnowledgePartition({ children, id, isLast }) {
    const containerRef = useRef(null);

    const scrollToNext = () => {
        const nextElement = document.getElementById(id === 'partition1' ? 'partition2' : 'partition1');
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
                style={{ backgroundColor: colors.silver, padding: '20px', borderRadius: '8px', marginTop: '10px' }}
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
