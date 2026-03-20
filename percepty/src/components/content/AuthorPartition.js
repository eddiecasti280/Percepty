import React from 'react';
import Avatar, { genConfig } from 'react-nice-avatar';
import '../../styles/Module.css';

function AuthorPartition({ name, description, date }) {
  const outputDate = new Date(date).toDateString();
  const config = genConfig({
    sex: 'man',
    hairStyle: 'thick',
    shirtStyle: 'hoody',
    faceColor: '#d39972',
    glassesStyle: 'none',
    mouthStyle: 'smile',
    eyeStyle: 'circle',
  });
  const isURL = typeof description === 'string' && description.startsWith('http');

  return (
    <div className="author-partition">
      <Avatar style={{ width: '6rem', height: '6rem', flexShrink: 0 }} {...config} />
      <div className="author-partition-details">
        <p><strong>Author:</strong> {name}</p>
        <p>
          {isURL
            ? <a href={description} target="_blank" rel="noopener noreferrer">{description}</a>
            : description}
        </p>
        <p><strong>Published:</strong> {outputDate}</p>
      </div>
    </div>
  );
}

export default AuthorPartition;