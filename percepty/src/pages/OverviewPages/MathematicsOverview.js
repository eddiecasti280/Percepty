import React from 'react';
import SectionHeading from '../../components/SectionHeading';
import colors from '../../utils/constants';
import ModuleCard from '../../components/ModuleCard';

function MathematicsOverview() {
  return (
    <div style={{ backgroundColor: colors.floral_white, minHeight: '100vh', padding: '20px' }}>
      <SectionHeading text="Mathematics Progress" />
      <div className="container mt-4">
        <div className="row">
            <ModuleCard 
                imageSrc="percepty/src/moduleIcons/integral_icon.jpg" 
                title="Integration" 
                text="Learn how to integrate basic expressions." 
                link="/integration"
            />
            <ModuleCard 
                imageSrc="percepty/src/moduleIcons/operations.jpg" 
                title="Basic Operations" 
                text="This is some quick example text." 
                link="/basicOperations"
            />
            <ModuleCard 
                imageSrc="percepty/src/moduleIcons/vectors.jpg" 
                title="Vector Arithmetic" 
                text="This is some quick example text." 
                link="/vectorArithmetic"
            />
        </div>
      </div>
    </div>
  );
}

export default MathematicsOverview;
