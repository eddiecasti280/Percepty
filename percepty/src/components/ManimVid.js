import React from 'react';

function ManimVid({ src }) {
    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <video width="600" controls>
                <source src={process.env.PUBLIC_URL + src} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
}

export default ManimVid;
