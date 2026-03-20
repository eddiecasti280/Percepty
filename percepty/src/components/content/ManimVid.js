import React from 'react';
import '../../styles/Module.css';

function ManimVid({ src }) {
  return (
    <div className="manim-vid">
      <video width="600" controls>
        <source src={process.env.PUBLIC_URL + src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default ManimVid;

