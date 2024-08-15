import React from 'react';
import SectionHeading from '../SectionHeading';
import colors from '../constants';
import 'bootstrap/dist/css/bootstrap.min.css';
import ModuleCard from '../ModuleCard';

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
                imageSrc="path/to/image2.jpg" 
                title="Card 2" 
                text="This is some quick example text." 
                link="#"
            />
            <ModuleCard 
                imageSrc="path/to/image3.jpg" 
                title="Card 3" 
                text="This is some quick example text." 
                link="#"
            />
        </div>
        {/* Add more rows if needed */}
      </div>
    </div>
  );
}

export default MathematicsOverview;
